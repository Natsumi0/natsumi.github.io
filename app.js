// クイズの内容をオブジェクト配列化
const quiz = [
    {   question: "ゲーム市場、最も売れたゲーム機は次の内どれ？",
        answers: [
            "スーパーファミコン",
            "プレイステーション２",
            "ニンテンドースイッチ",
            "ニンテンドーDS"
        ],
        correct: "ニンテンドーDS"
    },
    {   question: "糸井重里が企画に関わった、任天堂の看板ゲームといえば？",
        answers: [
            "MOTHER2",
            "スーパーマリオブラザーズ",
            "スーパードンキーコング",
            "星のカービィ"
        ],
        correct: "MOTHER2"
    },
    {   question: "ファイナルファンタジーⅣの主人公の名前は？？",
        answers: [
            "フリオニール",
            "クラウド",
            "ティーダ",
            "セシル"
        ],
        correct: "セシル"
    }
];

const question = "quiz.length";
let quizIndex = 0;
let score = 0;


// 定数の文字列をHTMLに反映させる
// 

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

// クイズの正誤判定
const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解！");
        score++;
    } else {
        window.alert("不正解！");
    }

    // 回答し終わったらが終わったら次のクイズへ
    quizIndex++;

    // 次のクイズへ移行するか、終了かの判定
    if (quizIndex < quiz.length) {
        setupQuiz();
    } else {
        window.alert(`終了！あなたの正解数は${score}/${quiz.length}です。`);
    }
}

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}