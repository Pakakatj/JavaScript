document.addEventListener("DOMContentLoaded", () => {
  scaleCapusta();
  scaleCarrot();
  scaleTikvas();
  changeRoom();
  svet();
  vkl();
  draggable();
  moveBubble();
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
const clouds = document.querySelectorAll(".cloud");
clouds.forEach((cloud) => {
  const randomDuration = Math.random() * (20 - 10) + 10; // Генерируем случайную продолжительность
  cloud.style.animationDuration = `${randomDuration}s`; // Устанавливаем случайную длительность анимации
});
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
  let matr = document.querySelector("#matr");
  let yula = document.querySelector("#yula");
  let teddy = document.querySelector("#teddy");
  let milk = document.querySelector("#milk");
  let eggs = document.querySelector("#eggs");
  let cherry = document.querySelector("#cherry");
  let sugar = document.querySelector("#sugar");
  let myka = document.querySelector("#myka");
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

        drag.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        drag.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest(".droppable");
        if (currentDroppable != droppableBelow) {
          currentDroppable = droppableBelow;
          if (currentDroppable) {
            // null если мы не над droppable сейчас, во время этого события
            // (например, только что покинули droppable)
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
      drag.style.trasition = "opacity 0.5s ease";

      setTimeout(() => {
        drag.style.display = "none";
      }, 501);
    }

    drag.ondragstart = function () {
      return false;
    };
  });
}
// Функция для перемещения пузырька
function moveBubble() {
  const bubbles = document.querySelectorAll(".bubble");

  bubbles.forEach((bubble) => {
    const randomX = Math.random() * (window.innerWidth - 20); // 100 - ширина пузырька
    const randomY = Math.random() * (window.innerHeight - 20); // 100 - высота пузырька
    bubble.style.transform = `translate(${randomX}vw, ${randomY}vw)`;

    // Анимация "плавания" пузырька
    setInterval(() => {
      bubble.style.animation = "float 2s ease-in-out infinite"; // Пузырь плавает
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
const images = document.querySelectorAll(".screen img");
let currentIndex = 0;

document.getElementById("changeImageBtn").addEventListener("click", () => {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
});
const drawArea = document.getElementById("drawArea");
const clearBtn = document.getElementById("clearBtn");

let isDrawing = false;
let lastX = 0;
let lastY = 0;

drawArea.addEventListener("mousedown", (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});

drawArea.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;

  const drawnLine = document.createElement("div");
  drawnLine.classList.add("drawn");

  // Получаем текущие координаты мыши
  const currentX = e.offsetX;
  const currentY = e.offsetY;

  // Находим ширину и высоту линии
  const width = Math.abs(currentX - lastX);
  const height = Math.abs(currentY - lastY);

  // Настраиваем стиль линии
  drawnLine.style.width = `${width}vw`;
  drawnLine.style.height = "4vw"; // Толщина линии
  drawnLine.style.left = `${Math.min(currentX, lastX)}vw`;
  drawnLine.style.top = `${Math.min(currentY, lastY)}vw`;
  drawnLine.style.transform = `rotate(${
    Math.atan2(currentY - lastY, currentX - lastX) * (180 / Math.PI)
  }deg)`;

  drawArea.appendChild(drawnLine);

  lastX = currentX;
  lastY = currentY;
});

drawArea.addEventListener("mouseup", () => {
  isDrawing = false;
  drawArea.querySelectorAll(".drawn").forEach((line) => {
    line.style.pointerEvents = "auto"; // Обеспечиваем возможность клика на линии
  });
});
