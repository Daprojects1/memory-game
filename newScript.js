(function () {
  let img = document.querySelector("img");
  let mainBoard = document.querySelector(".mainBoard");
  let scoreH3 = document.querySelector(".score");

  const gameBoard = (arrOfImages) => {
    mainBoard.innerHTML = "";
    arrOfImages.sort(() => 0.5 - Math.random());
    let gameArr = [];
    let count = 0;

    scoreH3.innerText = count;

    const imgListener = (e, obj) => {
      e.target.src = obj.image;
      gameArr = [...gameArr, obj];
      if (gameArr.length === 2) {
        setTimeout(() => {
          checkIfMatch();
          gameArr = [];
          if (count === arrOfImages?.length / 2) {
            alert("You have won!");
            gameBoard(cardsARR);
          }
        }, 300);
      }
    };

    const checkIfMatch = () => {
      const isMatch = gameArr[0]?.name === gameArr[1]?.name;

      if (!isMatch) {
        gameArr.forEach((i) => {
          i?.elem.setAttribute("src", "images/blank.png");
        });
        return;
      }

      gameArr.forEach((i) => {
        i?.elem.removeEventListener("click", i?.listenerFunction);
      });
      count++;
      scoreH3.innerText = count;
    };

    arrOfImages.forEach((obj, i) => {
      const img = document.createElement("img");
      img.setAttribute("src", "images/blank.png");
      img.setAttribute("data-id", i);
      const listenerFunction = (e) => imgListener(e, listnerData);
      const listnerData = { ...obj, index: i, elem: img, listenerFunction };
      img.addEventListener("click", listenerFunction);
      mainBoard.appendChild(img);
    });
  };

  let cardsARR = [
    {
      name: "fries",
      image: "images/fries.png",
    },
    {
      name: "fries",
      image: "images/fries.png",
    },
    {
      name: "cheeseBurger",
      image: "images/cheeseburger.png",
    },
    {
      name: "cheeseBurger",
      image: "images/cheeseburger.png",
    },
    {
      name: "hotdog",
      image: "images/hotdog.png",
    },
    {
      name: "hotdog",
      image: "images/hotdog.png",
    },
    {
      name: "milkshake",
      image: "images/milkshake.png",
    },
    {
      name: "milkshake",
      image: "images/milkshake.png",
    },
    {
      name: "icecream",
      image: "images/ice-cream.png",
    },
    {
      name: "icecream",
      image: "images/ice-cream.png",
    },
    {
      name: "pizza",
      image: "images/pizza.png",
    },
    {
      name: "pizza",
      image: "images/pizza.png",
    },
  ];
  gameBoard(cardsARR);
})();
