let inputTextArea = document.getElementById("text");
let characCount = document.getElementById("characters");
let wordCount = document.getElementById("words");

inputTextArea.addEventListener("input", () => {
    characCount.textContent = inputTextArea.value.length;
    let txt = inputTextArea.value.trim();
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});