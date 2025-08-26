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

export function lengthOfLIS(nums: number[]): number {
  // 여기에 코드를 작성하세요
  throw new Error("구현되지 않음");
}

// 테스트 케이스
export const testCases = [
  {
    input: { nums: [10, 2, 5, 7, 101, 18] },
    expected: 4,
    description: "기본 케이스",
  },
  {
    input: { nums: [0, 1, 0, 3, 2, 3] },
    expected: 4,
    description: "복잡한 케이스",
  },
  {
    input: { nums: [7, 7, 7, 7, 7, 7, 7] },
    expected: 1,
    description: "모든 원소가 같은 경우",
  },
  {
    input: { nums: [1, 3, 6, 7, 9, 4, 10, 5, 6] },
    expected: 6,
    description: "다른 케이스",
  },
  {
    input: { nums: [1] },
    expected: 1,
    description: "단일 원소",
  },
];
