
const formContainer = document.getElementById('form-container');
const gameplayScreen = document.querySelector('.gameplay-screen');

//page-2 is hidden
gameplayScreen.style.display = 'none';

// event listener
formContainer.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // page-1 is hidden
    gameplayScreen.style.display = 'flex';
    formContainer.style.display = 'none';
});
