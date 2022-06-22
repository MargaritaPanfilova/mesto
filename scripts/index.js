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

// Переменные редактирования карточки
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
function handleProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupEditProfile);
}

// Лайк карточки
function handleLikeElement(evt) {
  evt.target.classList.toggle('element__like-button_active');
}

// Удаление карточки
function handleDeleteElement(evt) {
  evt.target.closest('.element').remove();
}

//Добавление element в html
function prependToSection (title, link) {
  const newElement = createElement({name:title, link:link});
  elementsSection.prepend(newElement);
}

// Добавление нового элемента
function handleAddElement(evt) {
  evt.preventDefault();
  prependToSection(titleInput.value, urlInput.value);
  closePopup(popupAddElement);
  addForm.reset();
}

// Открытие popup photo
function handleOpenPhoto (image, caption) {
  popupImage.src = image;
  popupImage.alt = caption;
  popupCaption.textContent = caption;
  openPopup(popupPhoto);
}

// Создание элемента
function createElement(item) {
  const element = templateElement.querySelector('.element').cloneNode(true);
  const elementImage = element.querySelector('.element__image');
  const elementTitle = element.querySelector('.element__title');
  const elementLike = element.querySelector('.element__like-button');
  const elementDelete = element.querySelector('.element__delete-button');
  elementImage.src = item.link;
  elementImage.alt = item.name;
  elementTitle.textContent = item.name;
  elementLike.addEventListener('click', handleLikeElement);
  elementDelete.addEventListener('click', handleDeleteElement);
  elementImage.addEventListener('click', () => handleOpenPhoto(item.link, item.name));
  return element;
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
formEdit.addEventListener('submit', handleProfileSubmit);
addButton.addEventListener('click', () => openPopup(popupAddElement));
addCloseButton.addEventListener('click', () => closePopup(popupAddElement));
addForm.addEventListener('submit', handleAddElement);
photoCloseButton.addEventListener('click', () => closePopup(popupPhoto));

