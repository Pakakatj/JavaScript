document.addEventListener("DOMContentLoaded", () => {
  scaleCapusta();
  scaleCarrot();
  scaleTikvas();
  changeRoom();
  svet();
  vkl();
  draggable();
  moveBubble();
  Changeim();
  clouds();
  setInterval(() => {
    pirog();
  }, 1000);
  drawing();
});
function changeRoom() {
  let home = document.querySelector("#home");
  let cherdak = document.querySelector("#cherdak");
  let cherdakRoom = document.querySelector(".cherdak");
  let returnHome = document.querySelectorAll(".domik");
  let komnatas = document.querySelectorAll(".komnata");
  let bedroom = document.querySelector("#bedroomm");
  let BedRoom = document.querySelector(".bedroom");
  let bathroom = document.querySelector("#bathroomm");
  let BathRoom = document.querySelector(".bathroom");
  let livingroom = document.querySelector("#livingroomm");
  let LivingRoom = document.querySelector(".livingroom");
  let kitchen = document.querySelector("#kitchenn");
  let KitchenRoom = document.querySelector(".kitchen");
  returnHome.forEach((domik) => {
    domik.addEventListener("click", () => {
      komnatas.forEach((komnata) => {
        komnata.classList.add("hidden");
      });
      home.classList.remove("hidden");
    });
  });

  cherdakRoom.addEventListener("click", () => {
    home.classList.add("hidden");
    cherdak.classList.remove("hidden");
  });

  BedRoom.addEventListener("click", () => {
    home.classList.add("hidden");
    bedroomm.classList.remove("hidden");
  });

  BathRoom.addEventListener("click", () => {
    home.classList.add("hidden");
    bathroomm.classList.remove("hidden");
  });

  LivingRoom.addEventListener("click", () => {
    home.classList.add("hidden");
    livingroomm.classList.remove("hidden");
  });

  KitchenRoom.addEventListener("click", () => {
    home.classList.add("hidden");
    kitchenn.classList.remove("hidden");
  });
}
function scaleCapusta() {
  const kapustas = document.querySelectorAll(".kapusta");

  kapustas.forEach((kapusta) => {
    kapusta.addEventListener("click", () => {
      enlarge(kapusta);
    });
  });
}
function enlarge(image) {
  const currentScale = image.style.transform.match(/scale\(([^)]+)\)/);
  const newScale = currentScale ? parseFloat(currentScale[1]) * 2 : 2; // Увеличение в 2 раза
  if (newScale >= 8) {
    // Если масштаб достиг 8, изображение исчезает
    image.style.opacity = 0; // Устанавливаем прозрачность в 0
  } else {
    image.style.transform = `scale(${newScale})`; // Установка нового масштаба
  }
}
function scaleCarrot() {
  const carrots = document.querySelectorAll(".carrot");

  carrots.forEach((carrot) => {
    carrot.addEventListener("click", () => {
      if (carrot.classList.contains("mini")) {
        carrot.classList.add("midi");
        carrot.classList.remove("mini");
      } else if (carrot.classList.contains("midi")) {
        carrot.classList.add("maxi");
        carrot.classList.remove("midi");
      } else if (carrot.classList.contains("maxi")) {
        carrot.style.opacity = 0;
      }
    });
  });
}
function scaleTikvas() {
  const pumpkin = document.querySelectorAll(".pumpkin");

  pumpkin.forEach((pumpkin) => {
    pumpkin.addEventListener("click", () => {
      enlarge(pumpkin);
    });
  });
}
function enlarge(image) {
  const currentScale = image.style.transform.match(/scale\(([^)]+)\)/);
  const newScale = currentScale ? parseFloat(currentScale[1]) * 2 : 2; // Увеличение в 2 раза

  if (newScale >= 8) {
    // Если масштаб достиг 8, изображение исчезает
    image.style.opacity = 0; // Устанавливаем прозрачность в 0
    setTimeout(() => {
      image.style.cssText = "position: relative; z-index: -1";
    }, 500);
  } else {
    image.style.transform = `scale(${newScale})`; // Установка нового масштаба
  }
}
function clouds() {
  const clouds = document.querySelectorAll(".cloud");
  clouds.forEach((cloud) => {
    const randomDuration = Math.random() * (20 - 10) + 10; // Генерируем случайную продолжительность
    cloud.style.animationDuration = `${randomDuration}s`; // Устанавливаем случайную длительность анимации
  });
}

function svet() {
  let lampa = document.querySelector(".svet");
  const attic = document.querySelector(".attic");
  lampa.addEventListener("click", () => {
    attic.style.cssText = "background-image: url(images/attic2.svg)";
  });
}
function vkl() {
  let lampa2 = document.querySelector(".vkl");
  const bedroomm = document.querySelector(".bedroomm");
  lampa2.addEventListener("click", () => {
    bedroomm.style.cssText = "background-image: url(images/bedroomm2.svg)";
  });
}
function draggable() {
  let currentDroppable = null;
  let molot = document.querySelector("#molot");
  let matr = document.querySelector("#matr");
  let yula = document.querySelector("#yula");
  let teddy = document.querySelector("#teddy");
  let milk = document.querySelector("#milk");
  let eggs = document.querySelector("#eggs");
  let cherry = document.querySelector("#cherry");
  let sugar = document.querySelector("#sugar");
  let myka = document.querySelector("#myka");
  let pie = document.querySelector("#pie");
  let draggable = document.querySelectorAll(".drag");

  draggable.forEach((drag) => {
    drag.onmousedown = function (event) {
      let shiftX = event.clientX - drag.getBoundingClientRect().left;
      let shiftY = event.clientY - drag.getBoundingClientRect().top;

      drag.style.position = "absolute";
      drag.style.zIndex = 1000;
      document.body.append(drag);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        drag.style.left = pageX - shiftX + "px";
        drag.style.top = pageY - shiftY + "px";
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        // Скрываем элемент для получения элемента под курсором
        drag.style.display = "none";
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        drag.style.display = "";

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest(".droppable");
        if (currentDroppable != droppableBelow) {
          currentDroppable = droppableBelow;
          if (currentDroppable) {
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener("mousemove", onMouseMove);

      drag.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseMove);
        drag.onmouseup = null;
      };
    };

    function enterDroppable(elem) {
      drag.style.opacity = "0";
      drag.style.transition = "opacity 0.5s ease";
      drag.classList.add("dropped");

      setTimeout(() => {
        drag.style.display = "none";
      }, 501);
    }

    drag.ondragstart = function () {
      return false;
    };
  });
}

// function pirog() {
//   let milk = document.querySelector("#milk").classList.contains("true");
//   let eggs = document.querySelector("#eggs").classList.contains("true");
//   let cherry = document.querySelector("#cherry").classList.contains("true");
//   let sugar = document.querySelector("#sugar").classList.contains("true");
//   let myka = document.querySelector("#myka").classList.contains("true");
//   let miska = document.querySelector("#miska");

//   console.log(milk);

//   if (milk && eggs && cherry && sugar && myka) {
//     miska.style.backgroundImage = "url('images/pie.svg')";
//   }
// }
// Функция для перемещения пузырька
function moveBubble() {
  const bubbles = document.querySelectorAll("#bubble");

  bubbles.forEach((bubble) => {
    const randomX = Math.random() * (window.innerWidth / 20); // 100 - ширина пузырька
    const randomY = Math.random() * (window.innerHeight / 20); // 100 - высота пузырька
    // bubble.style.cssText = `transform: translate(${randomX}vw, ${randomY}vw)`;

    // Анимация "плавания" пузырька
    setInterval(() => {
      bubble.style.animation = "float2 3s ease-in-out infinite"; // Пузырь плавает
      moveBubble();
    }, 2000);

    // Обработчик нажатия на пузырь
    bubble.addEventListener("click", () => {
      bubble.style.transition = "transform 0.3s ease-in-out";
      bubble.src = "images/bum.svg";
      setTimeout(() => {
        bubble.style.display = "none"; // Лопаем пузырь
      }, 400);
    });
  });
}

function Changeim() {
  const images = document.querySelectorAll(".screen img");
  let currentIndex = 0;

  document.getElementById("changeImageBtn").addEventListener("click", () => {
    images[currentIndex].classList.remove("active");
    currentIndex++;
    images[currentIndex].classList.add("active");

    if (currentIndex % 6 == 0) {
      currentIndex = 0;
    }
  });
}
function drawing() {
  var canvas = document.getElementById("drawingArea");
  var ctx = canvas.getContext("2d");

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  }

  function mouseMove(evt) {
    var mousePos = getMousePos(canvas, evt);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
  }

  canvas.addEventListener("mousedown", function (evt) {
    var mousePos = getMousePos(canvas, evt);
    ctx.beginPath();
    ctx.moveTo(mousePos.x, mousePos.y);
    evt.preventDefault();
    canvas.addEventListener("mousemove", mouseMove, false);
  });

  canvas.addEventListener(
    "mouseup",
    function () {
      canvas.removeEventListener("mousemove", mouseMove, false);
    },
    false
  );

  document.getElementById("clearButton").addEventListener(
    "click",
    function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
    false
  );

  var colors = [
    "red",
    "blue",
    "green",
    "purple",
    "yellow",
    "orange",
    "pink",
    "black",
    "white",
    "ebebeb",
  ];
  var size = [1, 3, 5, 10, 15, 20];
  var sizeNames = ["default", "three", "five", "ten", "fifteen", "twenty"];

  function listener(i) {
    document.getElementById(colors[i]).addEventListener(
      "click",
      function () {
        ctx.strokeStyle = colors[i];
      },
      false
    );
  }

  function fontSizes(i) {
    document.getElementById(sizeNames[i]).addEventListener(
      "click",
      function () {
        ctx.setLineWidth(size[i]);
      },
      false
    );
  }

  // for (var i = 0; i < colors.length; i++) {
  //   listener(i);
  // }

  // for (var i = 0; i < size.length; i++) {
  //   fontSizes(i);
  // }
}
