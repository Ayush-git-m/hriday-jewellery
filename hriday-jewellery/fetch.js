async function getImageUrl() {
  try {
    const res = await fetch('https://photos.app.goo.gl/oR24cjqfPMVzAaDMA');
    const text = await res.text();
    const match = text.match(/<meta property="og:image" content="(.*?)"/);
    if (match) {
      console.log(match[1]);
    } else {
      console.log('og:image not found');
    }
  } catch (err) {
    console.error(err);
  }
}
getImageUrl();
