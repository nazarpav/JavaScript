const _1 = document.getElementById('_1');
const _2 = document.getElementById('_2');
const _3 = document.getElementById('_3');
const _4 = document.getElementById('_4');
const _5 = document.getElementById('_5');
const _6 = document.getElementById('_6');
const _7 = document.getElementById('_7');
const _8 = document.getElementById('_8');
const _9 = document.getElementById('_9');
const _0 = document.getElementById('_0');
const _result = document.getElementById('result');
const _division = document.getElementById('division');
const _multiplication = document.getElementById('multiplication');
const _minus = document.getElementById('minus');
const _plus = document.getElementById('plus');
const _clear = document.getElementById('clear');
const _IO = document.getElementById('IO');

document.addEventListener("DOMContentLoaded", () => {
    _1.addEventListener("click", _1Click);
    _2.addEventListener("click", _2Click);
    _3.addEventListener("click", _3Click);
    _4.addEventListener("click", _4Click);
    _5.addEventListener("click", _5Click);
    _6.addEventListener("click", _6Click);
    _7.addEventListener("click", _7Click);
    _8.addEventListener("click", _8Click);
    _9.addEventListener("click", _9Click);
    _0.addEventListener("click", _0Click);
    _result.addEventListener("click", _resultClick);
    _division.addEventListener("click", _divisionClick);
    _multiplication.addEventListener("click", _multiplicationClick);
    _minus.addEventListener("click", _minusClick);
    _plus.addEventListener("click", _plusClick);
    _clear.addEventListener("click", _clearClick);
});
let _IsExpressionContainsOperationSign = false;

function _1Click() {
    _IO.value += '1';
};

function _2Click() {
    _IO.value += '2';
};

function _3Click() {
    _IO.value += '3';
};

function _4Click() {
    _IO.value += '4';
};

function _5Click() {
    _IO.value += '5';
};

function _6Click() {
    _IO.value += '6';
};

function _7Click() {
    _IO.value += '7';
};

function _8Click() {
    _IO.value += '8';
};

function _9Click() {
    _IO.value += '9';
};

function _0Click() {
    _IO.value += '0';
};
//################################################
function _resultClick() {
    CalculateExpression();
    _IsExpressionContainsOperationSign = false;
};

function _divisionClick() {
    if (_IsExpressionContainsOperationSign) {
        CalculateExpression();
    }
    _IsExpressionContainsOperationSign = true;
    _IO.value += '/';
};

function _multiplicationClick() {
    if (_IsExpressionContainsOperationSign) {
        CalculateExpression();
    }
    _IsExpressionContainsOperationSign = true;
    _IO.value += '*';
};

function _minusClick() {
    if (_IsExpressionContainsOperationSign) {
        CalculateExpression();
    }
    _IsExpressionContainsOperationSign = true;
    _IO.value += '-';
};

function _plusClick() {
    if (_IsExpressionContainsOperationSign) {
        CalculateExpression();
    }
    _IsExpressionContainsOperationSign = true;
    _IO.value += '+';
};

function _clearClick() {
    _IO.value = '';
    _IsExpressionContainsOperationSign = false;
};

function CalculateExpression() {
    let _FirstNum = '';
    let _SecondNum = '';
    let _IsSecondNumFill = false;
    let symbol = '';
    for (var i = 0; i < _IO.value.length; ++i) {
        switch (_IO.value[i]) {
            case '*':
                symbol = '*';
                _IsSecondNumFill = true;
                break;
            case '/':
                symbol = '/';
                _IsSecondNumFill = true;
                break;
            case '-':
                symbol = '-';
                _IsSecondNumFill = true;
                break;
            case '+':
                symbol = '+';
                _IsSecondNumFill = true;
                break;
            default:
                if (_IsSecondNumFill) {
                    _SecondNum += _IO.value[i];
                } else {
                    _FirstNum += _IO.value[i];
                }
        }
    }
    switch (symbol) {
        case '*':
            _IO.value = (parseInt(_FirstNum) * parseInt(_SecondNum));
            break;
        case '/':
            _IO.value = (parseInt(_FirstNum) / parseInt(_SecondNum));
            break;
        case '-':
            _IO.value = (parseInt(_FirstNum) - parseInt(_SecondNum));
            break;
        case '+':
            _IO.value = (parseInt(_FirstNum) + parseInt(_SecondNum));
            break;
        default:
            _IO.value = 'Error';
    }
};