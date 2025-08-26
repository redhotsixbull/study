/**
 * 문제: 정렬된 배열에서 원소의 첫 번째와 마지막 위치 찾기
 *
 * 정렬된 배열에서 target 값의 첫 번째와 마지막 위치를 찾으시오.
 * target이 없으면 [-1, -1]을 반환하시오.
 *
 * 예시:
 * 입력: nums = [5,7,7,8,8,10], target = 8
 * 출력: [3,4]
 *
 * 입력: nums = [5,7,7,8,8,10], target = 6
 * 출력: [-1,-1]
 *
 * 입력: nums = [], target = 0
 * 출력: [-1,-1]
 *
 * 시간 복잡도: O(log n)
 * 공간 복잡도: O(1)
 */

export function searchRange(nums: number[], target: number): number[] {
  // 여기에 코드를 작성하세요
  throw new Error("구현되지 않음");
}

// 테스트 케이스
export const testCases = [
  {
    input: { nums: [5, 7, 7, 8, 8, 10], target: 8 },
    expected: [3, 4],
    description: "기본 케이스",
  },
  {
    input: { nums: [5, 7, 7, 8, 8, 10], target: 6 },
    expected: [-1, -1],
    description: "존재하지 않는 값",
  },
  {
    input: { nums: [], target: 0 },
    expected: [-1, -1],
    description: "빈 배열",
  },
  {
    input: { nums: [1], target: 1 },
    expected: [0, 0],
    description: "단일 원소",
  },
  {
    input: { nums: [2, 2], target: 2 },
    expected: [0, 1],
    description: "모든 원소가 target",
  },
];
