/**
 * 문제: 정렬된 배열에서 원소의 첫 번째와 마지막 위치 찾기
 *
 * 정렬된 배열에서 target 값의 첫 번째와 마지막 위치를 찾으시오.
 * target이 없으면 [-1, -1]을 반환하시오.
 *
 * 예시:
 * 입력: nums = [5,7,7,8,8,10], target = 8
 * 출력: [3,4]
 *
 * 입력: nums = [5,7,7,8,8,10], target = 6
 * 출력: [-1,-1]
 *
 * 입력: nums = [], target = 0
 * 출력: [-1,-1]
 *
 * 시간 복잡도: O(log n)
 * 공간 복잡도: O(1)
 */
export declare function searchRange(nums: number[], target: number): number[];
export declare const testCases: {
    input: {
        nums: number[];
        target: number;
    };
    expected: number[];
    description: string;
}[];
//# sourceMappingURL=02-find-first-last-position.d.ts.map