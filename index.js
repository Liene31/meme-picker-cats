import { catsData } from "/data.js";

// console.log(catsData[1].emotionTags);

const controlContainer = document.getElementById("control-container");

controlContainer.addEventListener("change", highlightRadio);

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
        <div class="radio-block">
          <label for="${emotion}">${emotion}</label>
          <input type="radio" id="${emotion}" name="emotion" value="${emotion}" />
        </div>`;
  }
}

console.log(renderEmotions());
