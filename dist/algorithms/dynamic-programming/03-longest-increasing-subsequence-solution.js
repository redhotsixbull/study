"use strict";
/**
 * 해답: 가장 긴 증가하는 부분 수열 (LIS)
 *
 * 두 가지 접근법으로 해결
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.lengthOfLIS = lengthOfLIS;
exports.lengthOfLISOptimized = lengthOfLISOptimized;
exports.findLIS = findLIS;
// 방법 1: 기본 동적 프로그래밍 O(n²)
function lengthOfLIS(nums) {
    if (nums.length === 0)
        return 0;
    // dp[i] = nums[i]를 마지막 원소로 하는 LIS의 길이
    const dp = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
}
// 방법 2: 이진 탐색 최적화 O(n log n)
function lengthOfLISOptimized(nums) {
    if (nums.length === 0)
        return 0;
    // tails[i] = 길이가 (i+1)인 증가하는 부분 수열의 가장 작은 마지막 원소
    const tails = [];
    for (const num of nums) {
        // 이진 탐색으로 num이 들어갈 위치 찾기
        let left = 0;
        let right = tails.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            }
            else {
                right = mid;
            }
        }
        // left 위치에 num을 배치
        tails[left] = num;
    }
    return tails.length;
}
// LIS의 실제 수열을 반환하는 버전
function findLIS(nums) {
    if (nums.length === 0)
        return [];
    const dp = new Array(nums.length).fill(1);
    const parent = new Array(nums.length).fill(-1);
    let maxLength = 1;
    let maxIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                parent[i] = j;
            }
        }
        if (dp[i] > maxLength) {
            maxLength = dp[i];
            maxIndex = i;
        }
    }
    // LIS 재구성
    const lis = [];
    let curr = maxIndex;
    while (curr !== -1) {
        lis.unshift(nums[curr]);
        curr = parent[curr];
    }
    return lis;
}
// 설명:
// 1. 기본 DP: dp[i] = nums[i]를 마지막으로 하는 LIS 길이
// 2. 최적화: tails 배열과 이진 탐색으로 O(n log n) 달성
// 3. tails[i]는 길이 i+1인 LIS의 가능한 가장 작은 마지막 원소
//# sourceMappingURL=03-longest-increasing-subsequence-solution.js.map