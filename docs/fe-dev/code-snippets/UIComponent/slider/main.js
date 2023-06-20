import {IMAGES_PATH, MAX_SIZE} from "./constants.js";
import {createSlider} from "./createSlider.js";
import {$, assign} from "./utils.js";

const changeSliderPage = currentPage => {
  const sliderPages = $('#slider');
  const {originClass} = sliderPages.dataset;

  assign(sliderPages, {
    className: `-translate-x-[${(currentPage - 1) * 100}%] ${originClass}`
  });
};
const changeStatus = currentPage => {
  assign($("#status"), {
    textContent: `${currentPage} / ${MAX_SIZE}`
  })
};

window.onload = () => {
  const sliderContent = IMAGES_PATH
    .map((path) => {
      return `<div class="w-full p-2 shrink-0 flex justify-center items-center">
          <img src="${path}" class="max-w-full max-h-full" />
        </div>`
    })
    .join('');

  const sliderPages = $('#slider');
  assign(sliderPages, {
    innerHTML: sliderContent
  });
  assign(sliderPages.dataset, {
    originClass:
      sliderPages.dataset.originClass ?? sliderPages.className
  });

  window.slider = createSlider({maxSize: MAX_SIZE});
  slider.watchState(changeSliderPage);
  slider.watchState(changeStatus);
};