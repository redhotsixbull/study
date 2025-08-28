/**
 * 문제: 최대 부분 배열 합 (크기 k)
 *
 * 주어진 배열에서 크기가 k인 연속된 부분 배열의 최대 합을 구하시오.
 *
 * 예시:
 * 입력: arr = [2, 1, 5, 1, 3, 2], k = 3
 * 출력: 9 (부분 배열 [5, 1, 3])
 *
 * 시간 복잡도: O(n)
 * 공간 복잡도: O(1)
 */

export function maxSumSubarray(arr: number[], k: number): number {
  // 여기에 코드를 작성하세요
  let maxWindow: number[] = [];
  let maxWindowSum = sum(arr.slice(0, k));

  for (let i = 0; i < arr.length; i++) {
    let tempSum = sum(arr.slice(i, i + k));
    if (tempSum > maxWindowSum) {
      maxWindow = arr.slice(i, i + k);
      maxWindowSum = tempSum;
    }
  }

  return maxWindowSum;
}

function sum(arr: number[]) {
  let result = 0;
  for (let k in arr) {
    result = result + arr[k]!;
  }
  return result;
}

// 테스트 케이스
export const testCases = [
  {
    input: { arr: [2, 1, 5, 1, 3, 2], k: 3 },
    expected: 9,
    description: "기본 케이스",
  },
  {
    input: { arr: [2, 3, 4, 1, 5], k: 2 },
    expected: 7,
    description: "k=2인 경우",
  },
  {
    input: { arr: [1, 4, 2, 9, 5], k: 1 },
    expected: 9,
    description: "k=1인 경우",
  },
  {
    input: { arr: [-1, -2, -3, -4], k: 2 },
    expected: -3,
    description: "모든 원소가 음수인 경우",
  },
];
