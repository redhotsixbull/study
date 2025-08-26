/**
 * 해답: 최대 부분 배열 합 (크기 k)
 *
 * 슬라이딩 윈도우 기법을 사용하여 효율적으로 해결
 */

export function maxSumSubarray(arr: number[], k: number): number {
  if (arr.length < k) {
    throw new Error("배열 길이가 k보다 작습니다");
  }

  // 첫 번째 윈도우의 합을 계산
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i]!;
  }

  let maxSum = windowSum;

  // 슬라이딩 윈도우를 이용해 나머지 윈도우들을 확인
  for (let i = k; i < arr.length; i++) {
    // 윈도우를 한 칸 이동: 맨 앞 원소 제거, 새 원소 추가
    windowSum = windowSum - arr[i - k]! + arr[i]!;
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// 설명:
// 1. 첫 번째 크기 k인 윈도우의 합을 계산
// 2. 윈도우를 한 칸씩 이동하면서 이전 합에서 왼쪽 원소를 빼고 오른쪽 원소를 더함
// 3. 각 윈도우에서 최대값을 추적
