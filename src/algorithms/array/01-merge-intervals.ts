/**
 * 문제: 구간 병합
 *
 * 겹치는 구간들을 병합하시오.
 *
 * 예시:
 * 입력: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 출력: [[1,6],[8,10],[15,18]]
 *
 * 입력: intervals = [[1,4],[4,5]]
 * 출력: [[1,5]]
 *
 * 시간 복잡도: O(n log n)
 * 공간 복잡도: O(1) (결과 배열 제외)
 */

export function mergeIntervals(intervals: number[][]): number[][] {
  // 여기에 코드를 작성하세요
  throw new Error("구현되지 않음");
}

// 테스트 케이스
export const testCases = [
  {
    input: {
      intervals: [
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ],
    },
    expected: [
      [1, 6],
      [8, 10],
      [15, 18],
    ],
    description: "기본 케이스",
  },
  {
    input: {
      intervals: [
        [1, 4],
        [4, 5],
      ],
    },
    expected: [[1, 5]],
    description: "경계가 닿는 경우",
  },
  {
    input: {
      intervals: [
        [1, 4],
        [2, 3],
      ],
    },
    expected: [[1, 4]],
    description: "완전히 포함되는 경우",
  },
  {
    input: { intervals: [[1, 3]] },
    expected: [[1, 3]],
    description: "단일 구간",
  },
];
