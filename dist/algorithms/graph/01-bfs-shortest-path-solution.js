"use strict";
/**
 * 해답: BFS를 이용한 최단 경로
 *
 * 너비 우선 탐색을 사용한 해결
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.bfsShortestPath = bfsShortestPath;
exports.bfsShortestPathWithRoute = bfsShortestPathWithRoute;
exports.bfsShortestPathToTarget = bfsShortestPathToTarget;
function bfsShortestPath(graph, start) {
    const distances = {};
    const queue = [];
    const visited = new Set();
    // 시작 노드 초기화
    distances[start] = 0;
    queue.push(start);
    visited.add(start);
    while (queue.length > 0) {
        const current = queue.shift();
        const currentDistance = distances[current];
        // 인접한 모든 노드 확인
        for (const neighbor of graph[current] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                distances[neighbor] = currentDistance + 1;
                queue.push(neighbor);
            }
        }
    }
    return distances;
}
// 경로도 함께 반환하는 버전
function bfsShortestPathWithRoute(graph, start) {
    const distances = {};
    const paths = {};
    const queue = [];
    const visited = new Set();
    // 시작 노드 초기화
    distances[start] = 0;
    paths[start] = [start];
    queue.push(start);
    visited.add(start);
    while (queue.length > 0) {
        const current = queue.shift();
        const currentDistance = distances[current];
        const currentPath = paths[current];
        for (const neighbor of graph[current] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                distances[neighbor] = currentDistance + 1;
                paths[neighbor] = [...currentPath, neighbor];
                queue.push(neighbor);
            }
        }
    }
    return { distances, paths };
}
// 특정 목표 노드까지의 최단 경로만 찾는 버전
function bfsShortestPathToTarget(graph, start, target) {
    if (start === target) {
        return { distance: 0, path: [start] };
    }
    const queue = [];
    const visited = new Set();
    queue.push({ node: start, distance: 0, path: [start] });
    visited.add(start);
    while (queue.length > 0) {
        const { node: current, distance, path } = queue.shift();
        for (const neighbor of graph[current] || []) {
            if (neighbor === target) {
                return {
                    distance: distance + 1,
                    path: [...path, neighbor]
                };
            }
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push({
                    node: neighbor,
                    distance: distance + 1,
                    path: [...path, neighbor]
                });
            }
        }
    }
    return null; // 경로가 없음
}
// 설명:
// 1. BFS는 가중치가 없는 그래프에서 최단 경로를 보장
// 2. 큐를 사용하여 레벨별로 노드를 탐색
// 3. 방문한 노드는 다시 방문하지 않음
// 4. 시간 복잡도: O(V + E), 공간 복잡도: O(V)
//# sourceMappingURL=01-bfs-shortest-path-solution.js.map