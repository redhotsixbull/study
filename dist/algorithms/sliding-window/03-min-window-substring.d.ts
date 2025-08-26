/**
 * 문제: 최소 윈도우 부분 문자열
 *
 * 문자열 s와 t가 주어졌을 때, s에서 t의 모든 문자를 포함하는
 * 가장 짧은 부분 문자열을 찾으시오. 그런 부분 문자열이 없으면 빈 문자열을 반환하시오.
 *
 * 예시:
 * 입력: s = "ADOBECODEBANC", t = "ABC"
 * 출력: "BANC"
 *
 * 입력: s = "a", t = "a"
 * 출력: "a"
 *
 * 입력: s = "a", t = "aa"
 * 출력: ""
 *
 * 시간 복잡도: O(|s| + |t|)
 * 공간 복잡도: O(|s| + |t|)
 */
export declare function minWindow(s: string, t: string): string;
export declare const testCases: {
    input: {
        s: string;
        t: string;
    };
    expected: string;
    description: string;
}[];
//# sourceMappingURL=03-min-window-substring.d.ts.map