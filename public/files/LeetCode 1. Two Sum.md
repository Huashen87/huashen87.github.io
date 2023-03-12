# LeetCode 1. Two Sum

## 題目

> Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
>
> You may assume that each input would have **exactly one solution**, and you may not use the same element twice.
>
> You can return the answer in any order.

## 解析

經典的 LeetCode 第一題。

題目要我們從給定的數組 `nums` 中，找出相異的兩數使之總和為 `target` ，並回傳該兩數的 index，順序不拘。

### Brute Force

直覺的 BF 解法，迭代兩次 `nums` 以嘗試每一種可能的組合，若兩數相加符合題目要求的 `target` 就回傳 index。

```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        for(int i = 0; i < nums.size()-1; i++)
            for(int j = i+1; j < nums.size(); j++)
                if(nums[i] + nums[j] == target) return {i, j};
        // 這裡不會執行
        return {};
    }
};
```

這裡要特別注意到第二次的 `for` 迴圈，若從`j = i` 開始，會造成相同的數重複計算的情形，導致結果出錯，因此這裡只需要從 `j = i+1` 開始就好了。

- Time Complexity : $O(n^2)$
  - 由於迭代兩次 `nums` 數組，時間複雜度為$O(n^2)$。
- Space Complexity : $O(1)$
  - 沒有使用任何額外儲存結構，空間複雜度為$O(1)$。

### Hash Map

由於此題目需要頻繁的查找，因此若使用可以增加查找效率的資料結構就會很有幫助，而這個結構就是查找複雜度為 $O(1)$ 的 **Hash Map**。
(注意在 c++ 中的 Hash Map 為 `unordered_map`，而不是一般的 `map`，`map` 底層為 RB-Tree 結構，查找需要花費 $O(\log n)$)。
我們用此結構把目前看過的數字加入其中，在之後看其他數字時，便可以用 $O(1)$ 的時間來查詢是否可以與之前已經看過的數字配對。

```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map;
        for(int i = 0; i < nums.size(); i++){
            if(map.find(target - nums[i]) != map.end())
                return {i, map[target - nums[i]]};
            map[nums[i]] = i;
        }
        return {};
    }
};
```

我們將 `target` 減去現在看到的數字，所得即為與之配對的數字，接著檢查我們是否已經有看過(即存在 `map` 裡)，若有則回傳解答，若無則將此數字加入 `map` 裡，供下次查找用。

- Time Complexity : $O(n)$
  - 由於只迭代一次 `nums` 數組，`insert`、`find` 等操作皆為 $O(1)$，因此時間複雜度為$O(n)$。
- Space Complexity : $O(n)$
  - 使用了 `unordered_map` 儲存資料，最差狀況為 $O(n)$。

## 題目連結

[1. Two Sum](https://leetcode.com/problems/two-sum/)
