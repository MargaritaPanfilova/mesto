// Переменные редактирования профиля
const popupEditProfile = document.querySelector('.popup_profile');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloseButton = document.querySelector('.popup__close-button-profile');
const formEdit = document.querySelector('.popup__form_edit');
const nameInput = formEdit.querySelector('.popup__input_value_name');
const aboutInput = formEdit.querySelector('.popup__input_value_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

// Переменные добавления карточки
const popupAddElement = document.querySelector('.popup_element');
const elementAddButton = document.querySelector('.profile__add-button');
const elementCloseButton = document.querySelector('.popup__close-button-element');
const formAdd = document.querySelector('.popup__form_add');
const titleInput = formAdd.querySelector('.popup__input_value_title');
const urlInput = formAdd.querySelector('.popup__input_value_url');

// Переменные popup с картинкой
const popupPhoto = document.querySelector('.popup_photo');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const photoCloseButton = document.querySelector('.popup__close-button-photo');

// Переменные element template
const templateElement = document.querySelector('.element-template').content;
const elementsSection = document.querySelector('.elements');

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
  const newElement = createCard({name:title, link:link});
  elementsSection.prepend(newElement);
}

// Добавление нового элемента
function handlerAddElement(evt) {
  evt.preventDefault();
  prependToSection(titleInput.value, urlInput.value);
  closePopup(popupAddElement);
  formAdd.reset();
}

// Открытие popup photo
function handlerOpenPhoto (image, caption) {
  popupImage.src = image;
  popupImage.alt = caption;
  popupCaption.textContent = caption;
  openPopup(popupPhoto);
}

// Создание элемента
function createCard(item) {
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
  elementImage.addEventListener('click', () => handlerOpenPhoto(item.link, item.name));
  return elementItem;
}

// Отрисовка элемента
function renderCard() {
  const elementList = initialCards.map((item) => {
    return createCard(item);
  });
  elementsSection.append(...elementList);
}

renderCard();

profileEditButton.addEventListener('click', openEdit);
profileCloseButton.addEventListener('click', () => closePopup(popupEditProfile));
formEdit.addEventListener('submit', handlerProfileSubmit);
elementAddButton.addEventListener('click', () => openPopup(popupAddElement));
elementCloseButton.addEventListener('click', () => closePopup(popupAddElement));
formAdd.addEventListener('submit', handlerAddElement);
photoCloseButton.addEventListener('click', () => closePopup(popupPhoto));


