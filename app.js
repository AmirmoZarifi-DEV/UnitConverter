"use strict";
const cmBtn = document.querySelector("#CMbtn");
const mBtn = document.querySelector("#Mbtn");
const kmBtn = document.querySelector("#KMbtn");
const inchBtn = document.querySelector("#Inchbtn");
const subBtn = document.querySelector(".submit");
const result = document.querySelector(".result");
const btnAll = document.querySelectorAll(".btn");
const inputText = 10;

const removeActive = function () {
  for (let i = 0; i < btnAll.length; i++) {
    btnAll[i].classList.remove("active");
  }
};
cmBtn.addEventListener("click", function () {
  removeActive();
  cmBtn.classList.add("active");
});
mBtn.addEventListener("click", function () {
  removeActive();
  mBtn.classList.add("active");
});
inchBtn.addEventListener("click", function () {
  removeActive();
  inchBtn.classList.add("active");
});
kmBtn.addEventListener("click", function () {
  removeActive();
  kmBtn.classList.add("active");
});
subBtn.addEventListener("click", function () {
  const inputText = Number(document.querySelector("input").value);
  let cmResult = [];
  const conCM = {
    cm_To_M: inputText / 100,
    cm_To_Km: inputText / 100000,
    cm_To_Inch: inputText * 0.39,
  };
  const conKM = {
    KM_To_M: inputText * 1000,
    KM_To_CM: inputText * 100000,
    KM_To_Inch: inputText * (39370).toFixed(2),
  };
  const conM = {
    M_To_CM: inputText / 1000,
    M_To_Km: inputText * 100,
    M_To_Inch: inputText * (39.37).toFixed(2),
  };
  const conInch = {
    Inch_To_M: inputText * 0.0254,
    Inch_To_Km: inputText * 2.54,
    Inch_To_CM: inputText * 0.0000254,
  };

  if (cmBtn.classList.contains("active")) {
    for (const i of Object.entries(conCM)) {
      cmResult.push(...i);
      console.log(...i);
    }
    result.textContent = `${cmResult}`;
  } else if (kmBtn.classList.contains("active")) {
    for (const i of Object.entries(conKM)) {
      // cmResult.push(...i);
      console.log(...i);
    }
  } else if (mBtn.classList.contains("active")) {
    for (const i of Object.entries(conM)) {
      // cmResult.push(...i);
      console.log(...i);
    }
  } else if (inchBtn.classList.contains("active")) {
    for (const i of Object.entries(conInch)) {
      // cmResult.push(...i);
      console.log(...i);
    }
  }
});

// cmBtn.addEventListener("click", function () {
//   cmBtn.classList.add("active");
//   mBtn.classList.remove("active");
//   inchBtn.classList.remove("active");
//   kmBtn.classList.remove("active");
// });
// mBtn.addEventListener("click", function () {
//   mBtn.classList.add("active");
//   cmBtn.classList.remove("active");
//   inchBtn.classList.remove("active");
//   kmBtn.classList.remove("active");
// });
// inchBtn.addEventListener("click", function () {
//   inchBtn.classList.add("active");
//   mBtn.classList.remove("active");
//   cmBtn.classList.remove("active");
//   kmBtn.classList.remove("active");
// });
// kmBtn.addEventListener("click", function () {
//   kmBtn.classList.add("active");
//   mBtn.classList.remove("active");
//   inchBtn.classList.remove("active");
//   cmBtn.classList.remove("active");
// });
// subBtn.addEventListener("click", function () {
//   const inputText = Number(document.querySelector("input").value);

//   if (cmBtn.classList.contains("active")) {
//     console.log(`${inputText}CM = ${inputText / 100}M`);
//     console.log(`${inputText}CM = ${inputText / 100000}KM`);
//     console.log(`${inputText}CM = ${inputText * (0.39).toFixed(2)}Inch`);
//     result.textContent = `${inputText}CM = ${inputText / 100}M`;
//   } else if (kmBtn.classList.contains("active")) {
//     console.log(`${inputText}KM = ${inputText * 1000}M`);
//     console.log(`${inputText}KM = ${inputText * 100000}CM`);
//     console.log(`${inputText}KM = ${inputText * (39370).toFixed(2)}Inch`);
//   } else if (mBtn.classList.contains("active")) {
//     console.log(`${inputText}M = ${inputText / 1000}KM`);
//     console.log(`${inputText}M = ${inputText * 100}CM`);
//     console.log(`${inputText}M = ${inputText * (39.37).toFixed(2)}Inch`);
//   } else if (inchBtn.classList.contains("active")) {
//     console.log(`${inputText}Inch = ${inputText * 0.0254}M`);
//     console.log(`${inputText}Inch = ${inputText * 2.54}CM`);
//     console.log(`${inputText}Inch = ${inputText * 0.0000254}KM`);
//   }
// });
