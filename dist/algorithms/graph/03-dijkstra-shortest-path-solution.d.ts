/**
 * 해답: 다익스트라 최단 경로 알고리즘
 *
 * 우선순위 큐를 사용한 해결
 */
export type WeightedGraph = {
    [key: string]: Array<[string, number]>;
};
export declare function dijkstra(graph: WeightedGraph, start: string): {
    [key: string]: number;
};
export declare function dijkstraWithPath(graph: WeightedGraph, start: string): {
    distances: {
        [key: string]: number;
    };
    paths: {
        [key: string]: string[];
    };
};
export declare function dijkstraToTarget(graph: WeightedGraph, start: string, target: string): {
    distance: number;
    path: string[];
} | null;
//# sourceMappingURL=03-dijkstra-shortest-path-solution.d.ts.map