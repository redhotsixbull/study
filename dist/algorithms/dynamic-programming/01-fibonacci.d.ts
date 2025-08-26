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
export declare function fibonacci(n: number): number;
export declare const testCases: {
    input: {
        n: number;
    };
    expected: number;
    description: string;
}[];
//# sourceMappingURL=01-fibonacci.d.ts.map