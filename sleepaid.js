 // Breathing control
    const circle = document.getElementById('circle');
    const text  = document.getElementById('breathing-text');
    let phase = 0, breathInterval;

    function startBreathing() {
      // resume CSS animation
      circle.style.animationPlayState = 'running';
      text.textContent = ['Breathe In','Hold','Breathe Out'][phase];
      clearInterval(breathInterval);
      breathInterval = setInterval(() => {
        phase = (phase + 1) % 3;
        text.textContent = ['Breathe In','Hold','Breathe Out'][phase];
      }, 4000);
    }

    function stopBreathing() {
      circle.style.animationPlayState = 'paused';
      clearInterval(breathInterval);
      text.textContent = 'Paused';
    }

    // Rain sound toggle
    const rainSound = document.getElementById('rain-sound');
    let isPlaying = false;
    function toggleSound(){
      isPlaying ? rainSound.pause() : rainSound.play();
      isPlaying = !isPlaying;
    }

    // Sleep timer
    let timerId = null;
    function setSleepTimer(){
      clearTimeout(timerId);
      const mins = +document.getElementById('timer-select').value;
      if(mins>0){
        timerId = setTimeout(() => {
          rainSound.pause();
          isPlaying = false;
          alert('Sleep timer ended, sound stopped.');
        }, mins*60000);
      }
    }

    // Light/Dark toggle
    function toggleMode(){
      document.body.classList.toggle('dark');
      document.body.classList.toggle('light');
    }
