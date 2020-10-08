let inputData = document.querySelector('.input');
let pushElement = document.querySelector('.push');
let popElement = document.querySelector('.pop');
let displayStack = document.querySelector('.stack');
let stack = [];

function pushElementToStack(){
    let i = inputData.value;
    if (i != ""){
        stack.push(i);
        ele = document.createElement('h2');
        ele.innerHTML = i;
        displayStack.append(ele);
    }
}

function popElementFromStack(){
    let i = stack[stack.length - 1];
    //console.log(i);
    if (i != "" && (stack.length > 0)){
        stack.pop();
        displayStack.lastElementChild.remove();
    }
}