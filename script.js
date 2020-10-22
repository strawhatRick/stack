let inputData = document.querySelector('.input');
let pushElement = document.querySelector('.push');
let popElement = document.querySelector('.pop');
let displayStack = document.querySelector('.stack');
let stack = [];

//display stack
window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/f38e531735fd400dbe378bf437e8146b/stack/")
    .then(response => {
        let array = response.data[response.data.length - 1].stack;
        stack = array;//assigning stack to array
        for (let i in array){
            let ele = document.createElement('h2');
            ele.innerHTML = array[i];
            displayStack.append(ele);
        }
    })
});

//push elements
let pushElementToStack = function (){
    let i = inputData.value;
    if (i != ""){
        stack.push(i);
        axios.post("https://crudcrud.com/api/f38e531735fd400dbe378bf437e8146b/stack/",{
            stack
        })    
    let ele = document.createElement('h2');
    ele.innerHTML = i;
    displayStack.append(ele);
    }
}
pushElement.addEventListener('click', pushElementToStack);

//pop elements
let popElementFromStack = function (){
    let i = stack[stack.length - 1];
    //console.log(i);
    if (i != "" && (stack.length > 0)){
        
        stack.pop();
        //console.log(stack);
        axios.post("https://crudcrud.com/api/f38e531735fd400dbe378bf437e8146b/stack/",{
            stack
        })
        
        displayStack.lastElementChild.remove();
    }
}
popElement.addEventListener('click', popElementFromStack);
