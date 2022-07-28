import './validation-form.js';
import './img-upload-scale.js';
import './img-upload-effect.js';
import {defaultEffect} from './img-upload-effect.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');
const imageEditForm = uploadForm.querySelector('.img-upload__overlay');
const imageEditCancel = uploadForm.querySelector('#upload-cancel');
const hashtagsElement = uploadForm.querySelector('.text__hashtags');
const commentElement = uploadForm.querySelector('.text__description');

// Открыть/закрыть
uploadFile.addEventListener('change', () => {
  imageEditForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      if (document.activeElement !== hashtagsElement && document.activeElement !== commentElement){
        imageEditForm.classList.add('hidden');
        document.body.classList.remove('modal-open');
        uploadForm.reset();
        defaultEffect();
      }
    }
  });

  imageEditCancel.addEventListener('click', () => {
    imageEditForm.classList.add('hidden');
    document.body.classList.remove('modal-open');
    uploadForm.reset();
    defaultEffect();
  });
});
