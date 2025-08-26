"use strict";
/**
 * 해답: 기본 이진 탐색
 *
 * 표준 이진 탐색 알고리즘
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = search;
exports.searchRecursive = searchRecursive;
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        // 오버플로우 방지를 위한 중간값 계산
        const mid = Math.floor(left + (right - left) / 2);
        const midValue = nums[mid];
        if (midValue === target) {
            return mid;
        }
        else if (midValue < target) {
            // target이 더 크므로 오른쪽 절반 탐색
            left = mid + 1;
        }
        else {
            // target이 더 작으므로 왼쪽 절반 탐색
            right = mid - 1;
        }
    }
    // target을 찾지 못함
    return -1;
}
// 재귀 버전
function searchRecursive(nums, target) {
    function binarySearchHelper(left, right) {
        if (left > right) {
            return -1;
        }
        const mid = Math.floor(left + (right - left) / 2);
        const midValue = nums[mid];
        if (midValue === target) {
            return mid;
        }
        else if (midValue < target) {
            return binarySearchHelper(mid + 1, right);
        }
        else {
            return binarySearchHelper(left, mid - 1);
        }
    }
    return binarySearchHelper(0, nums.length - 1);
}
// 설명:
// 1. 배열의 중간값과 target을 비교
// 2. target이 중간값보다 크면 오른쪽 절반 탐색
// 3. target이 중간값보다 작으면 왼쪽 절반 탐색
// 4. 탐색 범위를 절반씩 줄여가며 O(log n) 시간에 해결
//# sourceMappingURL=01-binary-search-basic-solution.js.map