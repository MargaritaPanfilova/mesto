const popup = document.querySelector('.popup');
const profile = document.querySelector('.profile');

const popupEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');

const profileName = profile.querySelector('.profile__name');
const profileProfession = profile.querySelector('.profile__profession');

const inputName = popup.querySelector('.popup__input_value_name');
const inputProfession = popup.querySelector('.popup__input_value_profession');

// Функция открытия popup
popupEditButton.addEventListener('click', function() {
  popup.classList.remove('popup_hidden');
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
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
