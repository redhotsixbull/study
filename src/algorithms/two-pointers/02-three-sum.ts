/**
 * 문제: 세 수의 합
 *
 * 정수 배열 nums가 주어졌을 때, 세 수의 합이 0이 되는
 * 모든 고유한 삼중항을 찾으시오.
 *
 * 예시:
 * 입력: nums = [-1,0,1,2,-1,-4]
 * 출력: [[-1,-1,2],[-1,0,1]]
 *
 * 입력: nums = [0,1,1]
 * 출력: []
 *
 * 입력: nums = [0,0,0]
 * 출력: [[0,0,0]]
 *
 * 시간 복잡도: O(n²)
 * 공간 복잡도: O(1) (결과 배열 제외)
 */

export function threeSum(nums: number[]): number[][] {
  // 여기에 코드를 작성하세요
  throw new Error("구현되지 않음");
}

// 테스트 케이스
export const testCases = [
  {
    input: { nums: [-1, 0, 1, 2, -1, -4] },
    expected: [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
    description: "기본 케이스",
  },
  {
    input: { nums: [0, 1, 1] },
    expected: [],
    description: "해가 없는 경우",
  },
  {
    input: { nums: [0, 0, 0] },
    expected: [[0, 0, 0]],
    description: "모든 원소가 0",
  },
  {
    input: { nums: [-2, 0, 1, 1, 2] },
    expected: [
      [-2, 0, 2],
      [-2, 1, 1],
    ],
    description: "중복 제거 테스트",
  },
];
