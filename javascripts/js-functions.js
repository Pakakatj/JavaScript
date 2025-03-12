document.addEventListener("DOMContentLoaded", () => {
  scaleCapusta();
  scaleCarrot();
  scaleTikvas();
  changeRoom();
  svet();
  vkl();
  // putInBox();
  // createBubble();
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
function putInBox() {
  const yula = document.getElementById("yula");
  yula.style.opacity = "0"; // Устанавливаем непрозрачность юлы в 0, чтобы она исчезла
  setTimeout(() => {
    yula.style.display = "none"; // Скрываем юлу после того, как она исчезла
  }, 300); // Задержка, равная времени перехода
}
// const bubbleImages = ["b.svg", "b.svg", "b.svg"]; // Замените на свои изображения
// const popImage = ""; // Изображение лопнувшего пузыря
// const bubbleCount = 10; // Количество пузырей

// function createBubble() {
//   const bubble = document.createElement("img");
//   bubble.src = bubbleImages[Math.floor(Math.random() * bubbleImages.length)];
//   bubble.className = "bubble";
//   bubble.style.width = "10vw"; // Размер пузыря
//   bubble.style.height = "10vw"; // Размер пузыря
//   bubble.style.top = `${Math.random() * window.innerHeight}vw`;
//   bubble.style.left = `${Math.random() * window.innerWidth}vw`;
//   document.body.appendChild(bubble);

//   // Анимация движения
//   setInterval(() => {
//     const x = Math.random() * 10 - 5; // Случайное смещение по X
//     const y = Math.random() * 10 - 5; // Случайное смещение по Y
//     bubble.style.transform = `translate(${x}vw, ${y}vw)`;
//   }, 1000);

//   // Обработка щелчка по пузырю
//   bubble.addEventListener("click", () => {
//     bubble.src = popImage; // Меняем изображение на лопнувший пузырь
//     setTimeout(() => {
//       bubble.remove(); // Удаляем пузырь через 500 мс
//     }, 500);
//   });
// }

// // Генерируем пузыри
// for (let i = 0; i < bubbleCount; i++) {
//   createBubble();
// }
