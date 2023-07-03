// 2) longest-chain-of-letters-in-word-javascript
// const word = '0000011111010100111110000101



const word = '0000011111010100111110000101'
let currentChainLength=0;
let longestChainLength=0;

for(let i=0; i<word.length;i++){
    if(word[i]==='1'){
    //if contain character is '1' increase the current chain length
    currentChainLength++;
}
else {
        //if contain character is '0' update the longest chain length  if needed
    if(currentChainLength>longestChainLength)
    {
        longestChainLength=currentChainLength
    }
    //Reset the current chain length
    currentChainLength=0
}
}

//update the longest chain length if the chain extends untill the end of the word

if(currentChainLength>longestChainLength){
    longestChainLength=currentChainLength
}

console.log("Longest Chain Length : ",longestChainLength)//--->Longest Chain Length :  5