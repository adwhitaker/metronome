(() => {
  const playButton = document.getElementById("play");
  const stopButton = document.getElementById("stop");
  let state = {
    isPlaying: false,
    interval: 1000
  };
  let metronomeInterval;

  const calculateInterval = () => {
    return state.interval;
  };

  const play = () => {
    if (state.isPlaying) return;
    state = Object.assign(state, { isPlaying: true });

    const audio = new Audio('./sounds/beep.mp3');
    const interval = calculateInterval();

    metronomeInterval = setInterval(() => {
      audio.play();
    }, interval);
  };

  const stop = () => {
    state = Object.assign(state, { isPlaying: false });
    clearInterval(metronomeInterval);
  };

  playButton?.addEventListener('click', play);
  stopButton?.addEventListener('click', stop);
})();
