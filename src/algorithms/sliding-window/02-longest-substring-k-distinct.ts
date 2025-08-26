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
  // 여기에 코드를 작성하세요
  throw new Error("구현되지 않음");
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
