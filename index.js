let text1 = document.querySelector("#text1");
let text2 = document.querySelector("#text2");
let text3 = document.querySelector("#text3");

let input = document.querySelectorAll("input");

let checkBtn = document.querySelector(".check-btn");
let hintBtn = document.querySelector(".hint-btn");
let deleteBtns = document.querySelectorAll(".delete-btn");
let buttons = document.querySelectorAll(".btn");

//
const clickBtnEvent = (value) => {
  //첫번째 입력창이 비어있으면 text1.value 값을 적용해! or text2 or text3 마찬가지!
  if (text1.value === "") {
    text1.value = value;
  } else if (text2.value === "") {
    text2.value = value;
  } else if (text3.value === "") {
    text3.value = value;
  } else {
    alert("입력값을 전부 입력했습니다.");
  }
};

// 버튼을 눌렀을때 한번씩 반복해줘
buttons.forEach((i) => {
  i.addEventListener("click", () => {
    clickBtnEvent(i.textContent); // 클릭한 버튼의 textContent를 값으로 전달합니다.
  });
});

//키보드로 입력할 때 입력을 못하게 하는 코드
const keydownInputEvent = (e) => {
  if (e.target.value === "") {
    e.preventDefault();
    alert("버튼을 클릭하여 입력해주세요.");
  }
};

input.forEach((i) => {
  i.addEventListener("keydown", keydownInputEvent);
});

//랜덤 숫자 3가지 뽑기
let randomNum = [];

for (let i = 0; i < 3; i++) {
  let select = Math.floor(Math.random() * 9 + 1); // 1~9 랜덤 숫자를 생성
  //console.log(select);
  if (randomNum.indexOf(select) === -1) {
    /*
      indexOf() 문자열들 중에서 특정한 위치의 문자열을 찾고 검색된 문자열의 위치를
      반환하는 메서드
      보통 인덱스 번호를 찾는 메서드
      값이 없을 경우 -1을 반환하기 때문에 중복되는 값을 찾을 때 사용하는 공식
      */
    randomNum.push(select);
  } else {
    i--;
  }
}
//console.log(randomNum);

//체크버튼을 눌렀을때 랜덤으로 생성된 3개의 숫자와 인풋값의 3개의 값이 맞는지
//확인하는 코드
// 인풋값과 랜덤값과 순서 모두 같으면 skrike를 console창에 출력해주고
// 인풋값과 랜덤값은 같지만 순서가 틀리면 ball을 console창에 출력해주는 코드
// 3개 다 틀리면 out 이라는 console창에다 출력해주는 코드
const checkAnswer = (e) => {
  e.preventDefault();
  console.log(e);
  const inputValues = [text1.value, text2.value, text3.value];
  let strikes = 0;
  let ball = 0;

  for (let i = 0; i < inputValues.length; i++) {
    if (
      inputValues[0] === "" ||
      inputValues[1] === "" ||
      inputValues[2] === ""
    ) {
      alert("입력창에 값을 넣어주세요.");
      break;
    }

    if (inputValues[0] === randomNum[0]) {
      alert("정답");
    } else {
      alert("오탑");
    }
  }

  // 첫번째 입력값과 첫번째 생성된 랜덤한 숫자가 값이 같고 and 위치가 같으면 strik 를 외쳐줘 콘솔창에
  // 입력한 값이 생성된 랜덤한 숫자가 같지만 위치가 틀리면 ball을 콘솔창에 외쳐줘
  // 입력값이랑 생성된 랜덤한숫자가 모두 틀릴 시 out 이라고 콘솔창에 외쳐줘
};

checkBtn.addEventListener("click", checkAnswer);

//힌트 버튼을 눌렀을때 생성된 랜덤 번호 4개를 알려줘!
const clickHintEVENT = (e) => {
  e.preventDefault();
  alert(randomNum);
};

hintBtn.addEventListener("click", clickHintEVENT);

// delete버튼 눌렀을때 값 초기화 기능
const clickDeleteEvent = (e) => {
  e.preventDefault();
  const inputField = e.target.parentElement.querySelector("input");
  inputField.value = "";
};

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", clickDeleteEvent);
});
