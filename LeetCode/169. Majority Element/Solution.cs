public class Solution {
    public int MajorityElement(int[] nums) {
        int candidate = nums[0];
        int count = 1;
        int len = nums.Length;

        for(int i = 1; i < len; i++){
            if(count == 0){
                candidate = nums[i];
                count++;
            }else if (candidate == nums[i]) count++;
            else count--;
            if(count > len / 2) return candidate;
        }

        return candidate;
    }
}