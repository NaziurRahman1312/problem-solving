function addBinary(a: string, b: string): string {
    let carry : number = 0;
    let alen : number = a.length - 1;
    let blen : number = b.length - 1;
    let result : string = '';

    while(alen >= 0 || blen >= 0){
        const num1 = parseInt(a[alen] ?? "0");
        const num2 = parseInt(b[blen] ?? "0");

        carry += num1 + num2;

        result = (carry % 2 === 1 ? '1' : '0') + result;

        carry = carry >= 2 ? 1 : 0;

        alen--;
        blen--;
    }

    return  (carry === 1 ? '1' : '') + result;
};