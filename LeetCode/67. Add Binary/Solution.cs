public class Solution {
    public string AddBinary(string a, string b) {
        var carry = 0;
        var alen = a.Length - 1;
        var blen = b.Length - 1;
        var result = new StringBuilder();

        while(alen >= 0 || blen >= 0){
            if(alen >= 0 & blen >= 0){
                carry += (a[alen] - '0') + (b[blen] - '0');
                if(carry == 3){
                    result.Insert(0, '1');
                    carry = 1;
                }
                else if(carry == 2){
                    result.Insert(0, '0');
                    carry = 1;
                }else {
                    result.Insert(0, carry == 1 ? '1' : '0');
                    carry = 0;
                }
            }else {
                carry +=  alen >= 0 ? (a[alen] - '0') : (b[blen] - '0');
                if(carry == 3){
                    result.Insert(0, '1');
                    carry = 1;
                }
                else if(carry == 2){
                    result.Insert(0, '0');
                    carry = 1;
                }else {
                    result.Insert(0, carry == 1 ? '1' : '0');
                    carry = 0;
                }
            }

            alen--;
            blen--;
        }

        if(carry == 1) result.Insert(0, '1');

        return result.ToString();
    }
}