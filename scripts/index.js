const popup = document.querySelector('.popup');
const profile = document.querySelector('.profile');

const popupEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');

const profileName = profile.querySelector('.profile__name');
const profileAbout = profile.querySelector('.profile__about');

const inputName = popup.querySelector('.popup__input_value_name');
const inputAbout = popup.querySelector('.popup__input_value_about');

// Функция открытия popup
popupEditButton.addEventListener('click', function() {
  popup.classList.remove('popup_hidden');
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
});

// Функция закрытия popup
popupCloseButton.addEventListener('click', function() {
  popup.classList.add('popup_hidden')
});

// Функция закрытия popup при нажатии на любое место, кроме самого popup
popup.addEventListener('click', function(e) {
  if (e.target === e.currentTarget) {
      popup.classList.add('popup_hidden');
  }
});
