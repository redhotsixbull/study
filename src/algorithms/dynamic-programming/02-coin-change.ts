/**
 * 문제: 동전 교환
 *
 * 주어진 동전 액면가들로 특정 금액을 만드는 데 필요한
 * 최소 동전 개수를 구하시오. 만들 수 없으면 -1을 반환하시오.
 *
 * 예시:
 * 입력: coins = [1,3,4], amount = 6
 * 출력: 2 (3 + 3 = 6)
 *
 * 입력: coins = [2], amount = 3
 * 출력: -1
 *
 * 입력: coins = [1], amount = 0
 * 출력: 0
 *
 * 시간 복잡도: O(amount * coins.length)
 * 공간 복잡도: O(amount)
 */

export function coinChange(coins: number[], amount: number): number {
  // 여기에 코드를 작성하세요
  throw new Error("구현되지 않음");
}

// 테스트 케이스
export const testCases = [
  {
    input: { coins: [1, 3, 4], amount: 6 },
    expected: 2,
    description: "기본 케이스",
  },
  {
    input: { coins: [2], amount: 3 },
    expected: -1,
    description: "불가능한 경우",
  },
  {
    input: { coins: [1], amount: 0 },
    expected: 0,
    description: "금액이 0인 경우",
  },
  {
    input: { coins: [1, 2, 5], amount: 11 },
    expected: 3,
    description: "5 + 5 + 1 = 11",
  },
  {
    input: { coins: [2, 5, 10, 1], amount: 27 },
    expected: 4,
    description: "10 + 10 + 5 + 2 = 27",
  },
];
