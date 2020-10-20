let gNumber = 0;
let ktnSinoNumber = 0;
let ntkNativeNumber = 0;
let ktnNativeNumber = 0;

function generateNumber() {
    gNumber = Math.floor(Math.random() * 99 + 1);
    document.getElementById("koreanCorrect").innerHTML = "";
    document.getElementById("koreanAnswer").value = "";
    showNumber();
}

function generatektnSinoNumber() {
	ktnSinoNumber = Math.floor(Math.random() * 99 + 1);
	document.getElementById("ktnSinoCorrect").innerHTML = "";
	document.getElementById("ktnSinoAnswer").value = "";
	showktnNumber();
}

function generatentkNativeNumber() {
	ntkNativeNumber = Math.floor(Math.random() * 99 + 1);
	document.getElementById("ntkNativeCorrect").innerHTML = "";
	document.getElementById("ntkNativeAnswer").value = "";
	showntkNativeNumber();
}

function generatektnNativeNumber() {
	ktnNativeNumber = Math.floor(Math.random() * 99 + 1);
	document.getElementById("ktnNativeCorrect").innerHTML = "";
	document.getElementById("ktnNativeAnswer").value = "";
	showktnNativeNumber();
}

function showNumber() {
    document.getElementById("numberToKorean").innerHTML = gNumber;
}

function showktnNumber() {
	document.getElementById("ktnSinoShow").innerHTML = getSino(ktnSinoNumber);
}

function showntkNativeNumber() {
    document.getElementById("ntkNativeShow").innerHTML = ntkNativeNumber;
}

function showktnNativeNumber() {
    document.getElementById("ktnNativeShow").innerHTML = getNative(ktnNativeNumber);
}

function getSino(num) {
	let retStr = "";
	if(num == 0)
		return "공";
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
	if(Math.floor(num/10) != 0) {
			retStr = "십" + retStr;
			switch(Math.floor(num/10)%10) {
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

function getNative(num) {
	let retstr = "";
	if(num == 0) {
		return "공";
	}
	switch(num%10) {
		case 1:
			retstr = "한나" + retstr;
			break;
		case 2:
			retstr = "둘" + retstr;
			break;
		case 3:
			retstr = "셋" + retstr;
			break;
		case 4:
			retstr = "넷" + retstr;
			break;
		case 5:
			retstr = "다섯" + retstr;
			break;
		case 6:
			retstr = "여섯" + retstr;
			break;
		case 7:
			retstr = "일곱" + retstr;
			break;
		case 8:
			retstr = "여덟" + retstr;
			break;
		case 9:
			retstr = "아홉" + retstr;
			break;
		default:
			retstr = "";
			break;
	}
	switch(Math.floor(num/10)%10) {
		case 1:
			retstr = "열" + retstr;
			break;
		case 2:
			retstr = "스물" + retstr;
			break;
		case 3:
			retstr = "서른" + retstr;
			break;
		case 4:
			retstr = "마흔" + retstr;
			break;
		case 5:
			retstr = "쉰" + retstr;
			break;
		case 6:
			retstr = "예순" + retstr;
			break;
		case 7:
			retstr = "일흔" + retstr;
			break;
		case 8:
			retstr = "여든" + retstr;
			break;
		case 9:
			retstr = "아흔" + retstr;
			break;
		default:
			retstr = "";
			break;
	}
	return retstr;
}

function checkSino() {
    if(document.getElementById("koreanAnswer").value === getSino(gNumber)) {
        document.getElementById("koreanCorrect").innerHTML = "Correct!";
    }
    else {
        document.getElementById("koreanCorrect").innerHTML = "Wrong. It's " + getSino(gNumber);
    }
}

function checkktnSinoNumber() {
	if(document.getElementById("ktnSinoAnswer").value == ktnSinoNumber) {
		document.getElementById("ktnSinoCorrect").innerHTML = "Correct!";
	}
	else {
        document.getElementById("ktnSinoCorrect").innerHTML = "Wrong. It's " + ktnSinoNumber;
	}
}

function checkntkNativeNumber() {
	if(document.getElementById("ntkNativeAnswer").value == getNative(ntkNativeNumber)) {
		document.getElementById("ntkNativeCorrect").innerHTML = "Correct!";
	}
	else {
        document.getElementById("ntkNativeCorrect").innerHTML = "Wrong. It's " + getNative(ntkNativeNumber);
	}
}

function checkktnNativeNumber() {
	if(document.getElementById("ktnNativeAnswer").value == ktnNativeNumber) {
		document.getElementById("ktnNativeCorrect").innerHTML = "Correct!";
	}
	else {
        document.getElementById("ktnNativeCorrect").innerHTML = "Wrong. It's " + ktnNativeNumber;
	}
}

generateNumber();
generatektnSinoNumber();
generatentkNativeNumber();
generatektnNativeNumber();
