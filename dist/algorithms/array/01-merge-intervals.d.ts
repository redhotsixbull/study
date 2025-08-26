/**
 * 문제: 구간 병합
 *
 * 겹치는 구간들을 병합하시오.
 *
 * 예시:
 * 입력: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 출력: [[1,6],[8,10],[15,18]]
 *
 * 입력: intervals = [[1,4],[4,5]]
 * 출력: [[1,5]]
 *
 * 시간 복잡도: O(n log n)
 * 공간 복잡도: O(1) (결과 배열 제외)
 */
export declare function mergeIntervals(intervals: number[][]): number[][];
export declare const testCases: {
    input: {
        intervals: number[][];
    };
    expected: number[][];
    description: string;
}[];
//# sourceMappingURL=01-merge-intervals.d.ts.map