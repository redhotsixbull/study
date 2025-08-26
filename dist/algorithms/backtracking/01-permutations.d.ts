/**
 * 문제: 순열 생성
 *
 * 서로 다른 정수들의 배열이 주어졌을 때, 모든 가능한 순열을 반환하시오.
 *
 * 예시:
 * 입력: nums = [1,2,3]
 * 출력: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * 입력: nums = [0,1]
 * 출력: [[0,1],[1,0]]
 *
 * 입력: nums = [1]
 * 출력: [[1]]
 *
 * 시간 복잡도: O(n!)
 * 공간 복잡도: O(n)
 */
export declare function permute(nums: number[]): number[][];
export declare const testCases: {
    input: {
        nums: number[];
    };
    expected: number[][];
    description: string;
}[];
//# sourceMappingURL=01-permutations.d.ts.map