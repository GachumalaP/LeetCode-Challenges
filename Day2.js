//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {

    let left = 0;
    let right = 1;

    let maxProfit = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
        }
        else {
            left = right;
        }
        right += 1;
    }
    return maxProfit;

};

//https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

var maxProfit = function (prices) {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit;

};

//https://leetcode.com/problems/majority-element/

//o(logn) with sorting
var majorityElement = function (nums) {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
};

//o(n) with hashmap

var majorityElement = function (nums) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
        else {
            map.set(nums[i], 1);
        }
    }
    for (const [key, value] of map) {
        if (value > nums.length / 2) return key;
    }
};