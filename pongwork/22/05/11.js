const calculator = document.querySelector(".calculator"); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector(".calculator__buttons"); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector(".calculator__operend--left"); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector(".calculator__operator"); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector(".calculator__operend--right"); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector(".calculator__result"); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;

  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.

  n1 = Number(n1);
  n2 = Number(n2);
  if (operator === "+") {
    result = n1 + n2;
  } else if (operator === "-") {
    result = n1 - n2;
  } else if (operator === "/") {
    result = n1 / n2;
  } else if (operator === "*") {
    result = n1 * n2;
  }

  if (operator === "") {
    return String(n1);
  }

  return String(result);
}

buttons.addEventListener("click", function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches("button")) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === "number") {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.
      // 1. 첫번째 칸에 입력된 내용이 있는지 없는지
      // 2. 기본값(0) 이 아니라면 숫자가 입력된 상태로 봄
      // 3. 첫번째 숫자가 0이 아니라면 숫자 버튼을 눌렀을 때 두번째 칸에 숫자를 입력하기

      // NOTE: JSDOM에서는 innerText가 구현이 안되어 있으므로 textContent 사용한다.
      // @see https://github.com/jsdom/jsdom/issues/1245

      if (firstOperend.textContent !== "0") {
        secondOperend.textContent = buttonContent;
      } else {
        firstOperend.textContent = buttonContent;
      }

      console.log("숫자 " + buttonContent + " 버튼");
    }

    if (action === "operator") {
      if (secondOperend.textContent === "0") {
        operator.textContent = buttonContent;
      } else {
        operator.textContent = buttonContent;
        secondOperend.textContent = "0";
      }
      console.log("연산자 " + buttonContent + " 버튼");
    }

    if (action === "decimal") {
      // console.log('소수점 버튼');
    }

    if (action === "clear") {
      firstOperend.textContent = "0";
      operator.textContent = "+";
      secondOperend.textContent = "0";
      calculatedResult.textContent = "0";
      console.log("초기화 버튼");
    }

    if (action === "calculate") {
      console.log("계산 버튼");
      calculatedResult.textContent = calculate(
        firstOperend.textContent,
        operator.textContent,
        secondOperend.textContent
      );
    }
  }
});

// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector(".calculator__display--for-advanced"); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

let firstNum = "";
let operatorForAdvanced = "";
let previousKey;
let previousNum;
let operand2 = "";

buttons.addEventListener("click", function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches("button")) {
    if (action === "number" || action === "decimal") {
      // 연산자 버튼을 누르고 숫자 버튼을 눌렀을 때
      if (previousKey === "operator") {
        // 연산자 버튼 누르고 두 번째 피연산자 입력하는 시점에서
        // .을 입력하면 .이 있는지 검사
        if (action === "decimal") {
          if (operand2.includes(".")) {
            return;
          }

          if (operand2 === "") {
            operand2 = "0";
          }
        }

        // 연산자 버튼의 클래스 이름이 있다면 지우기
        if (document.querySelector(".isPressed") != null) {
          document.querySelector(".isPressed").classList.remove("isPressed");
        }

        // 두 번째 피연산자 저장
        operand2 = operand2 + buttonContent;
        display.textContent = operand2;
        console.log("operand2", operand2);
        return;
      }

      // .을 누르면 .이 있는지 검사
      if (action === "decimal") {
        if (firstNum.includes(".")) {
          return;
        }

        if (firstNum === "") {
          firstNum = "0";
        }
      }

      // 처음 숫자를 눌렀을 때
      // 엔터를 누르고 나서 숫자를 눌렀을 때

      // previousKey 초기화
      if (previousKey != null) {
        previousKey = null;
      }

      // 첫 번째 피연산자 저장
      firstNum = firstNum + buttonContent;
      display.textContent = firstNum;

      console.log("firstNum", firstNum);
      // 새로운 첫 번째 숫자가 입력 됐을 때 두 번째 피연산자 초기화
      operand2 = "";

      previousKey = "number";
    }

    if (action === "operator") {
      // 계산 후 결과값에 연산자를 누른 경우

      if (previousKey === "calculate") {
        operatorForAdvanced = buttonContent;

        // 현재 상태 : operator
        previousKey = "operator";

        // 결과값이 첫 번째 값이 됨
        firstNum = previousNum;

        // 두 번째 입력값 초기화
        operand2 = "";

        // 누른 연산자 버튼에 isPressed 클래스 이름 추가
        target.classList.add("isPressed");
      } else if (firstNum && operand2 && previousKey === "operator") {
        previousKey = "operator";
        firstNum = calculate(firstNum, operatorForAdvanced, display.textContent);
        operatorForAdvanced = buttonContent;
        display.textContent = operand2;
        operand2 = "";
      } else {
        // 최초 연산자를 누를 떄
        // 새로운 첫 번째 값을 입력한 뒤 연산자를 누를 때
        operatorForAdvanced = buttonContent;

        // 현재 상태 : operator
        previousKey = "operator";

        // isPressed 클래스 이름이 있다면 지워주기
        if (document.querySelector(".isPressed") != null) {
          document.querySelector(".isPressed").classList.remove("isPressed");
        }

        // 현재 누른 연산자 버튼에 isPressed 클래스 이름 추가
        target.classList.add("isPressed");
      }

      return;
    }

    if (action === "decimal") {
      return;
    }

    if (action === "clear") {
      // 첫번째 피연산자 초기화
      firstNum = "";

      // 연산자 초기화
      operatorForAdvanced = "";

      // 화면에 보이는 결과값 초기화
      display.textContent = "0";

      // class 이름이 추가된 것이 있다면 지우기
      if (document.querySelector(".isPressed") != null) {
        document.querySelector(".isPressed").classList.remove("isPressed");
      }

      // 현재 상태 : clear
      previousKey = "clear";

      return;
    }

    if (action === "calculate") {
      // Enter를 누른 후 또 Enter를 누를 경우
      if (previousKey === "calculate") {
        // 현재 화면에 보이는 값에 두 번째로 입력한 피연산자 operatorForAdvanced 연산자로 계산
        const answer = calculate(display.textContent, operatorForAdvanced, operand2);

        // 화면에 결과값 보여주기
        display.textContent = answer;

        // 계산한 결과값(answer)을 previousNum에 저장
        previousNum = answer;

        return;
      }

      // Enter를 누른 경우

      // display.textContent : 현재 화면에 보이는 값
      answer = calculate(firstNum, operatorForAdvanced, display.textContent);

      // 화면에 결과값 보여주기
      display.textContent = answer;

      // 계산한 결과값 previousNum에 저장
      previousNum = answer;

      // 계산 후 첫번째 피연산자 초기화
      firstNum = "";

      // 현재 상태 : calculate
      previousKey = "calculate";
    }
  }
});
