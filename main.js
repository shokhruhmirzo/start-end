var arr = ['alimov','shoxrux', 16]
var inp1 = document.querySelector('.input-one')
var inp2 = document.querySelector('.input-two');
var img = document.querySelector('img');
var h1 = document.querySelector('h1');
var h3 = document.querySelector('h3');

function bt(){
    var val1 = inp1.value
    var val2 = inp2.value
    if(val2 == 'end'){
        arr.push(val1)
        console.log(arr);
        h1.style.display = 'none';
        img.style.display = 'block';
        inp1.style.border = 'none';
        inp2.style.border = 'none';
        h3.style.display = 'block';

    }else if(val2 == 'start'){
        arr.unshift(val1)
        console.log(arr);
        h1.style.display = 'none';
        img.style.display = 'block';
        inp1.style.border = 'none';
        inp2.style.border = 'none';
        h3.style.display = 'block';
    }else{
        inp1.style.border = '2px solid red'
        inp2.style.border = '2px solid red'
    }
}