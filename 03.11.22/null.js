/*В JavaScript null не является «ссылкой на несуществующий объект» или «нулевым указателем», как в некоторых других языках. Это просто специальное значение, которое представляет собой «ничего»,
 «пусто» или «значение неизвестно».*/
  let age = null;
  const weekendWork = null;

  console.log(age + weekendWork);//0
  console.log(age - weekendWork);//0
  console.log(age / weekendWork);//0
  console.log(age * weekendWork);//Nan
  console.log(age ** weekendWork);//1