/**
 * 문제: 정렬된 배열에서 두 수의 합
 *
 * 정렬된 배열이 주어졌을 때, 두 수의 합이 target과 같은
 * 인덱스 쌍을 찾으시오. (1-based 인덱스)
 *
 * 예시:
 * 입력: numbers = [2,7,11,15], target = 9
 * 출력: [1,2] (numbers[0] + numbers[1] = 2 + 7 = 9)
 *
 * 시간 복잡도: O(n)
 * 공간 복잡도: O(1)
 */

export function twoSum(numbers: number[], target: number): number[] {
  // 여기에 코드를 작성하세요
  throw new Error("구현되지 않음");
}

// 테스트 케이스
export const testCases = [
  {
    input: { numbers: [2, 7, 11, 15], target: 9 },
    expected: [1, 2],
    description: "기본 케이스",
  },
  {
    input: { numbers: [2, 3, 4], target: 6 },
    expected: [1, 3],
    description: "처음과 끝",
  },
  {
    input: { numbers: [-1, 0], target: -1 },
    expected: [1, 2],
    description: "음수 포함",
  },
  {
    input: { numbers: [1, 2, 3, 4, 4, 9, 56, 90], target: 8 },
    expected: [4, 5],
    description: "중복된 값",
  },
];
