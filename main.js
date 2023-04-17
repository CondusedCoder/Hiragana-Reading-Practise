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
            "ん"];

let katakana = ["ア", "イ", "エ", "ウ", "オ",
            "タ", "チ", "テ", "ツ", "ト",
            "ダ", "ヂ", "デ", "ド",
            "カ", "キ", "ケ", "ク", "コ",
            "ガ", "ギ", "ゲ", "グ", "ゴ",
            "ハ", "ヒ", "ヘ", "フ", "ホ",
            "バ", "ビ", "ベ", "ブ", "ボ",
            "パ", "ピ", "ペ", "プ", "ポ",
            "サ", "シ", "セ", "ス", "ソ",
            "ザ", "ゼ", "ズ", "ゾ",
            "マ", "ミ", "メ", "ム", "モ",
            "ナ", "ニ", "ネ", "ヌ", "ノ",
            "ラ", "リ", "レ", "ル", "ロ",
            "ワ", "ヲ",
            "ヤ", "ユ", "ヨ",
            "ン"];



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

let useHiragana = true;
let useKatakana = false;

let isHiragana = true;

let useHiraganaCheckbox = document.getElementById("useHiraganaCheckbox");
let useKatakanaCheckbox = document.getElementById("useKatakanaCheckbox");

useHiraganaCheckbox.checked = true;

function formPress(ele) {
    if (event.key === "Enter") {
        
        correctCombo++;

        if (useHiragana && useKatakana) {
            if (Math.random() > .5) {
                isHiragana = true;
    
            }
    
            else {
                isHiragana = false;
    
            }

        }

        else if (useHiragana && !useKatakana) {
            isHiragana = true;

        }

        else {
            isHiragana = false;

        }
        
        
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
    if (isHiragana) {
        hiraganaText.innerHTML = hiragana[currentHiragana];

    }

    else {
        hiraganaText.innerHTML = katakana[currentHiragana];

    }

    useHiragana = useHiraganaCheckbox.checked;
    useKatakana = useKatakanaCheckbox.checked;

    resultText.innerHTML = result;

}, 1);
