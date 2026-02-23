"use strict";
const cmBtn = document.querySelector("#CMbtn");
const mBtn = document.querySelector("#Mbtn");
const kmBtn = document.querySelector("#KMbtn");
const inchBtn = document.querySelector("#Inchbtn");
const subBtn = document.querySelector(".submit");
const btnAll = document.querySelectorAll(".btn");

const removeActive = function () {
  for (let i = 0; i < btnAll.length; i++) {
    btnAll[i].classList.remove("active");
  }
};
for (const btn of btnAll) {
  btn.addEventListener("click", function (e) {
    removeActive();
    e.currentTarget.classList.add("active");
  });
}
subBtn.addEventListener("click", function () {
  const inputText = Number(document.querySelector("#inputValue").value);
  const resultShow = document.querySelector("textarea");

  let activeid;
  let btnName;
  let result = "";
  for (const btn of btnAll) {
    if (btn.classList.contains("active")) {
      activeid = btn.id;
      btnName = btn.textContent;
      break;
    }
  }
  const rates = {
    CMbtn: { M: 0.01, KM: 0.00001, Inch: 0.39 },
    Mbtn: { CM: 100, KM: 0.001, Inch: 39.37 },
    KMbtn: { M: 1000, CM: 100000, Inch: 39370 },
    Inchbtn: { M: 0.0254, KM: 0.0000254, CM: 2.54 },
  };
  for (const [key, value] of Object.entries(rates[activeid])) {
    result += `${inputText} ${btnName} = ${inputText * value} ${key} \n`;
  }
  resultShow.value = result;
});
