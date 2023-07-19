window.addEventListener('DOMContentLoaded', (event) => {
  const searchInput = document.getElementById('search');
  const searchButton = document.querySelector('.search');
  const cards = document.getElementsByClassName('card');
  const swooshAudio = document.getElementById('swoosh-audio');
  const audio = document.getElementById('audio');
  const playButton = document.querySelector('.play-button');
  
  
  
  function filterCards() {
    const searchText = searchInput.value.toLowerCase();

    Array.from(cards).forEach(card => {
      const title = card.getElementsByTagName('h2')[0].innerText.toLowerCase();

      if (searchText && title.includes(searchText)) {
        card.style.display = 'block';
      } else if (!searchText) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  searchButton.addEventListener('click', () => {
    filterCards();
    playSwooshSound();
  });

  function playSwooshSound() {
    swooshAudio.currentTime = 0;
    swooshAudio.play();
  }

  searchInput.addEventListener('input', filterCards);
});






        

    function toggleAudio() {
            if (audio.paused) {
                audio.play();
                playButton.style.backgroundColor = 'red';
            } else {
                audio.pause();
                playButton.style.backgroundColor = 'green';
            }
    }






  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    event.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = event;
    // Optionally, update the UI to notify the user that they can add the app to their home screen
    // Show a button or other user interface element
    showAddToHomeScreenButton();
  });
  function showAddToHomeScreenButton() {
    // Show your "Add to Home" button or other user interface element
    const addToHomeButton = document.getElementById('add-to-home-button');
    addToHomeButton.style.display = 'block';
    addToHomeButton.addEventListener('click', addToHomeScreen);
  }
  function addToHomeScreen() {
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      // Reset the deferred prompt variable
      deferredPrompt = null;
    });
  }
