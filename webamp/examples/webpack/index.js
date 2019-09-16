import Webamp from "webamp"; // eslint-disable-line import/no-unresolved

new Webamp({
  initialTracks: [
    {
      metaData: {
        artist: "DJ Mike Llama",
        title: "Llama Whippin' Intro",
      },
      url:
        "https://cdn.jsdelivr.net/gh/captbaritone/webamp@43434d82cfe0e37286dbbe0666072dc3190a83bc/mp3/llama-2.91.mp3",
      duration: 5.322286,
    },
  ],
}).renderWhenReady(document.getElementById("app"));
