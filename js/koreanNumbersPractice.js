let gNumber = 0;
let ktnSinoNumber = 0;

function generateNumber() {
    gNumber = Math.floor(Math.random() * 99 + 1);
    document.getElementById("koreanCorrect").innerHTML = "";
    document.getElementById("koreanAnswer").value = "";
    showNumber();
}

function showNumber() {
    document.getElementById("numberToKorean").innerHTML = gNumber;
}

function getSino(num) {
    let retStr = "";
    switch(num%10) {
        case 1:
            retStr = "일";
			break;
		case 2:
			retStr = "이";
			break;
		case 3:
			retStr = "삼";
			break;
		case 4:
			retStr = "사";
			break;
		case 5:
			retStr = "오";
			break;
		case 6:
			retStr = "육";
			break;
		case 7:
			retStr = "칠";
			break;
		case 8:
			retStr = "팔";
			break;
		case 9:
			retStr = "구";
			break;
    }
	if(num/10 != 0) {
			retStr = "십" + retStr;
			switch(Math.floor(num/10)) {
				case 2:
					retStr = "이" + retStr;
					break;
				case 3:
					retStr = "삼" + retStr;
					break;
				case 4:
					retStr = "사" + retStr;
					break;
				case 5:
					retStr = "오" + retStr;
					break;
				case 6:
					retStr = "육" + retStr;
					break;
				case 7:
					retStr = "칠" + retStr;
					break;
				case 8:
					retStr = "팔" + retStr;
					break;
				case 9:
					retStr = "구" + retStr;
					break;
			}
    }
    return retStr;
}

function checkSino() {
    if(document.getElementById("koreanAnswer").value === getSino(gNumber)) {
        document.getElementById("koreanCorrect").innerHTML = "Correct!";
    }
    else {
        document.getElementById("koreanCorrect").innerHTML = "Wrong. It's " + getSino(gNumber);
    }
}

function generatektnSinoNumber() {
	ktnSinoNumber = Math.floor(Math.random() * 99 + 1);
	document.getElementById("ktnSinoCorrect").innerHTML = "";
	document.getElementById("ktnSinoAnswer").value = "";
	showktnNumber();
}

function showktnNumber() {
	document.getElementById("ktnSinoShow").innerHTML = getSino(ktnSinoNumber);
}

function checkktnSinoNumber() {
	if(document.getElementById("ktnSinoAnswer").value == ktnSinoNumber) {
		document.getElementById("ktnSinoCorrect").innerHTML = "Correct!";
	}
	else {
        document.getElementById("ktnSinoCorrect").innerHTML = "Wrong. It's " + ktnSinoNumber;
	}
}

generateNumber();
generatektnSinoNumber();
