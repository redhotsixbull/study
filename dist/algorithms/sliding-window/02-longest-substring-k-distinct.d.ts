/**
 * 문제: K개의 서로 다른 문자를 포함하는 가장 긴 부분 문자열
 *
 * 문자열이 주어졌을 때, 정확히 K개의 서로 다른 문자를 포함하는
 * 가장 긴 부분 문자열의 길이를 구하시오.
 *
 * 예시:
 * 입력: s = "araaci", k = 2
 * 출력: 4 (부분 문자열 "araa")
 *
 * 입력: s = "araaci", k = 1
 * 출력: 2 (부분 문자열 "aa")
 *
 * 시간 복잡도: O(n)
 * 공간 복잡도: O(k)
 */
export declare function longestSubstringKDistinct(s: string, k: number): number;
export declare const testCases: {
    input: {
        s: string;
        k: number;
    };
    expected: number;
    description: string;
}[];
//# sourceMappingURL=02-longest-substring-k-distinct.d.ts.map