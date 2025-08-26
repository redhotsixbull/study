"use strict";
/**
 * 해답: 다익스트라 최단 경로 알고리즘
 *
 * 우선순위 큐를 사용한 해결
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.dijkstra = dijkstra;
exports.dijkstraWithPath = dijkstraWithPath;
exports.dijkstraToTarget = dijkstraToTarget;
// 간단한 우선순위 큐 구현 (최소 힙)
class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    enqueue(item, priority) {
        this.heap.push({ item, priority });
        this.heapifyUp();
    }
    dequeue() {
        if (this.heap.length === 0)
            return undefined;
        const root = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown();
        }
        return root.item;
    }
    isEmpty() {
        return this.heap.length === 0;
    }
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].priority >= this.heap[parentIndex].priority) {
                break;
            }
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }
    heapifyDown() {
        let index = 0;
        while (true) {
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            let smallest = index;
            if (leftChild < this.heap.length &&
                this.heap[leftChild].priority < this.heap[smallest].priority) {
                smallest = leftChild;
            }
            if (rightChild < this.heap.length &&
                this.heap[rightChild].priority < this.heap[smallest].priority) {
                smallest = rightChild;
            }
            if (smallest === index)
                break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}
function dijkstra(graph, start) {
    const distances = {};
    const visited = new Set();
    const pq = new PriorityQueue();
    // 모든 노드의 거리를 무한대로 초기화
    for (const node in graph) {
        distances[node] = Infinity;
    }
    // 시작 노드의 거리는 0
    distances[start] = 0;
    pq.enqueue(start, 0);
    while (!pq.isEmpty()) {
        const current = pq.dequeue();
        if (visited.has(current))
            continue;
        visited.add(current);
        // 인접한 노드들 확인
        for (const [neighbor, weight] of graph[current] || []) {
            if (!visited.has(neighbor)) {
                const newDistance = distances[current] + weight;
                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                    pq.enqueue(neighbor, newDistance);
                }
            }
        }
    }
    // 도달할 수 없는 노드는 제거
    const result = {};
    for (const node in distances) {
        if (distances[node] !== Infinity) {
            result[node] = distances[node];
        }
    }
    return result;
}
// 경로도 함께 반환하는 버전
function dijkstraWithPath(graph, start) {
    const distances = {};
    const previous = {};
    const visited = new Set();
    const pq = new PriorityQueue();
    // 초기화
    for (const node in graph) {
        distances[node] = Infinity;
        previous[node] = null;
    }
    distances[start] = 0;
    pq.enqueue(start, 0);
    while (!pq.isEmpty()) {
        const current = pq.dequeue();
        if (visited.has(current))
            continue;
        visited.add(current);
        for (const [neighbor, weight] of graph[current] || []) {
            if (!visited.has(neighbor)) {
                const newDistance = distances[current] + weight;
                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                    previous[neighbor] = current;
                    pq.enqueue(neighbor, newDistance);
                }
            }
        }
    }
    // 경로 재구성
    const paths = {};
    for (const node in distances) {
        if (distances[node] !== Infinity) {
            const path = [];
            let current = node;
            while (current !== null) {
                path.unshift(current);
                current = previous[current];
            }
            paths[node] = path;
        }
    }
    // 도달할 수 없는 노드는 제거
    const resultDistances = {};
    for (const node in distances) {
        if (distances[node] !== Infinity) {
            resultDistances[node] = distances[node];
        }
    }
    return { distances: resultDistances, paths };
}
// 특정 목표 노드까지만 찾는 최적화된 버전
function dijkstraToTarget(graph, start, target) {
    if (start === target) {
        return { distance: 0, path: [start] };
    }
    const distances = {};
    const previous = {};
    const visited = new Set();
    const pq = new PriorityQueue();
    // 초기화
    for (const node in graph) {
        distances[node] = Infinity;
        previous[node] = null;
    }
    distances[start] = 0;
    pq.enqueue(start, 0);
    while (!pq.isEmpty()) {
        const current = pq.dequeue();
        if (current === target) {
            // 목표에 도달했으므로 경로 재구성
            const path = [];
            let curr = target;
            while (curr !== null) {
                path.unshift(curr);
                curr = previous[curr];
            }
            return { distance: distances[target], path };
        }
        if (visited.has(current))
            continue;
        visited.add(current);
        for (const [neighbor, weight] of graph[current] || []) {
            if (!visited.has(neighbor)) {
                const newDistance = distances[current] + weight;
                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                    previous[neighbor] = current;
                    pq.enqueue(neighbor, newDistance);
                }
            }
        }
    }
    return null; // 경로가 없음
}
// 설명:
// 1. 우선순위 큐를 사용하여 가장 짧은 거리의 노드부터 처리
// 2. 각 노드에서 인접한 노드들의 거리를 업데이트
// 3. 탐욕적 선택: 현재까지 알려진 최단 거리 노드를 항상 선택
// 4. 시간 복잡도: O((V + E) log V), 공간 복잡도: O(V)
//# sourceMappingURL=03-dijkstra-shortest-path-solution.js.map