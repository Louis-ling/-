'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let result=[];

  for(var m=0;m<collectionA.length;m++)
  {
    for(var n=0;n<collectionB.length;n++)//循环
    {
      if(collectionA[m]==collectionB[n])
      {
        result.push(collectionA[m])
      }
    }
  }    
//若A集合与B集合元素相同则输出A集合中相同的那个元素
    return result;
}
