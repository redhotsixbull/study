/**
 * 문제: 동전 교환
 *
 * 주어진 동전 액면가들로 특정 금액을 만드는 데 필요한
 * 최소 동전 개수를 구하시오. 만들 수 없으면 -1을 반환하시오.
 *
 * 예시:
 * 입력: coins = [1,3,4], amount = 6
 * 출력: 2 (3 + 3 = 6)
 *
 * 입력: coins = [2], amount = 3
 * 출력: -1
 *
 * 입력: coins = [1], amount = 0
 * 출력: 0
 *
 * 시간 복잡도: O(amount * coins.length)
 * 공간 복잡도: O(amount)
 */
export declare function coinChange(coins: number[], amount: number): number;
export declare const testCases: {
    input: {
        coins: number[];
        amount: number;
    };
    expected: number;
    description: string;
}[];
//# sourceMappingURL=02-coin-change.d.ts.map