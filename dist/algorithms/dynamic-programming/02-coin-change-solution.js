"use strict";
/**
 * 해답: 동전 교환
 *
 * 동적 프로그래밍을 사용한 해결
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.coinChange = coinChange;
exports.coinChangeWithPath = coinChangeWithPath;
function coinChange(coins, amount) {
    // dp[i] = 금액 i를 만들기 위한 최소 동전 개수
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0; // 금액 0을 만들려면 동전 0개 필요
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i) {
                // 현재 동전을 사용하는 경우
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}
// 경로를 추적하는 버전 (어떤 동전들을 사용했는지 알 수 있음)
function coinChangeWithPath(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    const parent = new Array(amount + 1).fill(-1);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i && dp[i - coin] + 1 < dp[i]) {
                dp[i] = dp[i - coin] + 1;
                parent[i] = coin;
            }
        }
    }
    if (dp[amount] === Infinity) {
        return { minCoins: -1, path: [] };
    }
    // 경로 재구성
    const path = [];
    let curr = amount;
    while (curr > 0) {
        const coin = parent[curr];
        path.push(coin);
        curr -= coin;
    }
    return { minCoins: dp[amount], path };
}
// 설명:
// 1. dp[i]는 금액 i를 만들기 위한 최소 동전 개수
// 2. 각 금액에 대해 모든 동전을 시도해보며 최소값 갱신
// 3. 점화식: dp[i] = min(dp[i], dp[i - coin] + 1)
// 4. 시간 복잡도: O(amount * coins.length)
//# sourceMappingURL=02-coin-change-solution.js.map