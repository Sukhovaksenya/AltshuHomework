function contactNames (obj, lastname) {
    return `${obj.firstname} ${lastname}`;
 } const person = {
    firstname: 'Халид',
    age: 22
};
  console.log(contactNames(person, 'Аюбов'))

  

  function correctName(obj) {
    if (obj.fathername == undefined){ 
        return obj.firstname;}
     else{ return `${obj.firstname} ${obj.lastname} ${obj.fathername}`;
    };
    };
    const firstPerson = {
      firstname: 'Халид',
      lastname: 'Аюбов',
      fathername: undefined
  };
    console.log(correctName(firstPerson)); 
    const secondPerson = {
      firstname: 'Халид',
      lastname: 'Аюбов',
      fathername: 'Исаевич'
  };
    console.log(correctName(secondPerson)); 