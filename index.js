import { catsData } from "/data.js";

// console.log(catsData[1].emotionTags);

const controlContainer = document.getElementById("control-container");

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
          <label for="happy">${emotion}</label>
          <input type="radio" id="happy" name="emotion" value="happy" />
        </div>`;
  }
}

console.log(renderEmotions());
