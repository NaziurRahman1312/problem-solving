function summaryRanges(nums: number[]): string[] {
    const result = [];
    const len = nums.length;

    for(let i = 0; i < len ; i++){
        let a = i + 1;
        while(a < len && nums[a] == nums[a - 1] + 1 ) a++;
        a--;

        if(a == i) result.push(String(nums[i]));
        else result.push(String(nums[i]) + "->" + String(nums[a]));

        i = a;
    }

    return result;
};