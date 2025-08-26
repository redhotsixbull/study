/**
 * 해답: 최소 윈도우 부분 문자열
 *
 * 슬라이딩 윈도우와 해시맵을 사용한 해결
 */

export function minWindow(s: string, t: string): string {
  if (s.length === 0 || t.length === 0) return "";

  // t의 문자 빈도를 저장
  const dictT = new Map<string, number>();
  for (const char of t) {
    dictT.set(char, (dictT.get(char) || 0) + 1);
  }

  const required = dictT.size; // t에서 고유 문자의 개수
  let formed = 0; // 현재 윈도우에서 조건을 만족하는 고유 문자의 개수

  const windowCounts = new Map<string, number>();

  let left = 0;
  let minLen = Infinity;
  let minLeft = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right]!;
    windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

    // 현재 문자의 빈도가 t에서 요구하는 빈도와 같아지면 formed 증가
    if (dictT.has(char) && windowCounts.get(char) === dictT.get(char)) {
      formed++;
    }

    // 모든 문자의 조건이 만족되면 윈도우를 축소 시도
    while (left <= right && formed === required) {
      // 현재 윈도우가 더 작으면 업데이트
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minLeft = left;
      }

      // 왼쪽 문자를 제거
      const leftChar = s[left]!;
      windowCounts.set(leftChar, windowCounts.get(leftChar)! - 1);

      if (
        dictT.has(leftChar) &&
        windowCounts.get(leftChar)! < dictT.get(leftChar)!
      ) {
        formed--;
      }

      left++;
    }
  }

  return minLen === Infinity ? "" : s.substring(minLeft, minLeft + minLen);
}

// 설명:
// 1. t의 문자 빈도를 저장
// 2. 슬라이딩 윈도우로 s를 탐색하면서 조건을 만족하는지 확인
// 3. 조건을 만족하면 윈도우를 축소하여 최소 길이를 찾음
