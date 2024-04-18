let replaceWords = function(dictionary, sentence) {
    sentence = sentence.split(" ");
    for(let i = 0; i < sentence.length;i++){
        for(let root of dictionary){
            if(root === sentence[i].slice(0, root.length)){
                sentence[i] = root
            }
        }
    }
    return sentence.join(" ")
};

var longestCommonPrefix = function(strs) {
    let prefijo=strs[0];
   
   for(let i=1; i<strs.length; i++){
       let item = strs[i];
       
       while(prefijo !== "" && item.indexOf(prefijo) !== 0){
           prefijo = prefijo.slice(0, (prefijo.length - 1));    
       }
   }
   return prefijo;
};