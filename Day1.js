// Problem 1: https://leetcode.com/problems/two-sum/description/

var twoSum = function (nums, target) {

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let res = target - nums[i];
        if (map.has(res)) {
            return [map.get(res), i];
        }
        map.set(nums[i], i);
    }

};

//Problem 2: https://leetcode.com/problems/merge-sorted-array/description/

var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] < nums2[j]) {
            nums1[k] = nums2[j];
            j--;
            k--;
        }
        else if (nums1[i] > nums2[i]) {
            nums1[k] = nums1[i];
            i--;
            k--;
        }
        else {
            nums1[k] = nums1[i];
            i--;
            k--;
        }
    }
    while (i >= 0) {
        nums1[k] = nums1[i];
        i--;
        k--;
    }
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
    return nums1;
};

//Problem 3: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

var twoSum = function (numbers, target) {
    let map = new Map();

    for (let i = 0; i < numbers.length; i++) {
        if (map.has(target - numbers[i])) {
            return [map.get(target - numbers[i]), i + 1];
        }
        map.set(numbers[i], i + 1);
    }
};
