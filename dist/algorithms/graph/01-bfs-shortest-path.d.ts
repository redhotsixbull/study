/**
 * 문제: BFS를 이용한 최단 경로
 *
 * 가중치가 없는 그래프에서 시작 노드부터 모든 노드까지의
 * 최단 거리를 구하시오.
 *
 * 예시:
 * 입력:
 * graph = {
 *   'A': ['B', 'C'],
 *   'B': ['A', 'D', 'E'],
 *   'C': ['A', 'F'],
 *   'D': ['B'],
 *   'E': ['B', 'F'],
 *   'F': ['C', 'E']
 * }
 * start = 'A'
 *
 * 출력: { 'A': 0, 'B': 1, 'C': 1, 'D': 2, 'E': 2, 'F': 2 }
 *
 * 시간 복잡도: O(V + E)
 * 공간 복잡도: O(V)
 */
export type Graph = {
    [key: string]: string[];
};
export declare function bfsShortestPath(graph: Graph, start: string): {
    [key: string]: number;
};
export declare const testCases: ({
    input: {
        graph: {
            A: string[];
            B: string[];
            C: string[];
            D: string[];
            E: string[];
            F: string[];
            '1'?: never;
            '2'?: never;
            '3'?: never;
            '4'?: never;
        };
        start: string;
    };
    expected: {
        A: number;
        B: number;
        C: number;
        D: number;
        E: number;
        F: number;
        '1'?: never;
        '2'?: never;
        '3'?: never;
        '4'?: never;
    };
    description: string;
} | {
    input: {
        graph: {
            '1': string[];
            '2': string[];
            '3': string[];
            '4': string[];
            A?: never;
            B?: never;
            C?: never;
            D?: never;
            E?: never;
            F?: never;
        };
        start: string;
    };
    expected: {
        '1': number;
        '2': number;
        '3': number;
        '4': number;
        A?: never;
        B?: never;
        C?: never;
        D?: never;
        E?: never;
        F?: never;
    };
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
        };
        start: string;
    };
    expected: {
        A: number;
        B: number;
        C?: never;
        D?: never;
        E?: never;
        F?: never;
        '1'?: never;
        '2'?: never;
        '3'?: never;
        '4'?: never;
    };
    description: string;
})[];
//# sourceMappingURL=01-bfs-shortest-path.d.ts.map