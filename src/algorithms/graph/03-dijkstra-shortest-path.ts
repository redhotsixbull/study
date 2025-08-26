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

export type WeightedGraph = { [key: string]: Array<[string, number]> };

export function dijkstra(
  graph: WeightedGraph,
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
        A: [
          ["B", 4],
          ["C", 2],
        ],
        B: [
          ["A", 4],
          ["C", 1],
          ["D", 5],
        ],
        C: [
          ["A", 2],
          ["B", 1],
          ["D", 8],
          ["E", 10],
        ],
        D: [
          ["B", 5],
          ["C", 8],
          ["E", 2],
        ],
        E: [
          ["C", 10],
          ["D", 2],
        ],
      },
      start: "A",
    },
    expected: { A: 0, B: 3, C: 2, D: 8, E: 10 },
    description: "기본 케이스",
  },
  {
    input: {
      graph: {
        "1": [
          ["2", 1],
          ["3", 4],
        ],
        "2": [
          ["1", 1],
          ["3", 2],
          ["4", 5],
        ],
        "3": [
          ["1", 4],
          ["2", 2],
          ["4", 1],
        ],
        "4": [
          ["2", 5],
          ["3", 1],
        ],
      },
      start: "1",
    },
    expected: { "1": 0, "2": 1, "3": 3, "4": 4 },
    description: "숫자 노드",
  },
  {
    input: {
      graph: {
        A: [["B", 1]],
        B: [["A", 1]],
        C: [["D", 2]],
        D: [["C", 2]],
      },
      start: "A",
    },
    expected: { A: 0, B: 1 },
    description: "연결되지 않은 그래프",
  },
];
