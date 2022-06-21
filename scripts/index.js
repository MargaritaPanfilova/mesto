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

// Доступ к DOM элементам profile и popup
const profile = document.querySelector('.profile');
const popupAuthor = document.querySelector('#popup-author');
const popupElement = document.querySelector('#popup-element');
const popupPhoto = document.querySelector('#popup-photo');

// Доступ к кнопкам edit, close, add
const profileEditButton = profile.querySelector('.profile__edit-button');
const profileAddButton = profile.querySelector('.profile__add-button');
const closeButtonAuthor = popupAuthor.querySelector('#popup__close-button-author');
const closeButtonElement = popupElement.querySelector('#popup__close-button-element');
const closeButtonPhoto = popupPhoto.querySelector('#popup__close-button-photo');

// Доступ к информации о пользователе
const profileName = profile.querySelector('.profile__name');
const profileAbout = profile.querySelector('.profile__about');

// Доступ к элементу и его названию в popup
const popupImage = popupPhoto.querySelector('.popup__image');
const popupCaption = popupPhoto.querySelector('.popup__caption');

// Доступ к полям ввода
const popupForm = popupAuthor.querySelector ('.popup__form');
const nameInput = popupAuthor.querySelector('.popup__input_value_name');
const aboutInput = popupAuthor.querySelector('.popup__input_value_about');
const popupFormElement = popupElement.querySelector('.popup__form-element');
const titleInput = popupElement.querySelector('.popup__input_value_title');
const titleUrl = popupElement.querySelector('.popup__input_value_url');

// Доступ к секции elements
const elements = document.querySelector('.elements');

// Доступ к шаблону элемента
const elementTemplate = document.querySelector('.element-template');

// Открытие всех popup
function openPopup(popup) {
  popup.classList.remove('popup_opened');
}

// Закрытие всех popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Открытие popup profile
function openEditProfile() {
  openPopup(popupAuthor);
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
};

// Добавление элемента и закрытие popup photo
function togglePopupPhoto(evt) {
  openPopup(popupPhoto);
  popupImage.src = evt.target.style.backgroundImage
    .slice(4, -1)
    .replace(/(url\(|\)|")/g, "");
  popupCaption.innerText =
    evt.target.parentNode.querySelector('.element__title').innerText;
  popupImage.alt = popupCaption.innerText;
}

// Создание элемента
function createElement(item) {
  const elementItem = elementTemplate.querySelector('.element').cloneNode(true);
  elementItem.querySelector('.element__title').innerText = item.name;
  elementItem.querySelector('.element__image').style.backgroundImage = `url(${item.link})`;
  elementItem
    .querySelector('.element__delete-button')
    .addEventListener('click', () => deleteItem(elementItem));
  elementItem
    .querySelector('.element__like-button')
    .addEventListener('click', (e) =>
      e.target.classList.toggle('.element__like-button_active'));
  elementItem
    .querySelector('.element__image')
    .addEventListener('click', togglePopupPhoto);

  return elementItem;
}

// Отрисовка элемента
function renderElement() {
  const elementList = initialElement.map((item) => {
    return createCard(item);
  });
  elements.append(...elementList);
}

// Удаление элемента
function deleteItem(item) {
  item.remove()
}

// Функция submit профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  closePopup(popupAuthor);
}

// Функция submit карточки
function handleImageFormSubmit(evt) {
  evt.preventDefault();
  const element = createElement({
    name: titleInput.value,
    link: urlInput.value,
  });
  elements.prepend(element);
  closePopup(popupElement);
  popupFormElement.reset();
}

renderElement();

profileEditButton.addEventListener('click', openEditProfile);
profileAddButton.addEventListener('click', () => openPopup(popupElement));
closeButtonAuthor.addEventListener('click', () => closePopup(popupAuthor));
closeButtonElement.addEventListener('click', () => closePopup(popupElement));
closeButtonPhoto.addEventListener('click', () => closePopup(popupPhoto));
popupForm.addEventListener('submit', handleProfileFormSubmit);
popupFormElement.addEventListener('submit', handleImageFormSubmit);
