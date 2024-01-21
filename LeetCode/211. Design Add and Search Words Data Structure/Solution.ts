class Comp{
    constructor(val: string){
        this.value = val;
    }
    left : Comp = null;
    right : Comp = null;
    middle: Comp = null;
    end: boolean = false;
    value : string;
}

class WordDictionary {
    constructor() {
        
    }

    root: Comp = null;

    insert(node: Comp | null | undefined, word: string, pos : number, len: number) : Comp{
        if(node === null || node === undefined) node = new Comp(word[pos]);

        if(word[pos] < node.value) node.left = this.insert(node.left, word, pos, len);
        else if(word[pos] > node.value) node.right = this.insert(node.right, word, pos, len);
        else{
            if(pos + 1 < len) node.middle = this.insert(node?.middle, word, pos + 1, len);
            else node.end = true;
        }

        return node;
    }

    find(node: Comp | null | undefined, word: string, pos : number, len: number) : boolean{
        if(node === null || node === undefined) return false;

        if(word[pos] === '.'){
            if(this.find(node.left, word, pos, len)) return true;
            else if(this.find(node.right, word, pos, len)) return true;
            else{
                if(pos + 1 < len) return this.find(node.middle, word, pos + 1, len);
                else return node.end;
            }
        }

        if(word[pos] < node.value) return this.find(node.left, word, pos, len);
        else if(word[pos] > node.value) return this.find(node.right, word, pos, len);
        else{
            if(pos + 1 < len) return this.find(node.middle, word, pos + 1, len);
            else return node.end;
        }
    }

    addWord(word: string): void {
       this.root = this.insert(this.root, word, 0, word.length);
    }

    search(word: string): boolean {
        return this.find(this.root, word, 0, word.length);
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */