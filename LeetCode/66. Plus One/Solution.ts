function plusOne(digits: number[]): number[] {
    let carry : number = 1;

    for(let i = digits.length - 1; i >= 0; i--){
        if(carry === 0) return digits;
        let val = carry + digits[i]
        digits[i] = val === 10 ? 0 : val;
        carry = val === 10 ? 1 : 0;
    }

    if(carry === 1){
       return [1].concat(digits);
    }else return digits;
};