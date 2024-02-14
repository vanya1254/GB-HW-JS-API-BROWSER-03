const storage = { VIEWED_PHOTOS: [], KEY_LOCAL_STORAGE: "VIEWED_PHOTOS" };

const updateStorageFromLS = () => {
  if (localStorage.getItem(storage.KEY_LOCAL_STORAGE)) {
    storage.VIEWED_PHOTOS = JSON.parse(
      localStorage.getItem(storage.KEY_LOCAL_STORAGE)
    );
  } else {
    localStorage.setItem(
      storage.KEY_LOCAL_STORAGE,
      JSON.stringify(storage.VIEWED_PHOTOS)
    );
  }
};
updateStorageFromLS();

const updateLSFromStorage = () => {
  localStorage.setItem(
    storage.KEY_LOCAL_STORAGE,
    JSON.stringify(storage.VIEWED_PHOTOS)
  );
};
