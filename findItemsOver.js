function findItemsOver(obj,threshold){
    var arr=[];
      for(var c in obj){
      if(obj[c].qty>threshold) arr.push(obj[c]);
      }
    return arr;
    }