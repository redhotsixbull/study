/**
 * 해답: 유효한 애너그램
 *
 * 여러 가지 접근법으로 해결
 */

// 방법 1: 해시맵을 사용한 문자 빈도 계산
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const charCount = new Map<string, number>();

  // s의 문자들을 카운트
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // t의 문자들을 차감
  for (const char of t) {
    if (!charCount.has(char)) return false;

    const count = charCount.get(char)! - 1;
    if (count === 0) {
      charCount.delete(char);
    } else {
      charCount.set(char, count);
    }
  }

  return charCount.size === 0;
}

// 방법 2: 정렬을 사용한 비교
export function isAnagramSort(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");

  return sortedS === sortedT;
}

// 방법 3: 배열을 사용한 문자 빈도 계산 (알파벳 소문자만)
export function isAnagramArray(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const charCount = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    charCount[s.charCodeAt(i) - 97]++; // 'a'의 ASCII 코드는 97
    charCount[t.charCodeAt(i) - 97]--;
  }

  return charCount.every((count) => count === 0);
}

// 방법 4: 문자별 XOR 연산 (문자가 정확히 쌍을 이루는 경우만)
export function isAnagramXOR(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let xor = 0;

  for (let i = 0; i < s.length; i++) {
    xor ^= s.charCodeAt(i);
    xor ^= t.charCodeAt(i);
  }

  return xor === 0;
}

// 설명:
// 1. 해시맵 방법: 모든 문자에 대해 작동, O(n) 시간, O(k) 공간 (k는 고유 문자 수)
// 2. 정렬 방법: 간단하지만 O(n log n) 시간
// 3. 배열 방법: 알파벳 소문자만, O(n) 시간, O(1) 공간
// 4. XOR 방법: 특별한 경우에만 작동 (문자 빈도가 같을 때)
