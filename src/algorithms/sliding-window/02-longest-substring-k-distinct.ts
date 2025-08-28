/**
 * 문제: K개의 서로 다른 문자를 포함하는 가장 긴 부분 문자열
 *
 * 문자열이 주어졌을 때, 정확히 K개의 서로 다른 문자를 포함하는
 * 가장 긴 부분 문자열의 길이를 구하시오.
 *
 * 예시:
 * 입력: s = "araaci", k = 2
 * 출력: 4 (부분 문자열 "araa")
 *
 * 입력: s = "araaci", k = 1
 * 출력: 2 (부분 문자열 "aa")
 *
 * 시간 복잡도: O(n)
 * 공간 복잡도: O(k)
 */

export function longestSubstringKDistinct(s: string, k: number): number {
  let left = 0;
  let rightNumber = s.length - 1;
  let max = s.length;

  const result = evaluateString(s, left, rightNumber, k);

  return result?.length;
}

function evaluateString(
  s: string,
  left: number,
  right: number,
  targetNumber: number
) {
  // 사용된 문자열갯수가 목표치보다 많다면 윈도우 줄이기
  while (targetNumber < calculateUsedChar(s.slice(left, right))) {
    /// 왼쪽한칸올렸는데 사용갯수가 줄어들었다면
    if (
      calculateUsedChar(s.slice(left, right)) >
      calculateUsedChar(s.slice(left + 1, right))
    ) {
      left++;
      //오른쪽 한칸을 내렸는데 사용갯수가 줄어들었다면
    } else if (
      calculateUsedChar(s.slice(left, right)) >
      calculateUsedChar(s.slice(left, right - 1))
    ) {
      right--;
    }
  }

  return s.slice(left, right);
}

function calculateUsedChar(s: string) {
  if (s.length === 0) {
    return 0;
  }
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    set.add(s[i]);
  }
  return set.size;
}

// 테스트 케이스
export const testCases = [
  {
    input: { s: "araaci", k: 2 },
    expected: 4,
    description: "기본 케이스",
  },
  {
    input: { s: "araaci", k: 1 },
    expected: 2,
    description: "k=1인 경우",
  },
  {
    input: { s: "cbbebi", k: 3 },
    expected: 5,
    description: "다른 문자열",
  },
  {
    input: { s: "abcdef", k: 2 },
    expected: 2,
    description: "모든 문자가 다른 경우",
  },
  {
    input: { s: "aaaa", k: 1 },
    expected: 4,
    description: "모든 문자가 같은 경우",
  },
];
