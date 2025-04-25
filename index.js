import { catsData } from "/data.js";

const controlContainer = document.getElementById("control-container");
const getImageBtn = document.getElementById("get-image-btn");
const gifCheckbox = document.getElementById("gif-checkbox");

controlContainer.addEventListener("change", highlightRadio);
getImageBtn.addEventListener("click", getMatchingCatsArray);

function getMatchingCatsArray() {
  const isChecked = document.querySelector('input[type="radio"]:checked');
  const isGif = gifCheckbox.checked;

  if (isChecked) {
    const selectedEmotion = document.querySelector(
      'input[type="radio"]:checked'
    ).value;
  }

  console.log(isGif);
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
