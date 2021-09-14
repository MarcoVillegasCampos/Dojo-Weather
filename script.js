
console.log("Page loaded...");



function remove (event){
    console.log(event.target);
    let variable= event.target.closest('.addBanner');
    console.log(variable);
    variable.remove();
}






