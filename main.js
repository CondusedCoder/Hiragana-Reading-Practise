let hiragana = ["あ", "い", "え", "う", "お",
            "た", "ち", "て", "つ", "と",
            "だ", "じ", "で", "ど",
            "か", "き", "け", "く", "こ",
            "が", "ぎ", "げ", "ぐ", "ご",
            "は", "ひ", "へ", "ふ", "ほ",
            "ば", "び", "べ", "ぶ", "ぼ",
            "ぱ", "ぴ", "ぺ", "ぷ", "ぷ",
            "さ", "し", "せ", "す", "そ",
            "ざ", "ぜ", "ず", "ぞ",
            "ま", "み", "め", "む", "も",
            "な", "に", "ね", "ぬ", "の",
            "ら", "り", "れ", "る", "ろ",
            "わ", "を",
            "や", "ゆ", "よ",
            "ん",];


let romaji = ["a", "i", "e", "u", "o",
          "ta", "chi", "te", "tsu", "to",
          "da", "ji", "de", "do",
          "ka", "ki", "ke", "ku", "ko",
          "ga", "gi", "ge", "gu", "go",
          "ha", "hi", "he", "fu", "ho",
          "ba", "bi", "be", "bu", "bo",
          "pa", "pi", "pe", "pu", "po",
          "sa", "shi", "se", "su", "so",
          "za", "ze", "zu", "zo",
          "ma", "mi", "me", "mu", "mo",
          "na", "ni", "ne", "nu", "no",
          "ra", "ri", "re", "ru", "ro",
          "wa", "wo",
          "ya", "yu", "yo",
          "n"];

let currentHiragana = 0;

let hiraganaText = document.getElementById("hiraganaText");

let resultText = document.getElementById("result");

let answerInput = document.getElementById("answer");

let result = "";

let correctCombo = 0;

function formPress(ele) {
    if (event.key === "Enter") {
        
        correctCombo++;

        if (answerInput.value == romaji[currentHiragana]) {
            if (correctCombo > 1) {
                result = "Correct (" + correctCombo + " times in a row)";

            }

            else {
                result = "Correct";

            }
            resultText.style.color = "rgb(100, 255, 150)";


        }

        else {
            result = "Incorrect, the correct answer is " + romaji[currentHiragana];

            resultText.style.color = "red";
            
            correctCombo = 0;

        }

        answerInput.value = "";

        currentHiragana = Math.round(Math.random() * (hiragana.length - 1));

        
    }
}
setInterval( function() {
    hiraganaText.innerHTML = hiragana[currentHiragana];
    resultText.innerHTML = result;

}, 1);
