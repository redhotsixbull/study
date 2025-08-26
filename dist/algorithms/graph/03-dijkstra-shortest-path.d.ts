/**
 * 문제: 다익스트라 최단 경로 알고리즘
 *
 * 가중치가 있는 그래프에서 시작 노드부터 모든 노드까지의
 * 최단 거리를 구하시오. (모든 가중치는 양수)
 *
 * 예시:
 * 입력:
 * graph = {
 *   'A': [['B', 4], ['C', 2]],
 *   'B': [['A', 4], ['C', 1], ['D', 5]],
 *   'C': [['A', 2], ['B', 1], ['D', 8], ['E', 10]],
 *   'D': [['B', 5], ['C', 8], ['E', 2]],
 *   'E': [['C', 10], ['D', 2]]
 * }
 * start = 'A'
 *
 * 출력: { 'A': 0, 'B': 3, 'C': 2, 'D': 8, 'E': 10 }
 *
 * 시간 복잡도: O((V + E) log V) - 우선순위 큐 사용
 * 공간 복잡도: O(V)
 */
export type WeightedGraph = {
    [key: string]: Array<[string, number]>;
};
export declare function dijkstra(graph: WeightedGraph, start: string): {
    [key: string]: number;
};
export declare const testCases: ({
    input: {
        graph: {
            A: (string | number)[][];
            B: (string | number)[][];
            C: (string | number)[][];
            D: (string | number)[][];
            E: (string | number)[][];
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
        '1'?: never;
        '2'?: never;
        '3'?: never;
        '4'?: never;
    };
    description: string;
} | {
    input: {
        graph: {
            '1': (string | number)[][];
            '2': (string | number)[][];
            '3': (string | number)[][];
            '4': (string | number)[][];
            A?: never;
            B?: never;
            C?: never;
            D?: never;
            E?: never;
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
    };
    description: string;
} | {
    input: {
        graph: {
            A: (string | number)[][];
            B: (string | number)[][];
            C: (string | number)[][];
            D: (string | number)[][];
            E?: never;
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
        '1'?: never;
        '2'?: never;
        '3'?: never;
        '4'?: never;
    };
    description: string;
})[];
//# sourceMappingURL=03-dijkstra-shortest-path.d.ts.map