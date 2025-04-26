import { catsData } from "/data.js";

const controlContainer = document.getElementById("control-container");
const getImageBtn = document.getElementById("get-image-btn");
const gifCheckbox = document.getElementById("gif-checkbox");

controlContainer.addEventListener("change", highlightRadio);
getImageBtn.addEventListener("click", renderImage);

function renderImage() {
  getSingleMatchingCat();
}

function getMatchingCatsArray() {
  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector(
      'input[type="radio"]:checked'
    ).value;
    const isGifChecked = gifCheckbox.checked;

    const matchingCatsArray = catsData.filter(function (cats) {
      if (isGifChecked) {
        return cats.emotionTags.includes(selectedEmotion) && cats.isGif;
      }

      return cats.emotionTags.includes(selectedEmotion);
    });

    return matchingCatsArray;
  }
}

function getSingleMatchingCat() {
  const matchingCats = getMatchingCatsArray();
  const randomNum = Math.floor(Math.random() * matchingCats.length);
  console.log(randomNum);

  if (matchingCats.length === 1) {
    return matchingCats[0];
  } else {
    return matchingCats[randomNum];
  }
}

function highlightRadio(event) {
  const radioClassArray = [];

  for (const radio of document.querySelectorAll(".radio-block")) {
    radioClassArray.push(radio);
  }

  for (const radioBlock of radioClassArray) {
    radioBlock.classList.remove("radio-highlight");
  }

  document
    .getElementById(event.target.id)
    .parentElement.classList.add("radio-highlight");

  event.target.style.accentColor = "#64231f"; // Colors the radio button
}

function getEmotionsArray(catArray) {
  const emotionArray = [];
  for (const emotions of catArray) {
    for (const emotion of emotions.emotionTags) {
      emotionArray.push(emotion);
    }
  }

  return emotionArray;
}

function renderEmotions() {
  const emotionArray = getEmotionsArray(catsData);
  const emotions = [];

  for (const emotion of emotionArray) {
    if (!emotions.includes(emotion)) {
      emotions.push(emotion);
    }
  }
  for (const emotion of emotions) {
    controlContainer.innerHTML += `
        <div class="radio-block" id="radio-block">
          <label for="${emotion}">${emotion}</label>
          <input type="radio" id="${emotion}" name="emotion" value="${emotion}" />
        </div>`;
  }
}

renderEmotions();
