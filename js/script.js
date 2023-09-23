console.log('!')

const reviewButton = document.getElementById('popupOpenBtn');
const popupCrossButton  = document.getElementsByClassName('popup-window-cross')[0];
const popup = document.getElementById('popup');

const popupSwitch = () => popup.classList.toggle('popup-close');

reviewButton.addEventListener('click', popupSwitch)
popupCrossButton.addEventListener('click', popupSwitch)