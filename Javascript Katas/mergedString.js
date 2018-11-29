function isMerge(s, part1, part2) {
    var str='';
   var part3=[];
    if(part1.length+part2.length!==s.length){
    return false;
    }
    for(var i=0,j=0,k=0;i<s.length;i++){
      
      if(s[i]===part1[j]){
     str+=s[i];
         j++;
    } else if (s[i]===part2[k]) {
      str+=s[i];
      k++;
    }
    console.log('str is:"'+str +'" & j is:='+j+' & k is:='+ k);
   
    }
   window.answer=str;
   if(str===s){
    return true;
   }
   return false;
   }