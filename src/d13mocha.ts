export function isVowel(strInput: string){

    let str=strInput.toLowerCase();
    if(str==="a" ||str==="e" || str==="i" || str==="o" || str==="u"  ){
        return true;
    }
    else{
        return false;
    }
}

console.log(isVowel("k"));
console.log(isVowel("o"));