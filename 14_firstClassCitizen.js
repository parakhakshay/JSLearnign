



// In JS 'Function' is called as the first class citizen

// 1) function expression
// 2)Function call-back as an argument
// 3) function returning another function


function outer(){
    console.log('Inside outer function');
   return function(){
     console.log('Inside inner function');
   } 
    
}
outer()();