/**
 * 문제: 가장 긴 증가하는 부분 수열 (LIS)
 *
 * 정수 배열이 주어졌을 때, 가장 긴 증가하는 부분 수열의 길이를 구하시오.
 * 부분 수열은 원래 배열에서 일부 원소를 제거하되 순서는 유지해야 합니다.
 *
 * 예시:
 * 입력: nums = [10,2,5,7,101,18]
 * 출력: 4 (부분 수열: [2,5,7,101] 또는 [2,5,7,18])
 *
 * 입력: nums = [0,1,0,3,2,3]
 * 출력: 4 (부분 수열: [0,1,2,3])
 *
 * 입력: nums = [7,7,7,7,7,7,7]
 * 출력: 1
 *
 * 시간 복잡도: O(n²) - 기본 DP, O(n log n) - 이진 탐색 최적화
 * 공간 복잡도: O(n)
 */
export declare function lengthOfLIS(nums: number[]): number;
export declare const testCases: {
    input: {
        nums: number[];
    };
    expected: number;
    description: string;
}[];
//# sourceMappingURL=03-longest-increasing-subsequence.d.ts.map