"use strict";
/**
 * 해답: 정렬된 배열에서 원소의 첫 번째와 마지막 위치 찾기
 *
 * 두 번의 이진 탐색을 사용한 해결
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRange = searchRange;
function searchRange(nums, target) {
    // 첫 번째 위치를 찾는 함수
    function findFirst(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            const midValue = nums[mid];
            if (midValue === target) {
                result = mid;
                // 더 왼쪽에 있을 수 있으므로 계속 탐색
                right = mid - 1;
            }
            else if (midValue < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return result;
    }
    // 마지막 위치를 찾는 함수
    function findLast(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            const midValue = nums[mid];
            if (midValue === target) {
                result = mid;
                // 더 오른쪽에 있을 수 있으므로 계속 탐색
                left = mid + 1;
            }
            else if (midValue < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return result;
    }
    const first = findFirst(nums, target);
    const last = findLast(nums, target);
    return [first, last];
}
// 설명:
// 1. 첫 번째 위치 찾기: target을 발견해도 더 왼쪽을 계속 탐색
// 2. 마지막 위치 찾기: target을 발견해도 더 오른쪽을 계속 탐색
// 3. 두 번의 이진 탐색으로 O(log n) 시간 복잡도 유지
//# sourceMappingURL=02-find-first-last-position-solution.js.map