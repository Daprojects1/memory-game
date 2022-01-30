
let img = document.querySelector("img")
let mainBoard = document.querySelector(".mainBoard")
let scoreH3 = document.querySelector(".score")


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
    },
    {
      name:"milkshake",
      image:"images/milkshake.png"
    },
    {
        name:"milkshake",
        image:"images/milkshake.png"
      },
      {
          name:"icecream",
          image:"images/ice-cream.png"

      },
      {
        name:"icecream",
        image:"images/ice-cream.png"

    },
    {
        name:"pizza",
        image:"images/pizza.png"
    },
    {
        name:"pizza",
        image:"images/pizza.png"
    }


]

cardsARR.sort(()=> .5 - Math.random() )
// array holds the data-id number to stop matching self.
let value = [];
// array holds all arrays matched 
let finalCheck  = [];
// value helps to holds the target element
let data = []; 
// holds the cards names for comparison.
let cardNames = [];
// setting initial score and displaying it.
let scorenum = 0;
scoreH3.innerText = "Your Score Is" + ":" +" "+scorenum;

// initial gameboard 
const gameBoard = ()=> {
        cardsARR.forEach((item,index)=>{
            // create an image and set a blank face attribute;
            let firstSec = document.createElement("img")
            firstSec.setAttribute("src", "images/blank.png")
            // set an elements data-id attribute to index for identification
            firstSec.setAttribute("data-id",index)
            mainBoard.appendChild(firstSec)
            // event listener that invokes the flip function;
            firstSec.addEventListener("click",flip)
        })
}

// flipping gameboard
const flip = (e)=>{
    // gets the target of the click and  grabs its data-id value value stored in c;
    let c = e.target.getAttribute("data-id")
    // c pushed into an empty array that allows us to stop self matching;
    value.push(c)
    // changes the target image to the stated array image;
    e.target.setAttribute("src", cardsARR[c].image);
    // pushes event target into data array so that it can be used to change the image again.
    data.push(e.target)
    // pushes card names into cardNames array to allow comparison of the two values
    cardNames.push(cardsARR[c].name)
    // checks if names length is 2 and then invokes the checker function and also sets timeout to run smoother
    if (cardNames.length === 2){
         setTimeout(check,600);
    }
}



// checker function;
const check = ()=>{
    // grabs the first and second items clicked. saved in firstAtt and secondAtt variable.
    const firstAtt = data[0];
    const secondAtt = data[1];
    // adds last at to stop click of more than 3 values; 
    const lastAtt = data[2]
    // card names for comparison.
    const cardOne = cardNames[0];
    const cardTwo = cardNames[1];
    // comparison check
   if (cardNames.length === 2){
    //    checks if the names are the same and that their data-id is not the same;
       if (cardOne === cardTwo && value[0] != value[1]){
        //    changes the images to a white background if matched.
          firstAtt.setAttribute("src","images/white.png")
         secondAtt.setAttribute("src","images/white.png")
        //  pushes the values into an array called finalCheck. Holds all matched arrays. Helps to see if completed game.
         finalCheck.push(firstAtt,secondAtt)
        //  attempted to splice out the selected values from the mainArray- !! still working on this!!
         cardsARR.splice(value[0],0);
         cardsARR.splice(value[1],0);
        //  allows us to display the score 
         scorenum++
         scoreH3.innerText = "Your Score Is" + ":" +" "+scorenum;
        //  A check to make sure that you have won. Resets finalCheck array (holds matched arrays) and score number.
         if(finalCheck.length === cardsARR.length){
             alert("You did it, Congratulations")
             finalCheck.length=0;
             scorenum =0;
            //  reloads the document when done. Redo to add a modal that has a reset button function.
             document.location.reload(true);
         }
       } else{
        //    if they first two values dont match or their data-id is the same, it just resets it to original game board.
           firstAtt.setAttribute("src", "images/blank.png")
           secondAtt.setAttribute("src","images/blank.png")
       }
   } else {
    //    changes data- length to 2 so its always 2.
       data.length = 2;
    // reset all items images 
       lastAtt.setAttribute("src", "images/blank.png")
       firstAtt.setAttribute("src","images/blank.png")
       secondAtt.setAttribute("src", "images/blank.png")
   }
//    reset each array at the end so that they grab new values each time.
   value.length = 0;
   cardNames.length = 0
   data.length = 0;
}


gameBoard();

