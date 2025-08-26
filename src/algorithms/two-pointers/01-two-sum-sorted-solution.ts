/**
 * 해답: 정렬된 배열에서 두 수의 합
 *
 * 투 포인터 기법을 사용한 해결
 */

export function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left]! + numbers[right]!;

    if (sum === target) {
      // 1-based 인덱스로 반환
      return [left + 1, right + 1];
    } else if (sum < target) {
      // 합이 작으면 왼쪽 포인터를 오른쪽으로 이동
      left++;
    } else {
      // 합이 크면 오른쪽 포인터를 왼쪽으로 이동
      right--;
    }
  }

  // 해가 없는 경우 (문제에서는 항상 해가 있다고 가정)
  return [];
}

// 설명:
// 1. 배열의 양 끝에서 시작하는 두 포인터를 설정
// 2. 두 수의 합이 target과 같으면 인덱스 반환
// 3. 합이 작으면 left를 증가, 크면 right를 감소
// 4. 배열이 정렬되어 있기 때문에 O(n) 시간에 해결 가능
