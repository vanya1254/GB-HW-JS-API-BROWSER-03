const URL_QUERRIES = {
  CLIENT_ID: `?client_id=${config.ACCESS_KEY}`,
};
let likeContEl = document.querySelector(".like");
let viewedImgEl = document.querySelector(".viewed-img");

const updatePhotoEl = (photoData) => {
  const imgEl = document.querySelector("#image");
  imgEl.src = photoData.urls.small;
  imgEl.alt = photoData.alt_description;
  imgEl.dataset.id = photoData.id;

  const photographerImgEl = document.querySelector(".photographer-img");
  photographerImgEl.src = photoData.user.profile_image.small;
  photographerImgEl.alt = `avatar of ${photoData.user.name}`;

  const photographerEl = document.querySelector("#photographer");
  photographerEl.innerHTML = photoData.user.name;

  if (photoData.location.name === null) {
    const locationEl = document.querySelector(".location");
    locationEl.style.display = "none";
  }

  const locationPEl = document.querySelector(".location-p");
  locationPEl.innerHTML = photoData.location.name;

  const likeBtnEl = document.querySelector("#like-button");
  if (photoData.liked_by_user) {
    likeBtnEl.innerHTML = "Dislike";
  } else {
    likeBtnEl.innerHTML = "Like";
  }
  const likesEl = document.querySelector("#likes-count");
  likesEl.innerHTML = photoData.likes;
};

///main async

const getInitialRndPhoto = async () => {
  const data = await fetchRndPhoto();

  updatePhotoEl(data);
  storage.VIEWED_PHOTOS.push(data);
  updateLSFromStorage();
};
getInitialRndPhoto();

///viewed render

const updateViewedImgEl = () => {
  [...storage.VIEWED_PHOTOS].forEach((photoData) => {
    let img = document.createElement("img");
    img.src = photoData.urls.small;
    img.dataset.id = photoData.id;

    viewedImgEl.appendChild(img);
  });
};
updateViewedImgEl();

/////likes

const updateLikedImgData = (photoData, action) => {
  photoData.liked_by_user = action;
  action ? (photoData.likes += 1) : (photoData.likes -= 1);
};

likeContEl.addEventListener("click", ({ target }) => {
  if (target.id === "like-button") {
    const curPhotoEl = document.querySelector("#image");
    let curPhotoData = [...storage.VIEWED_PHOTOS].find(
      (photoData) => photoData.id === curPhotoEl.dataset.id
    );

    if (!curPhotoData.liked_by_user) {
      updateLikedImgData(curPhotoData, true);
      target.innerHTML = "Dislike";
    } else {
      updateLikedImgData(curPhotoData, false);
      target.innerHTML = "Like";
    }

    let counterLikes = document.querySelector("#likes-count");
    counterLikes.innerHTML = curPhotoData.likes;

    updateLSFromStorage();
  }
});

///viewed

viewedImgEl.addEventListener("click", ({ target }) => {
  if (target.tagName === "IMG") {
    const clickedImg = [...storage.VIEWED_PHOTOS].find(
      (photoData) => photoData.id === target.dataset.id
    );
    updatePhotoEl(clickedImg);
  }
});
