const updateConfigFromLS = () => {
  if (localStorage.getItem("VIEWED_PHOTOS")) {
    config.VIEWED_PHOTOS = JSON.parse(localStorage.getItem("VIEWED_PHOTOS"));
  } else {
    localStorage.setItem("VIEWED_PHOTOS", JSON.stringify(config.VIEWED_PHOTOS));
  }
};
updateConfigFromLS();

const updateLSFromConfig = () => {
  localStorage.setItem("VIEWED_PHOTOS", JSON.stringify(config.VIEWED_PHOTOS));
};
