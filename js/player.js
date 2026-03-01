document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".play-btn");
  const audios = document.querySelectorAll(".beat-audio");

  let currentAudio = null;

  buttons.forEach(function (button, index) {

    const audio = audios[index];

    button.addEventListener("click", function () {

      if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        document.querySelectorAll(".play-btn").forEach(btn => {
          btn.textContent = "▶ Play";
        });
      }

      if (audio.paused) {
        audio.play();
        button.textContent = "⏸ Pause";
        currentAudio = audio;
      } else {
        audio.pause();
        button.textContent = "▶ Play";
        currentAudio = null;
      }

    });

  });

});
