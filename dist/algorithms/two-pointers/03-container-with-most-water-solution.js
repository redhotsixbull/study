"use strict";
/**
 * 해답: 가장 많은 물을 담는 컨테이너
 *
 * 투 포인터를 사용한 탐욕적 해결
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxArea = maxArea;
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;
    while (left < right) {
        // 현재 면적 계산: 폭 * 최소 높이
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const currentArea = width * currentHeight;
        maxWater = Math.max(maxWater, currentArea);
        // 더 낮은 높이를 가진 포인터를 이동
        // 이유: 더 높은 포인터를 이동하면 폭은 줄어들고 높이는 같거나 작아짐
        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return maxWater;
}
// 설명:
// 1. 양 끝에서 시작하는 두 포인터를 설정
// 2. 현재 면적을 계산하고 최대값을 업데이트
// 3. 더 낮은 높이를 가진 포인터를 안쪽으로 이동
// 4. 이 전략이 최적해를 보장하는 이유:
//    - 더 높은 포인터를 이동하면 폭이 줄어들고 높이는 여전히 낮은 쪽에 제한됨
//    - 따라서 면적이 증가할 가능성이 없음
//# sourceMappingURL=03-container-with-most-water-solution.js.map