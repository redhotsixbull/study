/**
 * 해답: 피보나치 수열
 *
 * 동적 프로그래밍을 사용한 여러 가지 해결 방법
 */

// 방법 1: 상향식 (Bottom-up) - 공간 최적화 O(1)
export function fibonacci(n: number): number {
  if (n <= 1) return n;

  let prev2 = 0; // F(0)
  let prev1 = 1; // F(1)

  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

// 방법 2: 상향식 (Bottom-up) - 배열 사용 O(n)
export function fibonacciDP(n: number): number {
  if (n <= 1) return n;

  const dp: number[] = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1]! + dp[i - 2]!;
  }

  return dp[n]!;
}

// 방법 3: 하향식 (Top-down) - 메모이제이션
export function fibonacciMemo(n: number): number {
  const memo = new Map<number, number>();

  function fib(n: number): number {
    if (n <= 1) return n;

    if (memo.has(n)) {
      return memo.get(n)!;
    }

    const result = fib(n - 1) + fib(n - 2);
    memo.set(n, result);
    return result;
  }

  return fib(n);
}

// 설명:
// 1. 최적화된 버전: 공간 복잡도 O(1), 시간 복잡도 O(n)
// 2. DP 배열 버전: 모든 값을 저장하여 명확한 구조
// 3. 메모이제이션: 재귀적 접근법에 캐싱 추가
