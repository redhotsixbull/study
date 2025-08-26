"use strict";
/**
 * 해답: 구간 병합
 *
 * 정렬과 순차 처리를 사용한 해결
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeIntervals = mergeIntervals;
exports.mergeIntervalsFunctional = mergeIntervalsFunctional;
function mergeIntervals(intervals) {
    if (intervals.length <= 1)
        return intervals;
    // 시작점을 기준으로 정렬
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const lastMerged = merged[merged.length - 1];
        // 현재 구간이 마지막으로 병합된 구간과 겹치는지 확인
        if (current[0] <= lastMerged[1]) {
            // 겹치면 병합: 끝점을 더 큰 값으로 업데이트
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        }
        else {
            // 겹치지 않으면 새로운 구간 추가
            merged.push(current);
        }
    }
    return merged;
}
// 대안 해결법: 함수형 프로그래밍 스타일
function mergeIntervalsFunctional(intervals) {
    if (intervals.length <= 1)
        return intervals;
    return intervals
        .sort((a, b) => a[0] - b[0])
        .reduce((merged, current) => {
        if (merged.length === 0 || merged[merged.length - 1][1] < current[0]) {
            merged.push(current);
        }
        else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], current[1]);
        }
        return merged;
    }, []);
}
// 설명:
// 1. 구간들을 시작점 기준으로 정렬
// 2. 첫 번째 구간을 결과에 추가
// 3. 각 구간에 대해:
//    - 이전 구간과 겹치면 병합 (끝점을 더 큰 값으로)
//    - 겹치지 않으면 새로운 구간으로 추가
// 4. 시간 복잡도: O(n log n) (정렬), 공간 복잡도: O(1)
//# sourceMappingURL=01-merge-intervals-solution.js.map