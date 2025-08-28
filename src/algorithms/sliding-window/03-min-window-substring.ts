/**
 * 문제: 최소 윈도우 부분 문자열
 *
 * 문자열 s와 t가 주어졌을 때, s에서 t의 모든 문자를 포함하는
 * 가장 짧은 부분 문자열을 찾으시오. 그런 부분 문자열이 없으면 빈 문자열을 반환하시오.
 *
 * 예시:
 * 입력: s = "ADOBECODEBANC", t = "ABC"
 * 출력: "BANC"
 *
 * 입력: s = "a", t = "a"
 * 출력: "a"
 *
 * 입력: s = "a", t = "aa"
 * 출력: ""
 *
 * 시간 복잡도: O(|s| + |t|)
 * 공간 복잡도: O(|s| + |t|)
 */

export function minWindow(s: string, t: string): string {
  let size = 1;
  let result = "";

  function search() {
    // 불가능 케이스
    if (t.length > s.length) {
      return;
    }
    // 못찾음 없음 상태
    if (size > s.length) {
      return;
    }

    for (let left = 0; left <= s.length - size; left++) {
      let right = left + size;
      if (checkIncludeChar(t, s.slice(left, right))) {
        result = s.slice(left, left + size);
        return;
      }
    }
    // for문돌동안 발견못하면 사이즈 늘리기
    size++;
    search();
  }

  search();

  return result;
}

function checkIncludeChar(s: string, target: string) {
  for (let i = 0; i < s.length; i++) {
    if (!target.includes(s[i]!)) {
      return false;
    }
  }
  return true;
}

// 테스트 케이스
export const testCases = [
  {
    input: { s: "ADOBECODEBANC", t: "ABC" },
    expected: "BANC",
    description: "기본 케이스",
  },
  {
    input: { s: "a", t: "a" },
    expected: "a",
    description: "단일 문자",
  },
  {
    input: { s: "a", t: "aa" },
    expected: "",
    description: "불가능한 경우",
  },
  {
    input: { s: "ab", t: "b" },
    expected: "b",
    description: "끝에 있는 경우",
  },
];
