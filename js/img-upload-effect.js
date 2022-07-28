const uploadOverlay = document.querySelector('.img-upload__overlay');
const previewImage = uploadOverlay.querySelector('.img-upload__preview img');
const effect = uploadOverlay.querySelector('.effects__list');
const sliderBar = uploadOverlay.querySelector('.img-upload__effect-level');

sliderBar.classList.add('hidden');

function defaultEffect () {
  previewImage.className = '';
}

function changeEffect (evt) {
  const effectValue = evt.target.value;
  if (effectValue === 'none') {
    sliderBar.classList.add('hidden');
  } else {
    sliderBar.classList.remove('hidden');
  }
  defaultEffect();
  previewImage.classList.add(`effects__preview--${effectValue}`);
}

effect.addEventListener('change', changeEffect);

export {defaultEffect};
