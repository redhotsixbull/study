/**
 * 문제: 순열 생성
 *
 * 서로 다른 정수들의 배열이 주어졌을 때, 모든 가능한 순열을 반환하시오.
 *
 * 예시:
 * 입력: nums = [1,2,3]
 * 출력: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * 입력: nums = [0,1]
 * 출력: [[0,1],[1,0]]
 *
 * 입력: nums = [1]
 * 출력: [[1]]
 *
 * 시간 복잡도: O(n!)
 * 공간 복잡도: O(n)
 */

export function permute(nums: number[]): number[][] {
  // 여기에 코드를 작성하세요
  let result:number[][] = [];

  function backTrack() {
    
  }

  backTrack();
  

  return result;
}

// 테스트 케이스
export const testCases = [
  {
    input: { nums: [1, 2, 3] },
    expected: [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ],
    description: "기본 케이스",
  },
  {
    input: { nums: [0, 1] },
    expected: [
      [0, 1],
      [1, 0],
    ],
    description: "2개 원소",
  },
  {
    input: { nums: [1] },
    expected: [[1]],
    description: "단일 원소",
  },
];
