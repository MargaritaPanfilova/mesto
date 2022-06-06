const button = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');

function closePopupOnEscape(e) {
    if (e.code === 'KeyEscape') {
        closePopup()
    }
    console.log(1);
}

function openPopup() {
    popup.classList.remove('popup_hidden');
    document.addEventListener('keypress', closePopupOnEscape);
}

function closePopup() {
    popup.classList.add('popup_hidden');
    document.removeEventListener('keypress', closePopupOnEscape);
}

button.addEventListener('click', function() {
    openPopup();
});

popupCloseButton.addEventListener('click', function() {
    closePopup();
});

popup.addEventListener('click', function(e) {
    if (e.target === e.currentTarget) {
        popup.classList.add('popup_hidden');
    }
});