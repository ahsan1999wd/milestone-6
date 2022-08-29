  function add(first, second){
    console.log(first, second);

/*--------------------------------

    if(second === undefined){     <---------- old way 1!!!
        second = 0;
    }
  -----------------------------

    second = second || 0;         <---------- old way 2!!!

-------------------------------------*/   
    const total = first + second;
    return total;
}

const result =add(10);
console.log(result);

/*-------------------------------------------------------*/


//   default parameter =0          <----------!!!

function add(first, second = 0){
  const total = first + second;
  return total;
}

const result = add(10);
console.log(result);

function fullName (first, last = 'Chowdhury'){
  const name = first + ' ' + last;
  return name;
}

const name = fullName('Gelam');
console.log(name);