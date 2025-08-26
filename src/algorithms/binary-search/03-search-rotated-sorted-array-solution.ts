/**
 * 해답: 회전된 정렬 배열에서 탐색
 *
 * 수정된 이진 탐색을 사용한 해결
 */

export function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    const midValue = nums[mid]!;

    if (midValue === target) {
      return mid;
    }

    // 왼쪽 절반이 정렬되어 있는지 확인
    if (nums[left]! <= midValue) {
      // 왼쪽 절반이 정렬되어 있음
      if (target >= nums[left]! && target < midValue) {
        // target이 왼쪽 절반에 있음
        right = mid - 1;
      } else {
        // target이 오른쪽 절반에 있음
        left = mid + 1;
      }
    } else {
      // 오른쪽 절반이 정렬되어 있음
      if (target > midValue && target <= nums[right]!) {
        // target이 오른쪽 절반에 있음
        left = mid + 1;
      } else {
        // target이 왼쪽 절반에 있음
        right = mid - 1;
      }
    }
  }

  return -1;
}

// 설명:
// 1. 회전된 배열에서도 절반은 항상 정렬되어 있음
// 2. 정렬된 절반을 식별하고, target이 그 범위에 있는지 확인
// 3. target이 정렬된 절반에 있으면 그쪽으로, 없으면 다른 쪽으로 이동
// 4. 여전히 O(log n) 시간 복잡도 유지

// 핵심 아이디어:
// - nums[left] <= nums[mid]: 왼쪽 절반이 정렬됨
// - 그렇지 않으면 오른쪽 절반이 정렬됨
// - 정렬된 부분에서 target의 위치를 확인하고 탐색 방향 결정
