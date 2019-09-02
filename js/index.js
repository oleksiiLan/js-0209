//let num = parseFloat(prompt('Enter numeber'));
//while (isNaN(num)){
//    alert('Your enter is not number');

//}

//let products = ['Tesla X','Tesla S','BMW i3'];
//products[3] = 'Tesla Y';
//products.push('ZAZ Sens','Chevy Corvette');
//products[10] = 'Toyta Corola';
//console.log(products.length);

//for (let i = 0; i < products.length; i++){
//    if (products[i] ! == undefined){
//    console.log(products[i]);
//}
//}

//products.forEach(element =>
 //   console.log(element));
//for (let i = 100; i > 0; i--){
//     if( i % 2 === 0 && i % 10 !== 0){
//     document.write(i + '<br>');
//     }
//}

//let i =0;
//while( i < 100) {
//    document.write(i + '<br>')
 //   i++;
//}
//let i =0
//do {
//    document.write(i + '<br>')
//    i++;
//} while (i < 100);

//let num = parseFloat(prompt('Enter number'));
//while (Number.isNaN(num)){
//    alert('You entered not a number!')
 //   num = parseFloat(prompt('Enter number'));
//}

//let num;
//do{
//    if(num !== undefined) {
//    alert('You entered not a number!')
//  }
 //   num = parseFloat(prompt('Enter number'));//починае
//} while (isNaN(num))

let products = ['Tesla X','Tesla S','BMW i3'];
products[3] = 'Tesla Y';
products.push('Cheve Corvette', 'ZAZ Sens');
products[10] = 'Toyota Corolla';

console.log(products.length);

//for(let i = 0; i < products.length; i++){
 //   if (products[i] !== undefined){
 //   console.log(products[i]);
//}
//}

//products.forEach(function printElement(element){ // в фооеач вписали ще фукці.
//    console.log(element);// анонімна
//});

products.forEach(el => console.log(el));

