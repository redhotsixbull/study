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
export declare function maxArea(height: number[]): number;
export declare const testCases: {
    input: {
        height: number[];
    };
    expected: number;
    description: string;
}[];
//# sourceMappingURL=03-container-with-most-water.d.ts.map