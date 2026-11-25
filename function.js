console.log(launchApp())
function launchApp(){
    console.log("App launched successfully");
    return 'App launched successfully'
}

let login = function(){
console.log('Login successful');

}
login()


let a = 5
let b = 3
let add = () => a + b
console.log(add());

let funArrow = ()=>{
    console.log('Hello team I am an arrow function');
    
}
funArrow()

function login1(cb1, cb2){
    console.log('login was successful');
    cb1()
    cb2()
}

    function enterUsername(){
    console.log('entered username');
    


function enterPassword(){
    console.log('Entered password');
    
}
login1(enterUsername,enterPassword)
    
}