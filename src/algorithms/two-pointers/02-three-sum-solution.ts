/**
 * 해답: 세 수의 합
 *
 * 정렬과 투 포인터를 조합한 해결
 */

export function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];

  // 배열을 정렬
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // 첫 번째 숫자의 중복을 건너뛰기
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i]! + nums[left]! + nums[right]!;

      if (sum === 0) {
        result.push([nums[i]!, nums[left]!, nums[right]!]);

        // 중복된 값들을 건너뛰기
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// 설명:
// 1. 배열을 정렬하여 중복 제거와 투 포인터 사용을 용이하게 함
// 2. 첫 번째 수를 고정하고 나머지 두 수를 투 포인터로 찾음
// 3. 중복된 삼중항을 방지하기 위해 같은 값은 건너뛰기
// 4. 시간 복잡도: O(n²), 공간 복잡도: O(1)
