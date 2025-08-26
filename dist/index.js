"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
// 색상 출력을 위한 헬퍼
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
};
function colorize(text, color) {
    return `${colors[color]}${text}${colors.reset}`;
}
// 테스트 실행 함수
function runTests(moduleName, module, solutionModule) {
    console.log(colorize(`\n🚀 ${moduleName} 테스트 실행`, 'bright'));
    console.log(colorize('='.repeat(50), 'cyan'));
    const functionNames = Object.keys(module).filter(key => typeof module[key] === 'function' && key !== 'testCases');
    if (functionNames.length === 0) {
        console.log(colorize('❌ 실행할 함수를 찾을 수 없습니다.', 'red'));
        return;
    }
    const mainFunction = module[functionNames[0]];
    const solutionFunction = solutionModule?.[functionNames[0]];
    let passedTests = 0;
    let totalTests = module.testCases.length;
    module.testCases.forEach((testCase, index) => {
        console.log(colorize(`\n📝 테스트 ${index + 1}: ${testCase.description}`, 'blue'));
        console.log('입력:', JSON.stringify(testCase.input));
        console.log('예상 출력:', JSON.stringify(testCase.expected));
        try {
            // 원본 함수 실행 (구현되지 않은 경우 에러)
            try {
                const result = mainFunction(testCase.input);
                console.log('실제 출력:', JSON.stringify(result));
                if (JSON.stringify(result) === JSON.stringify(testCase.expected)) {
                    console.log(colorize('✅ 통과', 'green'));
                    passedTests++;
                }
                else {
                    console.log(colorize('❌ 실패', 'red'));
                }
            }
            catch (error) {
                if (error instanceof Error && error.message === '구현되지 않음') {
                    console.log(colorize('⚠️  구현되지 않음', 'yellow'));
                    // 해답 함수가 있으면 실행
                    if (solutionFunction) {
                        try {
                            const solutionResult = solutionFunction(testCase.input);
                            console.log(colorize('해답 출력:', 'magenta'), JSON.stringify(solutionResult));
                            if (JSON.stringify(solutionResult) === JSON.stringify(testCase.expected)) {
                                console.log(colorize('✅ 해답 검증됨', 'green'));
                                passedTests++;
                            }
                            else {
                                console.log(colorize('❌ 해답도 실패', 'red'));
                            }
                        }
                        catch (solutionError) {
                            console.log(colorize('❌ 해답 실행 중 오류:', 'red'), solutionError);
                        }
                    }
                }
                else {
                    console.log(colorize('❌ 실행 중 오류:', 'red'), error);
                }
            }
        }
        catch (error) {
            console.log(colorize('❌ 테스트 실행 중 오류:', 'red'), error);
        }
    });
    console.log(colorize(`\n📊 결과: ${passedTests}/${totalTests} 테스트 통과`, 'bright'));
    if (passedTests === totalTests) {
        console.log(colorize('🎉 모든 테스트를 통과했습니다!', 'green'));
    }
    else {
        console.log(colorize('💪 계속 도전해보세요!', 'yellow'));
    }
}
// 사용 가능한 알고리즘 목록
const availableAlgorithms = {
    'sliding-window': [
        '01-max-sum-subarray',
        '02-longest-substring-k-distinct',
        '03-min-window-substring'
    ],
    'two-pointers': [
        '01-two-sum-sorted',
        '02-three-sum',
        '03-container-with-most-water'
    ],
    'binary-search': [
        '01-binary-search-basic',
        '02-find-first-last-position',
        '03-search-rotated-sorted-array'
    ],
    'dynamic-programming': [
        '01-fibonacci',
        '02-coin-change',
        '03-longest-increasing-subsequence'
    ],
    'graph': [
        '01-bfs-shortest-path',
        '02-dfs-connected-components',
        '03-dijkstra-shortest-path'
    ],
    'array': [
        '01-merge-intervals'
    ],
    'string': [
        '01-valid-anagram'
    ],
    'backtracking': [
        '01-permutations'
    ]
};
// 메인 실행 로직
async function main() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.log(colorize('📚 사용 가능한 알고리즘 카테고리:', 'bright'));
        Object.keys(availableAlgorithms).forEach(category => {
            console.log(colorize(`  - ${category}`, 'cyan'));
        });
        console.log(colorize('\n사용법:', 'bright'));
        console.log('  npm run dev [카테고리] [문제번호]');
        console.log('  예: npm run dev sliding-window 01');
        return;
    }
    const [category, problemNumber] = args;
    if (!category || !availableAlgorithms[category]) {
        console.log(colorize('❌ 유효하지 않은 카테고리입니다.', 'red'));
        console.log(colorize('사용 가능한 카테고리:', 'yellow'));
        Object.keys(availableAlgorithms).forEach(cat => {
            console.log(colorize(`  - ${cat}`, 'cyan'));
        });
        return;
    }
    const problems = availableAlgorithms[category];
    if (problemNumber) {
        const problem = problems.find(p => p.startsWith(problemNumber));
        if (!problem) {
            console.log(colorize(`❌ ${category}에서 ${problemNumber}번 문제를 찾을 수 없습니다.`, 'red'));
            console.log(colorize('사용 가능한 문제들:', 'yellow'));
            problems.forEach(p => console.log(colorize(`  - ${p}`, 'cyan')));
            return;
        }
        try {
            const module = await Promise.resolve(`${`./algorithms/${category}/${problem}.js`}`).then(s => __importStar(require(s)));
            const solutionModule = await Promise.resolve(`${`./algorithms/${category}/${problem}-solution.js`}`).then(s => __importStar(require(s))).catch(() => null);
            runTests(`${category}/${problem}`, module, solutionModule);
        }
        catch (error) {
            console.log(colorize('❌ 모듈을 불러올 수 없습니다:', 'red'), error);
        }
    }
    else {
        console.log(colorize(`📚 ${category} 카테고리의 문제들:`, 'bright'));
        problems.forEach(problem => {
            console.log(colorize(`  - ${problem}`, 'cyan'));
        });
        console.log(colorize('\n특정 문제를 실행하려면:', 'yellow'));
        console.log(`  npm run dev ${category} [문제번호]`);
    }
}
// 프로그램 실행
main().catch(error => {
    console.error(colorize('❌ 프로그램 실행 중 오류가 발생했습니다:', 'red'), error);
    process.exit(1);
});
//# sourceMappingURL=index.js.map