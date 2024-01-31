function isIsomorphic(s: string, t: string): boolean {
    var dict = [];
    var dict2 = [];

    for(let i = 0 ; i < s.length; i++){
        if(dict[s[i]] == undefined && dict2[t[i]] == undefined){
            dict[s[i]] = t[i];
            dict2[t[i]] = s[i];
        }else if(dict[s[i]] != undefined && dict2[t[i]] != undefined){
            if(dict[s[i]] != t[i] || dict2[t[i]] != s[i]) return false;
        }else return false;
    }

    return true;
};