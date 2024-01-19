function removeDuplicates(nums: number[]): number {
    let lastPos : number = 0;
    for(let i : number = 1; i < nums.length; i++)
        if(nums[i] != nums[lastPos]) nums[++lastPos] = nums[i];
    return lastPos + 1;
};