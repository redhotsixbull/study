# 🚀 TypeScript 알고리즘 스터디

비행기에서 공부할 수 있는 TypeScript 알고리즘 문제 모음집입니다.

## 📁 프로젝트 구조

```
src/
├── algorithms/
│   ├── sliding-window/          # 슬라이딩 윈도우
│   ├── two-pointers/            # 투 포인터
│   ├── binary-search/           # 이진 탐색
│   ├── dynamic-programming/     # 동적 프로그래밍
│   ├── graph/                   # 그래프 알고리즘
│   ├── array/                   # 배열 문제
│   ├── string/                  # 문자열 문제
│   └── backtracking/            # 백트래킹
└── index.ts                     # 메인 실행기
```

## 🛠️ 설치 및 실행

```bash
# 의존성 설치
npm install

# 프로젝트 빌드
npm run build

# 개발 모드로 실행
npm run dev

# 특정 카테고리 보기
npm run dev sliding-window

# 특정 문제 실행
npm run dev sliding-window 01
```

## 📚 알고리즘 카테고리

### 1. 슬라이딩 윈도우 (Sliding Window)

- **01-max-sum-subarray**: 크기 k인 부분 배열의 최대 합
- **02-longest-substring-k-distinct**: K개 서로 다른 문자를 포함하는 가장 긴 부분 문자열
- **03-min-window-substring**: 최소 윈도우 부분 문자열

### 2. 투 포인터 (Two Pointers)

- **01-two-sum-sorted**: 정렬된 배열에서 두 수의 합
- **02-three-sum**: 세 수의 합이 0인 삼중항 찾기
- **03-container-with-most-water**: 가장 많은 물을 담는 컨테이너

### 3. 이진 탐색 (Binary Search)

- **01-binary-search-basic**: 기본 이진 탐색
- **02-find-first-last-position**: 첫 번째와 마지막 위치 찾기
- **03-search-rotated-sorted-array**: 회전된 정렬 배열에서 탐색

### 4. 동적 프로그래밍 (Dynamic Programming)

- **01-fibonacci**: 피보나치 수열
- **02-coin-change**: 동전 교환 문제
- **03-longest-increasing-subsequence**: 가장 긴 증가하는 부분 수열

### 5. 그래프 (Graph)

- **01-bfs-shortest-path**: BFS를 이용한 최단 경로
- **02-dfs-connected-components**: DFS를 이용한 연결 컴포넌트
- **03-dijkstra-shortest-path**: 다익스트라 최단 경로

### 6. 배열 (Array)

- **01-merge-intervals**: 구간 병합

### 7. 문자열 (String)

- **01-valid-anagram**: 유효한 애너그램

### 8. 백트래킹 (Backtracking)

- **01-permutations**: 순열 생성

## 🎯 사용법

### 모든 카테고리 보기

```bash
npm run dev
```

### 특정 카테고리의 문제들 보기

```bash
npm run dev sliding-window
npm run dev dynamic-programming
```

### 특정 문제 실행하기

```bash
npm run dev sliding-window 01    # 슬라이딩 윈도우 첫 번째 문제
npm run dev two-pointers 02      # 투 포인터 두 번째 문제
```

## 📝 문제 풀이 방법

1. 각 문제 파일에는 문제 설명과 빈 함수가 있습니다
2. 함수를 구현한 후 `npm run dev [카테고리] [번호]`로 테스트
3. 막히면 `-solution.ts` 파일에서 해답을 확인하세요

### 예시: 피보나치 수열 풀기

```bash
# 1. 문제 확인
npm run dev dynamic-programming 01

# 2. src/algorithms/dynamic-programming/01-fibonacci.ts 파일 수정
# 3. 다시 테스트
npm run dev dynamic-programming 01
```

## 🔍 파일 구조 설명

각 알고리즘 카테고리마다:

- `문제번호-문제명.ts`: 풀어야 할 문제 (함수가 비어있음)
- `문제번호-문제명-solution.ts`: 해답 및 설명

예:

```
sliding-window/
├── 01-max-sum-subarray.ts           # 문제
├── 01-max-sum-subarray-solution.ts  # 해답
├── 02-longest-substring-k-distinct.ts
└── 02-longest-substring-k-distinct-solution.ts
```

## 🎨 터미널 출력 설명

- 🚀 **파란색**: 테스트 케이스 정보
- ✅ **초록색**: 테스트 통과
- ❌ **빨간색**: 테스트 실패
- ⚠️ **노란색**: 구현되지 않음
- 💜 **마젠타**: 해답 출력

## 💡 팁

1. **오프라인 학습**: 모든 패키지가 설치되어 있어 인터넷 없이도 학습 가능
2. **점진적 학습**: 쉬운 문제부터 차근차근 풀어보세요
3. **다양한 접근법**: 해답 파일에는 여러 가지 풀이 방법이 포함되어 있습니다
4. **시간 복잡도**: 각 문제마다 시간/공간 복잡도가 명시되어 있습니다

## 🚀 빌드 및 배포

```bash
# TypeScript 컴파일
npm run build

# 린팅
npm run lint

# 포맷팅
npm run format
```

즐거운 알고리즘 공부되세요! ✈️💻
