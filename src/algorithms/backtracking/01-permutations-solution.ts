/**
 * 해답: 순열 생성
 *
 * 백트래킹을 사용한 해결
 */

// 방법 1: 백트래킹 (재귀)
export function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(current: number[], remaining: number[]): void {
    // 기저 조건: 모든 숫자를 사용한 경우
    if (remaining.length === 0) {
      result.push([...current]);
      return;
    }

    // 남은 숫자들 중 하나씩 선택
    for (let i = 0; i < remaining.length; i++) {
      const chosen = remaining[i]!;
      const newRemaining = [
        ...remaining.slice(0, i),
        ...remaining.slice(i + 1),
      ];

      current.push(chosen);
      backtrack(current, newRemaining);
      current.pop(); // 백트래킹
    }
  }

  backtrack([], nums);
  return result;
}

// 방법 2: 백트래킹 (visited 배열 사용)
export function permuteWithVisited(nums: number[]): number[][] {
  const result: number[][] = [];
  const visited = new Array(nums.length).fill(false);

  function backtrack(current: number[]): void {
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        current.push(nums[i]!);

        backtrack(current);

        current.pop();
        visited[i] = false;
      }
    }
  }

  backtrack([]);
  return result;
}

// 방법 3: Heap's 알고리즘 (효율적인 순열 생성)
export function permuteHeaps(nums: number[]): number[][] {
  const result: number[][] = [];
  const arr = [...nums];

  function generate(k: number): void {
    if (k === 1) {
      result.push([...arr]);
      return;
    }

    generate(k - 1);

    for (let i = 0; i < k - 1; i++) {
      if (k % 2 === 0) {
        // k가 짝수면 i번째와 마지막 원소 교환
        [arr[i], arr[k - 1]] = [arr[k - 1]!, arr[i]!];
      } else {
        // k가 홀수면 첫 번째와 마지막 원소 교환
        [arr[0], arr[k - 1]] = [arr[k - 1]!, arr[0]!];
      }

      generate(k - 1);
    }
  }

  generate(nums.length);
  return result;
}

// 방법 4: 반복적 접근법
export function permuteIterative(nums: number[]): number[][] {
  let result: number[][] = [[]];

  for (const num of nums) {
    const newResult: number[][] = [];

    for (const perm of result) {
      // 현재 순열의 모든 위치에 새 숫자 삽입
      for (let i = 0; i <= perm.length; i++) {
        newResult.push([...perm.slice(0, i), num, ...perm.slice(i)]);
      }
    }

    result = newResult;
  }

  return result;
}

// 방법 5: 사전식 순서로 다음 순열 생성
export function nextPermutation(nums: number[]): boolean {
  // 1. 오른쪽부터 첫 번째로 감소하는 지점 찾기
  let i = nums.length - 2;
  while (i >= 0 && nums[i]! >= nums[i + 1]!) {
    i--;
  }

  if (i === -1) return false; // 마지막 순열

  // 2. i보다 큰 가장 작은 원소 찾기
  let j = nums.length - 1;
  while (nums[j]! <= nums[i]!) {
    j--;
  }

  // 3. 교환
  [nums[i], nums[j]] = [nums[j]!, nums[i]!];

  // 4. i+1부터 끝까지 뒤집기
  let left = i + 1;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right]!, nums[left]!];
    left++;
    right--;
  }

  return true;
}

export function permuteNextPermutation(nums: number[]): number[][] {
  const result: number[][] = [];
  const arr = [...nums].sort((a, b) => a - b); // 사전식 순서로 정렬

  do {
    result.push([...arr]);
  } while (nextPermutation(arr));

  return result;
}

// 설명:
// 1. 백트래킹: 가장 직관적, 모든 가능성을 체계적으로 탐색
// 2. Heap's 알고리즘: 최소한의 교환으로 모든 순열 생성
// 3. 반복적 방법: 점진적으로 순열 구성
// 4. 다음 순열: 사전식 순서로 순열을 하나씩 생성
// 5. 시간 복잡도: 모두 O(n!), 공간 복잡도: O(n)
