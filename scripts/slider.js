(() => {
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  if (storage.VIEWED_PHOTOS.length > 0) {
    prev.style.visibility = "visible";
    next.style.visibility = "visible";
  } else {
    prev.style.visibility = "hidden";
    next.style.visibility = "hidden";
  }
})();

const sliderEl = document.querySelector(".slider");
const viewedImgsEl = document.querySelector(".viewed-img");
const IMG_SIZE = 400;

let startX = 0;

sliderEl.addEventListener("click", ({ target }) => {
  if (target.closest(".prev")) {
    viewedImgsEl.scrollLeft += startX - IMG_SIZE;
  }

  if (target.closest(".next")) {
    viewedImgsEl.scrollLeft -= startX - IMG_SIZE;
  }
});
