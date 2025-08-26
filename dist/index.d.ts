/**
 * 알고리즘 문제 실행기
 *
 * 터미널에서 특정 알고리즘 문제를 실행하고 테스트할 수 있습니다.
 *
 * 사용법:
 * npm run dev
 * npm run dev sliding-window
 * npm run dev two-pointers 01
 */
interface TestCase<T = any> {
    input: T;
    expected: any;
    description: string;
}
interface AlgorithmModule {
    testCases: TestCase[];
    [key: string]: any;
}
declare const colors: {
    reset: string;
    bright: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    magenta: string;
    cyan: string;
};
declare function colorize(text: string, color: keyof typeof colors): string;
declare function runTests(moduleName: string, module: AlgorithmModule, solutionModule?: AlgorithmModule): void;
declare const availableAlgorithms: {
    'sliding-window': string[];
    'two-pointers': string[];
    'binary-search': string[];
    'dynamic-programming': string[];
    graph: string[];
    array: string[];
    string: string[];
    backtracking: string[];
};
declare function main(): Promise<void>;
//# sourceMappingURL=index.d.ts.map