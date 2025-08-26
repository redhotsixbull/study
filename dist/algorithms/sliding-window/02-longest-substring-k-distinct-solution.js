"use strict";
/**
 * 해답: K개의 서로 다른 문자를 포함하는 가장 긴 부분 문자열
 *
 * 슬라이딩 윈도우와 해시맵을 사용한 해결
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestSubstringKDistinct = longestSubstringKDistinct;
function longestSubstringKDistinct(s, k) {
    if (k === 0 || s.length === 0)
        return 0;
    const charFreq = new Map();
    let left = 0;
    let maxLength = 0;
    for (let right = 0; right < s.length; right++) {
        const rightChar = s[right];
        // 오른쪽 문자를 윈도우에 추가
        charFreq.set(rightChar, (charFreq.get(rightChar) || 0) + 1);
        // 서로 다른 문자가 k개를 초과하면 윈도우 축소
        while (charFreq.size > k) {
            const leftChar = s[left];
            const freq = charFreq.get(leftChar) - 1;
            if (freq === 0) {
                charFreq.delete(leftChar);
            }
            else {
                charFreq.set(leftChar, freq);
            }
            left++;
        }
        // 정확히 k개의 서로 다른 문자를 가질 때만 길이 업데이트
        if (charFreq.size === k) {
            maxLength = Math.max(maxLength, right - left + 1);
        }
    }
    return maxLength;
}
// 설명:
// 1. 오른쪽 포인터를 확장하면서 문자 빈도를 추적
// 2. 서로 다른 문자가 k개를 초과하면 왼쪽 포인터를 이동
// 3. 정확히 k개의 서로 다른 문자를 가질 때 최대 길이 업데이트
//# sourceMappingURL=02-longest-substring-k-distinct-solution.js.map