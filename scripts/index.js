const popup = document.querySelector('.popup');
const profile = document.querySelector('.profile');

const popupEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');

const profileName = profile.querySelector('.profile__name');
const profileAbout = profile.querySelector('.profile__about');

let formElement = document.querySelector ('.popup__form');

let nameInput = formElement.querySelector('.popup__input_value_name');
let aboutInput = formElement.querySelector('.popup__input_value_about');

// Открытие popup
function openEdit() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
};

// Закрытие popup
function closeEdit() {
  popup.classList.remove('popup_opened')
};

// Закрытие popup при нажатии на любое место, кроме самого popup
function closePopup(e) {
  if (e.target === e.currentTarget) {
      popup.classList.remove('popup_opened');
  }
};

// Функция submit
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  closeEdit();
}

popupEditButton.addEventListener('click', openEdit);
popupCloseButton.addEventListener('click', closeEdit);
popup.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
