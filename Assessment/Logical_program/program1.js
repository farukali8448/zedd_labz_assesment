// 1) find duplicate and same values in two array
// var fullWordList = ['1','2','3','4','5'];
// var wordsToRemove = ['1','2','3'];


 var fullWordList = ['1','2','3','4','5'];
 var wordsToRemove = ['1','2','3'];

var duplicate=[];
var sameValue=[];
//finding duplicates and same values
for(var i=0;i<fullWordList.length;i++){
    var word=fullWordList[i]
    if(wordsToRemove.includes(word)){
        //the word is present in wordsToRemove array
        sameValue.push(word)
        duplicate.push(word)
    }else if(fullWordList.indexOf(word,i+1)!==-1)
    {
       //the word is a duplicate in fullwordlist array
       duplicate.push(word)
    }
}

console.log("Duplicate",duplicate)//---->Duplicate [ '1', '2', '3' ]
console.log("Some Value",sameValue)//---->Some Value [ '1', '2', '3' ]