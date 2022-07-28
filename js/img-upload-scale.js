const uploadOverlay = document.querySelector('.img-upload__overlay');
const scaleSmallerButton = uploadOverlay.querySelector('.scale__control--smaller');
const scaleBiggerButton = uploadOverlay.querySelector('.scale__control--bigger');
const scaleValue = uploadOverlay.querySelector('.scale__control--value');
const scaleButton = uploadOverlay.querySelector('.img-upload__scale');
const previewImage = uploadOverlay.querySelector('.img-upload__preview img');

const DEFAULT_SCALE = 100;
const SCALE_STEP = 25;

scaleValue.value = `${DEFAULT_SCALE}%`;
let scaleChange = DEFAULT_SCALE;

function setScale (evt) {

  if (evt.target === scaleSmallerButton && scaleChange > SCALE_STEP) {
    scaleChange -= SCALE_STEP;
    scaleValue.value = `${scaleChange}%`;
    previewImage.style.transform = `scale(${scaleChange * 0.01})`;
  } else if (evt.target === scaleBiggerButton && scaleChange < DEFAULT_SCALE) {
    scaleChange += SCALE_STEP;
    scaleValue.value = `${scaleChange}%`;
    previewImage.style.transform = `scale(${scaleChange * 0.01})`;
  }
}

scaleButton.addEventListener('click', setScale);
