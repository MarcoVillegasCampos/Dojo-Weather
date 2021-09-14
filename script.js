
console.log("Page loaded...");



function remove (event){
    console.log(event.target);
    let element= event.target.closest('.ok');
    console.log(element);
    element.remove();
}


let removeAll= document.querySelectorAll('.ok')



