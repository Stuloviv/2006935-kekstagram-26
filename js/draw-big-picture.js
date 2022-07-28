import {makeElement} from './util.js';

const picture = document.querySelector('.big-picture');
const image = picture.querySelector('.big-picture__img');
const commentsLoader = picture.querySelector('.comments-loader');
const pictureClose = picture.querySelector('.big-picture__cancel');

function addCommentItem (avatarSource, authorName, text) {
  const listItem = makeElement('li', 'social__comment');
  const authorAvatar = makeElement('img', 'social__picture');
  authorAvatar.src = avatarSource;
  if (authorName) {
    authorAvatar.alt = authorName;
  } else {
    authorAvatar.alt = 'Неизвестный енот';
  }
  authorAvatar.width = '35';
  authorAvatar.height = '35';
  listItem.appendChild(authorAvatar);

  const commentText = makeElement('p', 'social__text', text);

  listItem.appendChild(commentText);

  return listItem;
}

function addComments (commentsObject) {
  const commentsList = document.querySelector('.social__comments');

  //Очищаем комментарии
  while (commentsList.firstChild) {
    commentsList.removeChild(commentsList.firstChild);
  }

  //И уже для каждого сгенерированного комметария в pictureThumbnails создаём разметку и подставляем значения
  commentsObject.forEach(({avatar, name, message}) => {
    const commentItem = addCommentItem(avatar, name, message);
    commentsList.appendChild(commentItem);
  });
}

function drawPicture (pictureSource, pictureLikesCount, pictureComments, pictureDescription) {
  image.querySelector('img').src = pictureSource;
  picture.querySelector('.likes-count').textContent = pictureLikesCount;
  picture.querySelector('.social__caption').textContent = pictureDescription;
  const commentCount = document.querySelector('.social__comment-count');

  let loadCount = 0;

  function setComments () {
    loadCount++;
    const comments = pictureComments.slice(0, 5 * loadCount);
    addComments(comments);
    commentCount.textContent = `${comments.length} из ${pictureComments.length} комментариев`;
    if (comments.length === pictureComments.length) {
      commentsLoader.classList.add('hidden');
      commentsLoader.removeEventListener('click', setComments);
    } else {
      commentsLoader.classList.remove('hidden');
    }
  }
  commentsLoader.addEventListener('click', setComments);
  setComments();
}

// Открыть со всеми вытекающими
function openPicture () {
  picture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  // Обработчик добавляется только при открытии окна
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      picture.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  });

  pictureClose.addEventListener('click', () => {
    picture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });
}

export {openPicture, drawPicture};
