console.log("check");
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
const imagesSet1 = [
  "images/carrotmini.svg/ff0000/ffffff?text=Image+1",
  "https://via.placeholder.com/200/ff0000/ffffff?text=Image+1",
  "https://via.placeholder.com/200/00ff00/ffffff?text=Image+2",
  "https://via.placeholder.com/200/0000ff/ffffff?text=Image+3",
];

const imagesSet2 = [
  "images/carrotmidle.svg/ffff00/000000?text=Image+4",
  "https://via.placeholder.com/200/ff00ff/000000?text=Image+5",
  "https://via.placeholder.com/200/00ffff/000000?text=Image+6",
  "https://via.placeholder.com/200/000000/ffffff?text=Image+7",
];

function changeImage(image) {
  const currentSrc = image.src;

  // Меняем изображение на второе
  const index = imagesSet1.indexOf(currentSrc);
  if (index !== -1) {
    image.src = imagesSet2[index];
  }

  // Увеличиваем изображение
  setTimeout(() => {
    const currentScale = image.style.transform.match(/scale\(([^)]+)\)/);
    const newScale = currentScale ? parseFloat(currentScale[1]) * 2 : 2; // Увеличение в 2 раза

    if (newScale >= 8) {
      // Если масштаб достиг 8, изображение исчезает
      image.style.opacity = 0; // Устанавливаем прозрачность в 0
    } else {
      image.style.transform = `scale(${newScale})`; // Установка нового масштаба
    }
  }, 300); // Задержка для плавного изменения изображения
}
