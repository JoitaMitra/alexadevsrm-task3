//String funtions
function printname(){
    let f = "Joita";
    let l= "Mitra";
    let name = f.concat(' ', l);
    console.log("Name: " + name.toUpperCase());
    console.log("Length of name: " + name.length);
}
printname();

//Menu driven
let c = 1;
let day = "Sunday";
let x;
switch(c){
    case 1: if(day =="Saturday" || day == "Sunday")
                console.log("It's a holiday!");
            else
                console.log("It's a week day.");
            break;
    case 2: for(x=5;x<=100;x+=5)
                console.log(x);
            break;
    default: console.log("Wrong Input");
}