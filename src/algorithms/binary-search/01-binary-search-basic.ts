/**
 * 문제: 기본 이진 탐색
 *
 * 정렬된 배열에서 target 값의 인덱스를 찾으시오.
 * 값이 없으면 -1을 반환하시오.
 *
 * 예시:
 * 입력: nums = [-1,0,3,5,9,12], target = 9
 * 출력: 4
 *
 * 입력: nums = [-1,0,3,5,9,12], target = 2
 * 출력: -1
 *
 * 시간 복잡도: O(log n)
 * 공간 복잡도: O(1)
 */

export function search(nums: number[], target: number): number {
  // 여기에 코드를 작성하세요
  throw new Error("구현되지 않음");
}

// 테스트 케이스
export const testCases = [
  {
    input: { nums: [-1, 0, 3, 5, 9, 12], target: 9 },
    expected: 4,
    description: "기본 케이스",
  },
  {
    input: { nums: [-1, 0, 3, 5, 9, 12], target: 2 },
    expected: -1,
    description: "존재하지 않는 값",
  },
  {
    input: { nums: [5], target: 5 },
    expected: 0,
    description: "단일 원소 - 존재",
  },
  {
    input: { nums: [5], target: -5 },
    expected: -1,
    description: "단일 원소 - 존재하지 않음",
  },
  {
    input: { nums: [1, 2, 3, 4, 5], target: 1 },
    expected: 0,
    description: "첫 번째 원소",
  },
  {
    input: { nums: [1, 2, 3, 4, 5], target: 5 },
    expected: 4,
    description: "마지막 원소",
  },
];
