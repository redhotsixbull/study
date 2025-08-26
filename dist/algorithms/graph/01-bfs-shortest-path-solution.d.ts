/**
 * 해답: BFS를 이용한 최단 경로
 *
 * 너비 우선 탐색을 사용한 해결
 */
export type Graph = {
    [key: string]: string[];
};
export declare function bfsShortestPath(graph: Graph, start: string): {
    [key: string]: number;
};
export declare function bfsShortestPathWithRoute(graph: Graph, start: string): {
    distances: {
        [key: string]: number;
    };
    paths: {
        [key: string]: string[];
    };
};
export declare function bfsShortestPathToTarget(graph: Graph, start: string, target: string): {
    distance: number;
    path: string[];
} | null;
//# sourceMappingURL=01-bfs-shortest-path-solution.d.ts.map