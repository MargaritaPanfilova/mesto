//Массив карточек

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

// Переменные редактирования профиля
const popupEditProfile = document.querySelector('.popup_profile');
const popupEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button-profile');
const formEdit = document.querySelector('.popup__form_edit');
const nameInput = formEdit.querySelector('.popup__input_value_name');
const aboutInput = formEdit.querySelector('.popup__input_value_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

// Переменные добавления карточки
const popupAddElement = document.querySelector('.popup_element');
const addButton = document.querySelector('.profile__add-button');
const addCloseButton = document.querySelector('.popup__close-button-element');
const addForm = document.querySelector('.popup__form_add');
const titleInput = addForm.querySelector('.popup__input_value_title');
const urlInput = addForm.querySelector('.popup__input_value_url');

// Переменные popup с картинкой
const popupPhoto = document.querySelector('.popup_photo');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const photoCloseButton = document.querySelector('.popup__close-button-photo');

// Переменные element template
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

// Сохранение профиля
function handlerProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupEditProfile);
}

// Лайк карточки
function handlerLikeElement(evt) {
  evt.target.classList.toggle('element__like-button_active');
}

// Удаление карточки
function handlerDeleteElement(evt) {
  evt.target.closest('.element').remove();
}

//Добавление element в html
function prependToSection (title, link) {
  const newElement = createElement({name:title, link:link});
  newElement.prepend;
}

// Добавление нового элемента
function handlerAddElement(evt) {
  evt.preventDefault();
  prependToSection(titleInput.value, urlInput.value);
  closePopup(popupAddElement);
  addForm.reset();
}

// Открытие popup photo
function handlerOpenPhoto (image, caption) {
  popupImage.src = image;
  popupImage.alt = caption;
  popupCaption.textContent = caption;
  openPopup(popupPhoto);
}

// Создание элемента
function createElement(item) {
  const elementItem = templateElement.querySelector('.element').cloneNode(true);
  const elementImage = elementItem.querySelector('.element__image');
  const elementTitle = elementItem.querySelector('.element__title');
  const elementLike = elementItem.querySelector('.element__like-button');
  const elementDelete = elementItem.querySelector('.element__delete-button');
  elementImage.src = item.link;
  elementImage.alt = item.name;
  elementTitle.textContent = item.name;
  elementLike.addEventListener('click', handlerLikeElement);
  elementDelete.addEventListener('click', handlerDeleteElement);
  elementImage.addEventListener('click', () => handleOpenPhoto(item.link, item.name));
  return elementItem;
}

// Отрисовка элемента
function renderElement() {
  const elementList = initialCards.map((item) => {
    return createElement(item);
  });
  elements.append(...elementList);
}

renderElement();

popupEditButton.addEventListener('click', openEdit);
popupCloseButton.addEventListener('click', () => closePopup(popupEditProfile));
formEdit.addEventListener('submit', handlerProfileSubmit);
addButton.addEventListener('click', () => openPopup(popupAddElement));
addCloseButton.addEventListener('click', () => closePopup(popupAddElement));
addForm.addEventListener('submit', handlerAddElement);
photoCloseButton.addEventListener('click', () => closePopup(popupPhoto));


