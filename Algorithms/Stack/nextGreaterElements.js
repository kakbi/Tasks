function nextGreaterElements(nums) {
    const result = new Array(nums.length).fill(-1);
    const stack = []; // храним индексы

    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = nums[i];
        }

        stack.push(i);
    }

    return result;
}

console.log(nextGreaterElements([4, 5, 2, 10, 8]));
// [5, 10, 10, -1, -1]
