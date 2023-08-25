const h1=document.getElementsByClassName("text");

// console.log(h1);

const h3 = document.getElementsByClassName("gencolor") ; 

// console.log(h3);

const btn=document.getElementsByClassName("btn");

// console.log(btn);

// adding event to the button whenevrn clicks the color will be changed

btn[0].addEventListener("click",()=>{
    let color= generateColor();

    // console.log(color);

    h1[0].style.color=color;
    h3[0].style.color=color;
    h3[0].innerText=color;
    document.body.style.backgroundColor=color;
})

// This function will generate a random number beteen 0 and 256 excluding 256 so the the rgb will can be taken

function genNumber(){
    let num= Math.floor(Math.random()*256);

    // console.log(num);

    return num;
}
// This function will generate a rgb value and set it to the background and to the other elements color value.

function generateColor(){
    let c1=genNumber();
    let c2=genNumber();
    let c3=genNumber();

    // console.log(`rgb(${c1},${c2},${c3})`)
    
    return `rgb(${c1},${c2},${c3})`;
}

