
const body = document.querySelector('body');
document.body.style.display ='flex';
document.body.style. justifyContent ='center';

const paragraph = document.createElement('p');
paragraph.innerText ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsam soluta libero tempora temporibus totam atque iusto et, placeat architecto, dolorem excepturi recusandae vitae adipisci repudiandae laborum vero aliquam quos?';
 paragraph.style.width = '500px';
paragraph.style.border = '4px solid red';
paragraph.style.padding = '20px';
paragraph.style.borderRadius = '15px';
paragraph.style.margin = '100px';
body.append(paragraph); 

const altshu = document.createElement('a');
altshu.href = 'https://altshu.com';
altshu.setAttribute('target', '_blank');
document.querySelector('a');
altshu.innerText = 'Altshu';
altshu.style.position = 'relative';
altshu.style.right='600px';
altshu.style.top = '250px';
body.append(altshu);

const google = document.createElement('a');
google.href = 'https://www.google.ru/';
google.setAttribute('target', '_blank');
document.querySelector('a');
google.innerText = 'Google';
google.style.position = 'relative';
google.style.right='450px';
google.style.top = '250px';
body.append(google);

const instagram = document.createElement('a');
instagram.href = 'https://instagram.com/';
instagram.setAttribute('target', '_blank');
document.querySelector('a');
instagram.innerText = 'Instagram';
instagram.style.position ='relative';
instagram.style.right ='300px'
instagram.style.top = '250px';
body.append(instagram);