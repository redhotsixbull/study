/**
 * 해답: DFS를 이용한 연결 컴포넌트 찾기
 *
 * 깊이 우선 탐색을 사용한 해결
 */
export type Graph = {
    [key: string]: string[];
};
export declare function findConnectedComponents(graph: Graph): string[][];
export declare function findConnectedComponentsIterative(graph: Graph): string[][];
export declare function countConnectedComponents(graph: Graph): number;
export declare class UnionFind {
    private parent;
    private rank;
    makeSet(node: string): void;
    find(node: string): string;
    union(node1: string, node2: string): void;
    getComponents(): string[][];
}
export declare function findConnectedComponentsUF(graph: Graph): string[][];
//# sourceMappingURL=02-dfs-connected-components-solution.d.ts.map