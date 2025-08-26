"use strict";
/**
 * 문제: 회전된 정렬 배열에서 탐색
 *
 * 회전된 정렬 배열에서 target 값의 인덱스를 찾으시오.
 * 값이 없으면 -1을 반환하시오.
 *
 * 회전된 정렬 배열: [4,5,6,7,0,1,2] (원래 [0,1,2,4,5,6,7]이 4번째에서 회전)
 *
 * 예시:
 * 입력: nums = [4,5,6,7,0,1,2], target = 0
 * 출력: 4
 *
 * 입력: nums = [4,5,6,7,0,1,2], target = 3
 * 출력: -1
 *
 * 입력: nums = [1], target = 0
 * 출력: -1
 *
 * 시간 복잡도: O(log n)
 * 공간 복잡도: O(1)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCases = void 0;
exports.search = search;
function search(nums, target) {
    // 여기에 코드를 작성하세요
    throw new Error("구현되지 않음");
}
// 테스트 케이스
exports.testCases = [
    {
        input: { nums: [4, 5, 6, 7, 0, 1, 2], target: 0 },
        expected: 4,
        description: "기본 케이스 - target이 회전 부분에 있음",
    },
    {
        input: { nums: [4, 5, 6, 7, 0, 1, 2], target: 3 },
        expected: -1,
        description: "존재하지 않는 값",
    },
    {
        input: { nums: [1], target: 0 },
        expected: -1,
        description: "단일 원소 - 존재하지 않음",
    },
    {
        input: { nums: [4, 5, 6, 7, 0, 1, 2], target: 5 },
        expected: 1,
        description: "target이 정렬된 부분에 있음",
    },
    {
        input: { nums: [1, 3], target: 3 },
        expected: 1,
        description: "회전되지 않은 배열",
    },
];
//# sourceMappingURL=03-search-rotated-sorted-array.js.map