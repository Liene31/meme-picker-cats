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
  const emotions = getEmotionsArray(catsData);

  for (const emotion of emotions) {
    console.log(emotion);
    controlContainer.innerHTML += `
        <div class="radio-block">
          <label for="happy">${emotion}</label>
          <input type="radio" id="happy" name="emotion" value="happy" />
        </div>`;
  }
}

console.log(renderEmotions());
