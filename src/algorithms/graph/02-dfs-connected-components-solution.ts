/**
 * 해답: DFS를 이용한 연결 컴포넌트 찾기
 *
 * 깊이 우선 탐색을 사용한 해결
 */

export type Graph = { [key: string]: string[] };

export function findConnectedComponents(graph: Graph): string[][] {
  const visited = new Set<string>();
  const components: string[][] = [];

  // 모든 노드에 대해 DFS 수행
  for (const node in graph) {
    if (!visited.has(node)) {
      const component: string[] = [];
      dfs(graph, node, visited, component);
      components.push(component);
    }
  }

  return components;
}

function dfs(
  graph: Graph,
  node: string,
  visited: Set<string>,
  component: string[]
): void {
  visited.add(node);
  component.push(node);

  // 인접한 모든 노드 탐색
  for (const neighbor of graph[node] || []) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited, component);
    }
  }
}

// 반복적 DFS 버전 (스택 사용)
export function findConnectedComponentsIterative(graph: Graph): string[][] {
  const visited = new Set<string>();
  const components: string[][] = [];

  for (const node in graph) {
    if (!visited.has(node)) {
      const component: string[] = [];
      const stack: string[] = [node];

      while (stack.length > 0) {
        const current = stack.pop()!;

        if (!visited.has(current)) {
          visited.add(current);
          component.push(current);

          // 인접한 노드들을 스택에 추가
          for (const neighbor of graph[current] || []) {
            if (!visited.has(neighbor)) {
              stack.push(neighbor);
            }
          }
        }
      }

      components.push(component);
    }
  }

  return components;
}

// 컴포넌트 개수만 반환하는 최적화된 버전
export function countConnectedComponents(graph: Graph): number {
  const visited = new Set<string>();
  let count = 0;

  for (const node in graph) {
    if (!visited.has(node)) {
      count++;
      dfsVisitOnly(graph, node, visited);
    }
  }

  return count;
}

function dfsVisitOnly(graph: Graph, node: string, visited: Set<string>): void {
  visited.add(node);

  for (const neighbor of graph[node] || []) {
    if (!visited.has(neighbor)) {
      dfsVisitOnly(graph, neighbor, visited);
    }
  }
}

// Union-Find를 사용한 대안 해결법
export class UnionFind {
  private parent: { [key: string]: string } = {};
  private rank: { [key: string]: number } = {};

  makeSet(node: string): void {
    this.parent[node] = node;
    this.rank[node] = 0;
  }

  find(node: string): string {
    if (this.parent[node] !== node) {
      this.parent[node] = this.find(this.parent[node]!); // 경로 압축
    }
    return this.parent[node]!;
  }

  union(node1: string, node2: string): void {
    const root1 = this.find(node1);
    const root2 = this.find(node2);

    if (root1 !== root2) {
      // 랭크에 따른 합집합
      if (this.rank[root1]! < this.rank[root2]!) {
        this.parent[root1] = root2;
      } else if (this.rank[root1]! > this.rank[root2]!) {
        this.parent[root2] = root1;
      } else {
        this.parent[root2] = root1;
        this.rank[root1]!++;
      }
    }
  }

  getComponents(): string[][] {
    const components: { [key: string]: string[] } = {};

    for (const node in this.parent) {
      const root = this.find(node);
      if (!components[root]) {
        components[root] = [];
      }
      components[root]!.push(node);
    }

    return Object.values(components);
  }
}

export function findConnectedComponentsUF(graph: Graph): string[][] {
  const uf = new UnionFind();

  // 모든 노드를 개별 집합으로 초기화
  for (const node in graph) {
    uf.makeSet(node);
  }

  // 간선을 따라 노드들을 합집합
  for (const node in graph) {
    for (const neighbor of graph[node] || []) {
      uf.union(node, neighbor);
    }
  }

  return uf.getComponents();
}

// 설명:
// 1. DFS를 사용하여 연결된 모든 노드를 탐색
// 2. 방문하지 않은 노드에서 새로운 컴포넌트 시작
// 3. 재귀적 또는 반복적 DFS 모두 가능
// 4. Union-Find는 동적으로 연결성을 관리할 때 유용
