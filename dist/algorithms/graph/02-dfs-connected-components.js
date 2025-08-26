"use strict";
/**
 * 문제: DFS를 이용한 연결 컴포넌트 찾기
 *
 * 무방향 그래프에서 연결된 컴포넌트의 개수를 구하시오.
 * 각 컴포넌트에 속한 노드들도 함께 반환하시오.
 *
 * 예시:
 * 입력:
 * graph = {
 *   'A': ['B'],
 *   'B': ['A', 'C'],
 *   'C': ['B'],
 *   'D': ['E'],
 *   'E': ['D'],
 *   'F': []
 * }
 *
 * 출력: [['A', 'B', 'C'], ['D', 'E'], ['F']] (3개의 컴포넌트)
 *
 * 시간 복잡도: O(V + E)
 * 공간 복잡도: O(V)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCases = void 0;
exports.findConnectedComponents = findConnectedComponents;
function findConnectedComponents(graph) {
    // 여기에 코드를 작성하세요
    throw new Error("구현되지 않음");
}
// 테스트 케이스
exports.testCases = [
    {
        input: {
            graph: {
                'A': ['B'],
                'B': ['A', 'C'],
                'C': ['B'],
                'D': ['E'],
                'E': ['D'],
                'F': []
            }
        },
        expected: [['A', 'B', 'C'], ['D', 'E'], ['F']],
        description: "기본 케이스 - 3개 컴포넌트",
    },
    {
        input: {
            graph: {
                '1': ['2', '3'],
                '2': ['1'],
                '3': ['1'],
                '4': ['5'],
                '5': ['4', '6'],
                '6': ['5']
            }
        },
        expected: [['1', '2', '3'], ['4', '5', '6']],
        description: "2개 컴포넌트",
    },
    {
        input: {
            graph: {
                'A': ['B', 'C', 'D'],
                'B': ['A'],
                'C': ['A'],
                'D': ['A']
            }
        },
        expected: [['A', 'B', 'C', 'D']],
        description: "하나의 연결된 컴포넌트",
    },
    {
        input: {
            graph: {
                'A': [],
                'B': [],
                'C': []
            }
        },
        expected: [['A'], ['B'], ['C']],
        description: "모든 노드가 독립적",
    },
];
//# sourceMappingURL=02-dfs-connected-components.js.map