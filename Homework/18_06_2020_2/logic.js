const MainText = document.getElementById("MainText");
const IO = document.getElementById("IO");
const ErrorCount = document.getElementById("ErrorCount");
const ResultText = document.getElementById("ResultText");
const CQC = document.getElementById("CurrentQuationsCount");
const MQQ = document.getElementById("MaxQuationsQuantity");

let IsNewGame = true;
let MQQlocal = 0;
let CQClocal = 0;
let ErrorCountlocal = 0;
let Num1 = 0;
let Num2 = 0;
document.getElementById("next_Button").addEventListener("click", () => {
    Next();
});
document.getElementById("newGame_Button").addEventListener("click", () => {
    RestartGame();
});

function RestartGame() {
    MainText.innerHTML = "Enter quations quantity(Defaulth 5, and press next button)";
    IO.value = "";
    ErrorCount.innerHTML = "0";
    //ResultText.innerHTML = "";
    CQC.innerHTML = "0";
    MQQ.innerHTML = "0";
    MQQlocal = 0;
    CQClocal = 0;
    ErrorCountlocal = 0;
    IsNewGame = true;
}

function GenerateAndSaveExpression() {
    Num1 = 1;
    Num2 = 5;
    MainText.innerHTML = Num1.toString() + "*" + Num2.toString();
}

function Next() {
    if (IsNewGame) {
        IsNewGame = false;
        MQQlocal = parseInt(IO.value);
        if (isNaN(MQQlocal)) {
            MQQlocal = 5;
        }
        MQQ.innerHTML = MQQlocal;
        GenerateAndSaveExpression();
        ++CQClocal
        CQC.innerHTML = CQClocal.toString();
    } else if (MQQlocal == CQClocal) {
        if (!CheckIsAnswerCorrect(parseInt(IO.value))) {
            ++ErrorCountlocal;
            ErrorCount.innerHTML = ErrorCountlocal.toString();
        }
        EndGame();
        return;
    } else {
        ++CQClocal
        CQC.innerHTML = CQClocal.toString();
        if (!CheckIsAnswerCorrect(parseInt(IO.value))) {
            ++ErrorCountlocal;
            ErrorCount.innerHTML = ErrorCountlocal.toString();
        }
        GenerateAndSaveExpression();
    }
    IO.value = "";
}

function EndGame() {
    ResultText.innerHTML = "Errors: " + ErrorCountlocal.toString(); // +
    // "\n Your Assessment is " + (ErrorCountlocal / (MQQlocal / 5)).toString();
    RestartGame();
}

function CheckIsAnswerCorrect(num1) {
    return (num1 == (Num1 * Num2));
}