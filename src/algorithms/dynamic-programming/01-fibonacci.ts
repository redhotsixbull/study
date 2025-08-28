/**
 * 문제: 피보나치 수열
 *
 * 피보나치 수열의 n번째 수를 구하시오.
 * F(0) = 0, F(1) = 1
 * F(n) = F(n-1) + F(n-2) for n > 1
 *
 * 예시:
 * 입력: n = 2
 * 출력: 1
 *
 * 입력: n = 3
 * 출력: 2
 *
 * 입력: n = 4
 * 출력: 3
 *
 * 시간 복잡도: O(n)
 * 공간 복잡도: O(1) - 최적화된 버전
 */

export function fibonacci(n: number): number {
  if (n <= 1) return n;

  let prev1 = 0;
  let prev2 = 1;

  // i <= n 으로해야 마지막 10번째까지 하는것.
  for (let i = 2; i <= n; i++) {
    let current = prev1 + prev2;

    //다음꺼 세팅
    prev1 = prev2;
    prev2 = current;
  }

  return prev2;
}

// 테스트 케이스
export const testCases = [
  {
    input: { n: 0 },
    expected: 0,
    description: "기저 조건 F(0)",
  },
  {
    input: { n: 1 },
    expected: 1,
    description: "기저 조건 F(1)",
  },
  {
    input: { n: 2 },
    expected: 1,
    description: "F(2) = F(1) + F(0)",
  },
  {
    input: { n: 3 },
    expected: 2,
    description: "F(3) = F(2) + F(1)",
  },
  {
    input: { n: 4 },
    expected: 3,
    description: "F(4) = F(3) + F(2)",
  },
  {
    input: { n: 10 },
    expected: 55,
    description: "더 큰 수",
  },
];
