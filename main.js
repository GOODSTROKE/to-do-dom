
let wholeList = document.querySelectorAll('#list li');
let formList = document.querySelector('#toDO');
let text = document.querySelector('#enteredText');
let add = document.querySelector('#add');
// let add2 = document.querySelector('#add');
let removeCompltd = document.querySelector('#removeCompleted');
let removeAll = document.querySelector('#removeAll');
let ulList = document.querySelector('#list')


 formList.addEventListener('submit', function(event){
    event.preventDefault();
let item = document.createElement('li');
item.innerText = text.value
ulList.appendChild(item)
text.value = "";
item.addEventListener('click', function(){
item.style.textDecoration = "line-through"
item.style.color = "white"
item.style.backgroundColor = "red"


})});

removeAll.addEventListener('click', function(){

    wholeList = document.querySelectorAll('#list li');

    for(let i = 0; i < wholeList.length; i++){
        wholeList[i].remove();

}});

removeCompltd.addEventListener('click', function(){
    wholeList = document.querySelectorAll('#list li');

     for(let i = 0; i < wholeList.length; i++){
     if(wholeList[i].style.textDecoration === "line-through"){
        wholeList[i].remove();

}}});