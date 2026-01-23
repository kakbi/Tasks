function maxSubarraySum(arr, k) {
    if (arr.length < k) return null;

    let windowSum = 0;
    let maxSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    maxSum = windowSum;

    for (let end = k; end < arr.length; end++) {
        windowSum += arr[end];
        windowSum -= arr[end - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

function minSubArrayLen(target, nums) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

function longestSubstringWithoutRepeating(s) {
    const seen = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        if (seen.has(char) && seen.get(char) >= left) {
            left = seen.get(char) + 1;
        }

        seen.set(char, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

function longestOnes(nums, k) {
    let left = 0;
    let zeros = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeros++;

        while (zeros > k) {
            if (nums[left] === 0) zeros--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
