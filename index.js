const navList = document.getElementById("nav-list");
const mainContainer = document.querySelector(".main-container");
const nbaContainer = document.querySelector(".nba-container");
const proAContainer = document.querySelector(".pro-a-container");
const headerContainerH1 = document.querySelector(".header-container > h1");
// const mouseMove = document.getElementById("mousemove");
const arrowRight1 = document.querySelector(".arrow-right-1");
const arrowRight2 = document.querySelector(".arrow-right-2");
const arrowLeft1 = document.querySelector(".arrow-left-1");
const arrowLeft2 = document.querySelector(".arrow-left-2");

const arrayContainer = [mainContainer, nbaContainer, proAContainer];
window.addEventListener("load", () => {
  navList.style.transform = "translateX(0)";
});

// window.addEventListener("scroll", () => {
//   console.log(window.scrollY);
//   if (window.scrollY > 200) {
//     mainContainer.style.transform = "translateX(0)";
//   }
// });
// } else {
//   mainContainer.style.transform = "translateX(-750px)";
// }
//     if ((window.scrollY > 900) & (window.scrollY < 1300)) {
//         nbaContainer.style.opacity = "1";
//     } else {
//         nbaContainer.style.opacity = "0";
//     }
// });
// window.addEventListener("mousemove", (e) => {
//   mouseMove.style.left = e.pageX + "px";
//   mouseMove.style.top = e.pageY + "px";
//   console.log(e);
// });

arrowRight1.addEventListener("click", () => {
  mainContainer.style.transform = "translateX(-1500px)";
  nbaContainer.style.transform = "translate(-1300px)";
});
arrowLeft1.addEventListener("click", () => {
  mainContainer.style.transform = "translateX(0)";
  nbaContainer.style.transform = "translateX(0)";
});

arrowRight2.addEventListener("click", () => {
  nbaContainer.style.transform = "translateX(-2500px)";
  proAContainer.style.transform = "translateX(-2600px)";
});
arrowLeft2.addEventListener("click", () => {
  nbaContainer.style.transform = "translateX(-1300px)";
  proAContainer.style.transform = "translateX(0)";
});
