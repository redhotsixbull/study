/**
 * 문제: 유효한 애너그램
 *
 * 두 문자열이 애너그램인지 확인하시오.
 * 애너그램: 한 문자열의 글자를 재배열해서 다른 문자열을 만들 수 있는 경우
 *
 * 예시:
 * 입력: s = "anagram", t = "nagaram"
 * 출력: true
 *
 * 입력: s = "rat", t = "car"
 * 출력: false
 *
 * 시간 복잡도: O(n)
 * 공간 복잡도: O(1) (알파벳 소문자만 고려)
 */

export function isAnagram(s: string, t: string): boolean {
  // 여기에 코드를 작성하세요
  throw new Error("구현되지 않음");
}

// 테스트 케이스
export const testCases = [
  {
    input: { s: "anagram", t: "nagaram" },
    expected: true,
    description: "기본 케이스",
  },
  {
    input: { s: "rat", t: "car" },
    expected: false,
    description: "애너그램이 아닌 경우",
  },
  {
    input: { s: "listen", t: "silent" },
    expected: true,
    description: "다른 애너그램",
  },
  {
    input: { s: "a", t: "ab" },
    expected: false,
    description: "길이가 다른 경우",
  },
];
