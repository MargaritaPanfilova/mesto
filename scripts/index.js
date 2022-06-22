//Набор карточек "из коробки"

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupAddElement = document.querySelector('.popup_element');
const addButton = document.querySelector('.profile__add-button');
const addCloseButton = document.querySelector('.popup__close-button-element');
const addForm = document.querySelector('.popup__form_add');
const titleInput = addForm.querySelector('.popup__input_value_title');
const urlInput = addForm.querySelector('.popup__input_value_url');

const popupEditProfile = document.querySelector('.popup_profile');
const popupEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button-profile');
const formEdit = document.querySelector('.popup__form_edit');
const nameInput = formEdit.querySelector('.popup__input_value_name');
const aboutInput = formEdit.querySelector('.popup__input_value_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const popupPhoto = document.querySelector('.popup_photo');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const photoCloseButton = document.querySelector('.popup__close-button-photo');

const templateElement = document.querySelector('.element-template').content;
const elements = document.querySelector('.elements');

// Открытие всех popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Закрытие всех popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Открытие popup profile
function openEdit() {
  openPopup(popupEditProfile);
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

