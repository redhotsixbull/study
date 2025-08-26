"use strict";
/**
 * 문제: 가장 많은 물을 담는 컨테이너
 *
 * 높이를 나타내는 배열이 주어졌을 때, 두 개의 선을 선택하여
 * 가장 많은 물을 담을 수 있는 컨테이너의 면적을 구하시오.
 *
 * 예시:
 * 입력: height = [1,8,6,2,5,4,8,3,7]
 * 출력: 49 (인덱스 1과 8 사이, 8 * (8-1) = 49가 아니라 min(8,7) * 7 = 49)
 *
 * 입력: height = [1,1]
 * 출력: 1
 *
 * 시간 복잡도: O(n)
 * 공간 복잡도: O(1)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCases = void 0;
exports.maxArea = maxArea;
function maxArea(height) {
    // 여기에 코드를 작성하세요
    throw new Error("구현되지 않음");
}
// 테스트 케이스
exports.testCases = [
    {
        input: { height: [1, 8, 6, 2, 5, 4, 8, 3, 7] },
        expected: 49,
        description: "기본 케이스",
    },
    {
        input: { height: [1, 1] },
        expected: 1,
        description: "최소 케이스",
    },
    {
        input: { height: [1, 2, 1] },
        expected: 2,
        description: "3개 원소",
    },
    {
        input: { height: [2, 3, 4, 5, 18, 17, 6] },
        expected: 17,
        description: "다른 배열",
    },
];
//# sourceMappingURL=03-container-with-most-water.js.map