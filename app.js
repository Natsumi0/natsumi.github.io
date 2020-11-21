// クイズの内容をオブジェクト配列化
const quiz = [
    {   question: "Q1:古代種の末裔であるエアリスの実の母親といえば？",
        answers: [
            "エルナ",
            "イファルナ",
            "エレオノーラ",
            "ユウナ"
        ],
        correct: "イファルナ"
    },
    {   question: "Q2:ティファが装備できる武器で最強の攻撃力を誇る武器といえば？",
        answers: [
            "プレミアムハープ",
            "プレミアムハート",
            "プレミアムハード",
            "プレミアムハーツ"
        ],
        correct: "プレミアムハード"
    },
    {   question: "Q3:シド・ハイウインドが整備していた宇宙ロケットは新羅何号か？",
        answers: [
            "神羅62号",
            "神羅64号",
            "神羅22号",
            "神羅26号"
        ],
        correct: "神羅26号"
    },
    {   question: "Q4:忘らるる都へ入るために必要なアイテムといえば？",
        answers: [
            "ルナ・ハープ",
            "ルナ・ハーブ",
            "ルナ・ハート",
            "ルナ・ハーピ"
        ],
        correct: "ルナ・ハープ"
    },
    {   question: "Q5:召還マテリアのラムウの技名といえば？",
        answers: [
            "裁きの槍",
            "裁きの雷",
            "裁きの光",
            "裁きの矢"
        ],
        correct: "裁きの雷"
    },
    {   question: "Q6:マテリア「ナイツオブラウンド」の技名は？",
        answers: [
            "アルティメットゾーン",
            "アルティメットヒーローズ",
            "アルティメットエンド",
            "アルティメットエタニティ"
        ],
        correct: "アルティメットエンド"
    },
    {   question: "Q7:延期が続いた「ファイナルファンタジーVII リメイク」が発売されたのは、2020年の何月何日か？",
        answers: [
            "4月09日",
            "4月10日",
            "4月11日",
            "4月12日"
        ],
        correct: "4月10日"
    },
    {   question: "Q8:エアリスの声を担当した坂本真綾さんはFFの他作品では誰の声でお馴染みか？",
        answers: [
            "ティナ(FF6)",
            "ユウナ(FF10)",
            "パンネロ(FF12)",
            "ライトニング(FF13)"
        ],
        correct: "ライトニング(FF13)"
    },
    {   question: "Q9:コスタ・デル・ソルでの各メンバーの個人的な行動でユフィは何をしていたか？",
        answers: [
            "マテリア屋でバイトしていた",
            "マテリアを盗んでいた",
            "マテリアを探していた",
            "マテリア屋で買い物をしていた"
        ],
        correct: "マテリア屋でバイトしていた"
    },
    {   question: "Q10:ヴィンセントのセリフではないものは？",
        answers: [
            "…私を悪夢から呼び起こすのは、だれだッ！",
            "……まだいたのか",
            "興味ないね",
            "これで、ますます人間から離れてゆく……"
        ],
        correct: "興味ないね"
    },

];

const question = "quiz.length";
let quizIndex = 0;
let score = 0;


// 定数の文字列をHTMLに反映させる

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
