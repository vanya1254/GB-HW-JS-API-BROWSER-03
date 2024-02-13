const fetchRndPhoto = async () => {
  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/random${URL_QUERRIES.CLIENT_ID}`
    );

    curPhotoData = res.json();

    return curPhotoData;
  } catch (error) {
    throw error;
  }
};
