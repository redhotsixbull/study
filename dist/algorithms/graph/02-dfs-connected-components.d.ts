/**
 * 문제: DFS를 이용한 연결 컴포넌트 찾기
 *
 * 무방향 그래프에서 연결된 컴포넌트의 개수를 구하시오.
 * 각 컴포넌트에 속한 노드들도 함께 반환하시오.
 *
 * 예시:
 * 입력:
 * graph = {
 *   'A': ['B'],
 *   'B': ['A', 'C'],
 *   'C': ['B'],
 *   'D': ['E'],
 *   'E': ['D'],
 *   'F': []
 * }
 *
 * 출력: [['A', 'B', 'C'], ['D', 'E'], ['F']] (3개의 컴포넌트)
 *
 * 시간 복잡도: O(V + E)
 * 공간 복잡도: O(V)
 */
export type Graph = {
    [key: string]: string[];
};
export declare function findConnectedComponents(graph: Graph): string[][];
export declare const testCases: ({
    input: {
        graph: {
            A: string[];
            B: string[];
            C: string[];
            D: string[];
            E: string[];
            F: never[];
            '1'?: never;
            '2'?: never;
            '3'?: never;
            '4'?: never;
            '5'?: never;
            '6'?: never;
        };
    };
    expected: string[][];
    description: string;
} | {
    input: {
        graph: {
            '1': string[];
            '2': string[];
            '3': string[];
            '4': string[];
            '5': string[];
            '6': string[];
            A?: never;
            B?: never;
            C?: never;
            D?: never;
            E?: never;
            F?: never;
        };
    };
    expected: string[][];
    description: string;
} | {
    input: {
        graph: {
            A: string[];
            B: string[];
            C: string[];
            D: string[];
            E?: never;
            F?: never;
            '1'?: never;
            '2'?: never;
            '3'?: never;
            '4'?: never;
            '5'?: never;
            '6'?: never;
        };
    };
    expected: string[][];
    description: string;
} | {
    input: {
        graph: {
            A: never[];
            B: never[];
            C: never[];
            D?: never;
            E?: never;
            F?: never;
            '1'?: never;
            '2'?: never;
            '3'?: never;
            '4'?: never;
            '5'?: never;
            '6'?: never;
        };
    };
    expected: string[][];
    description: string;
})[];
//# sourceMappingURL=02-dfs-connected-components.d.ts.map