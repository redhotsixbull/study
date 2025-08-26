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

export type Graph = { [key: string]: string[] };

export function bfsShortestPath(
  graph: Graph,
  start: string
): { [key: string]: number } {
  // 여기에 코드를 작성하세요
  throw new Error("구현되지 않음");
}

// 테스트 케이스
export const testCases = [
  {
    input: {
      graph: {
        A: ["B", "C"],
        B: ["A", "D", "E"],
        C: ["A", "F"],
        D: ["B"],
        E: ["B", "F"],
        F: ["C", "E"],
      },
      start: "A",
    },
    expected: { A: 0, B: 1, C: 1, D: 2, E: 2, F: 2 },
    description: "기본 케이스",
  },
  {
    input: {
      graph: {
        "1": ["2", "3"],
        "2": ["1", "4"],
        "3": ["1"],
        "4": ["2"],
      },
      start: "1",
    },
    expected: { "1": 0, "2": 1, "3": 1, "4": 2 },
    description: "숫자 노드",
  },
  {
    input: {
      graph: {
        A: ["B"],
        B: ["A"],
        C: ["D"],
        D: ["C"],
      },
      start: "A",
    },
    expected: { A: 0, B: 1 },
    description: "연결되지 않은 그래프",
  },
];
