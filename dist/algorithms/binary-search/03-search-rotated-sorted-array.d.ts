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
export declare function search(nums: number[], target: number): number;
export declare const testCases: {
    input: {
        nums: number[];
        target: number;
    };
    expected: number;
    description: string;
}[];
//# sourceMappingURL=03-search-rotated-sorted-array.d.ts.map