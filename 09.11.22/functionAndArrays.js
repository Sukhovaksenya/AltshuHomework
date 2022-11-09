
  function hasEqualSums(first, second) {
   
   let firstSum = 0;
  for (i=0; i< first.length; i++) {
    firstSum += first[i]
  }
  let secondSum = 0;
   for (i=0; i< second.length; i++)
   {
   secondSum += second[i]
  }
      if (firstSum == secondSum)
      { return true;
      }else{
             return false;
         }
         }
   
   console.log(hasEqualSums([11, 22], [1, 20, 10, 1, 1]));
   // должен вернуть true, т.к. 11+22=33 и 1+20+10+1+1=33
   
   console.log(hasEqualSums([4, 4], [3, 6]));
   // должен вернуть false, т.к. 4+4=8, а 3+6=9
   
 function filterNames (names,number) {
 let result = names.filter(names => names.length == number) 
 return result; 
 }
  console.log(filterNames(['alt', 'shoo', 'js', 'html', 'git'], 4));
  