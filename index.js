let text1 = document.querySelector("#text1");
let text2 = document.querySelector("#text2");
let text3 = document.querySelector("#text3");

let p1 = document.querySelector(".hint1");
let p2 = document.querySelector(".hint2");
let p3 = document.querySelector(".hint3");

let input = document.querySelectorAll("input");

let result = document.querySelector(".result-cont");

let checkBtn = document.querySelector(".check-btn");
let hintBtn = document.querySelector(".hint-btn");
let resetBtn = document.querySelector(".reset-btn");
let deleteBtns = document.querySelectorAll(".delete-btn");
let buttons = document.querySelectorAll(".btn");

// 입력 버튼 로직
const clickBtnEvent = (value) => {
  const inputValues = [text1.value, text2.value, text3.value];
  // 첫번째 입력창이 비어있으면 text1.value 값을 적용
  if (inputValues[0] === "") {
    text1.value = value;
  }
  // 두번째 비어있는 입력창에 값을 채웁니다.
  else if (inputValues[1] === "" && inputValues.indexOf(value) === -1) {
    text2.value = value;
  }
  // 세번째 비어있는 입력창에 값을 채웁니다.
  else if (inputValues[2] === "" && inputValues.indexOf(value) === -1) {
    text3.value = value;
  }
  // 이미 입력된 값과 동일한 값을 입력하려 할 때
  else if (inputValues.indexOf(value) !== -1) {
    alert("같은 값을 입력할 수 없습니다.");
  }
  // 모든 입력창이 값으로 채워져 있을 때
  else {
    alert("입력값을 전부 입력했습니다.");
  }
};

// 버튼을 눌렀을때 한번씩 반복해줘
buttons.forEach((el) => {
  el.addEventListener("click", () => {
    clickBtnEvent(el.textContent); // 클릭한 버튼의 textContent를 값으로 전달합니다.
  });
});

//키보드로 입력할 때 입력을 못하게 하는 코드
const keydownInputEvent = (e) => {
  console.log(e.target);
  e.preventDefault();
  if (e.target.value === "") {
    alert("버튼을 클릭하여 입력해주세요.");
  }
};

// input.forEach((i) => {
//   i.addEventListener("keydown", keydownInputEvent);
// });

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
let count = 0;
const checkAnswer = () => {
  const inputValues = [text1.value, text2.value, text3.value];
  let strikes = 0;
  let ball = 0;
  let out = 0;

  if (count >= 9) {
    return;
  }
  count++;

  //console.log(randomNum);

  for (let i = 0; i < inputValues.length; i++) {
    if (
      inputValues[0] === "" ||
      inputValues[1] === "" ||
      inputValues[2] === ""
    ) {
      alert("입력창에 값을 모두 넣어주세요.");
      return;
    }
    //console.log(inputValues[1]);
    //console.log(randomNum[1]);

    if (parseInt(inputValues[i]) === randomNum[i]) {
      strikes++;
      //p1.textContent = `strike : ${strikes}`;
      input[i].style.fontWeight = "bold";
      input[i].style.color = "saddlebrown";
      input[i].style.fontSize = "22px";
    } else if (randomNum.includes(parseInt(inputValues[i]))) {
      ball++;
      //p2.textContent = `ball : ${ball}`;
      input[i].style.fontWeight = "bold";
      input[i].style.color = "blue";
      input[i].style.fontSize = "22px";
      //console.log("ball :", ball);
    } else {
      out++;
      //p3.textContent = `out : ${out}`;
      input[i].style.fontWeight = "bold";
      input[i].style.color = "red";
      input[i].style.fontSize = "22px";
      //console.log("out");
    }
  }

  const p = document.createElement("p");
  p.textContent = `strike : ${strikes}번, ball : ${ball}번, out: ${out}번`;
  result.appendChild(p);

  if (strikes !== 3) {
    alert(`남은 기회: ${9 - count}번`);
  } else if (strikes === 3) {
    alert("오와!!! 당신은 천재입니다. Game Clear");
    window.location.reload();
  }
  // 첫번째 입력값과 첫번째 생성된 랜덤한 숫자가 값이 같고 and 위치가 같으면 strik 를 외쳐줘 콘솔창에
  // 입력한 값이 생성된 랜덤한 숫자가 같지만 위치가 틀리면 ball을 콘솔창에 외쳐줘
  // 입력값이랑 생성된 랜덤한숫자가 모두 틀릴 시 out 이라고 콘솔창에 외쳐줘
};

checkBtn.addEventListener("click", checkAnswer);

//힌트 버튼을 눌렀을때 생성된 랜덤 번호 4개를 알려줘!
const clickHintEVENT = () => {
  console.log(randomNum);
  alert(randomNum);
};

// hintBtn.addEventListener("click", clickHintEVENT);

// delete버튼 눌렀을때 값 초기화 기능
const clickDeleteEvent = (e) => {
  const inputField = e.target.parentElement.querySelector("input");
  if (inputField.value === "") {
    alert("입력값이 비어있습니다.");
    return;
  }
  inputField.value = "";
};

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", clickDeleteEvent);
});

//리셋 버튼 눌렀을때 처음부터 다시 시작하는 코드!
const clickResetEvent = () => {
  window.location.reload();
};
