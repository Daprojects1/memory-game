

let mainBoard = document.querySelector(".mainBoard")

let cardsARR = [
    {
     name: "fries",
     image:"images/fries.png"   
    },
    {
     name: "fries",
     image:"images/fries.png"   
    },
    {
        name:"cheeseBurger",
        image:"images/cheeseburger.png"
    },
    {
        name:"cheeseBurger",
        image:"images/cheeseburger.png"
    },
    {
        name:"hotdog",
        image:"images/hotdog.png"
    },
    {
        name:"hotdog",
        image:"images/hotdog.png"
    }
]


const gameBoard = ()=> {
    
    const mainset = ()=>{
        cardsARR.forEach((item)=>{
            let firstSec = document.createElement("img")
             mainBoard.appendChild(firstSec)
            firstSec.setAttribute("src", "images/blank.png")
            firstSec.addEventListener("click",()=>{
            firstSec.removeAttribute("src")
            firstSec.setAttribute("src", item.image)
            setTimeout(()=>{
             firstSec.removeAttribute("src")
             firstSec.setAttribute("src", "images/blank.png")
            },1500)
            })
        })
    }
    mainset()
}
gameBoard();



