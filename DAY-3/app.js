// addEventListener

// var btn = document.querySelector('#btn');
// btn.onclick = function(e) {
//    console.log(e.target);
// }

// btn.addEventListener('click',function() {
//     SayHello();
// })

// function SayHello() {
//     console.log('Hello');
// }

// eventBubbling
// eventCapturing

// useCapture (true,false)
// stopPropagation

// var x = document.querySelector('.X')
// var y = document.querySelector('.Y')
// var z = document.querySelector('.Z')


// x.addEventListener('click',function(e) {
//     console.log(e.target);
//     e.stopPropagation();
//     alert('red')
// })

// y.addEventListener('click',function(e) {
//     console.log(e.target);
//     e.stopPropagation();
//     alert('blue')
// })


// z.addEventListener('click',function(e) {
//     console.log(e.target);
//     e.stopPropagation();
//     alert('white')
// })


// parentElement
// children
// previousElementSibling
// nextElementSibling


// var btn = document.querySelector('#btn_add');

// var obj = []

// btn.addEventListener('click',function(e) {
//     var photo = e.target.parentElement.previousElementSibling.children[0].src;
//     var location = e.target.previousElementSibling.previousElementSibling.innerText;
//     var description = e.target.previousElementSibling.innerText
//     console.log(photo);
//     console.log(location);
//     console.log(description);
//     obj.push({
//         id:1,
//         photo: photo,
//         location: location,
//         description: description
//     })
//     console.log(obj);
// })

// console.log(window.innerWidth);
// console.log(window.innerHeight);

// console.log("Screen width: " + screen.width);
// console.log("Screen height: " +  screen.height);


// function Open() {
//     // window.open('https://www.google.az/');
//     location.reload();
// }

// function Close() {
//     window.close();
// }


// if(navigator.onLine) {
//     console.log('Online');
// }
// else{
//     console.log('Offline');
// }


// var btn = document.getElementById('status')

//     if(navigator.onLine) {
//         btn.innerText = 'OFFLINE'
//         btn.style.backgroundColor = 'green'
//     }
//     else{
//         btn.innerText = 'OFFLINE'
//         btn.style.backgroundColor = 'red'
//     }


// document.body.onkeyup = function(e) {
//     if(e.keyCode === 32) {
//         alert('You pressed SpaceBar');
//     }
// }


// var count = document.querySelector('#count');
// var times = 0;

// document.body.onkeydown = function(e) {
//     if(e.keyCode === 32) {
//         times++;
//         count.innerHTML = times;
//     }
// }

// document.body.onkeyup = function(e) {
//     if(e.keyCode === 32) {
//         times=0;
//         count.innerHTML = times;
//     }
// }

// var left = 0;

// document.body.onkeydown = function(e) {
//     var div = document.getElementById('first');
//     if(e.keyCode === 39) {
//         left += 1
//         div.style.left = `${left}%`
//     }

//     var div = document.getElementById('first');
//     if(e.keyCode === 37) {
//         left -= 1
//         div.style.left = `${left}%`
//     }
// }



// classList => add / remove / toggle / contains
// className
// var box = document.querySelector('#first');

// function Add() {
//     box.classList.toggle('active');
// }

// function AddClass() {
//     if(box.classList.contains('active')) {
//         box.classList.remove('active')
//     }
//     else{
//         box.classList.add('active')
//     }
// }


// var btns = document.querySelectorAll('.btn');
// // console.log(btns);

// for(var btn of btns) {
//     btn.addEventListener('click',function(e) {
//        var active = document.querySelector('.active');
//        active.classList.remove('active');
//        this.classList.add('active');
//     })
// }


// Object Literals
// var Person = {
//     ad: "Seid",
//     yas: 20,
//     unvan: {
//         country: "Azerbaijan",
//         city: "Baku"
//     }
// }

// Person.job = 'Developer';
// console.log(Person);
// console.log(Person.job);

// for(var item in Person) {
//     console.log(Person[item]);

// }

// console.log(Person.unvan.country);

// var User = Person;
// User.yas = 25;

// console.log(Person.yas);
// console.log(Person['yas']);

// create()

// Object.create(User);
// User.firstname = 'Cahangir';
// User.age = 25;


// var Student = {};
// Student.ad = 'Rehman';
// Student.yas = 18

// var Telebe = new Object()