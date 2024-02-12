const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.getElementById("generateButton").addEventListener("click", () => {
  const inputText = document.getElementById("textInput").value.toUpperCase();
  const outputElement = document.getElementById("outputText");

  // Helper function to adjust the font size dynamically
  function adjustFontSize() {
    const containerWidth = document.querySelector(".container").offsetWidth;
    let fontSize = 100; // Starting font size
    outputElement.style.fontSize = `${fontSize}px`;

    while (outputElement.offsetWidth > containerWidth) {
      fontSize--;
      outputElement.style.fontSize = `${fontSize}px`;
    }
  }

  let iteration = 0;

  clearInterval(outputElement.interval);

  outputElement.dataset.value = inputText;
  outputElement.innerText = inputText;

  adjustFontSize(); // Call the function to adjust the font size

  outputElement.interval = setInterval(() => {
    outputElement.innerText = outputElement.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return outputElement.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= outputElement.dataset.value.length) {
      clearInterval(outputElement.interval);
    }

    iteration += 1 / 3;
  }, 30);
});
