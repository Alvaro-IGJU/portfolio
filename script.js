const parallax = document.getElementById("parallax1");

// for (let i = 0; i < 20; i++) {

//     let element = document.createElement("div");
//     element.style.height = Math.random() * (15 - 10) + 10 + "px";
//     element.className = Math.random() < 0.5 ? "greenDiv-right" : "greenDiv-left";
//     ;

//     element.style.width = Math.random() * (100 - 50) + 50 + "px";

//     element.style.marginTop = Math.random() * (parallax.style.height - 100) + 100 + "px";
//     element.style.marginLeft = Math.random() * (parallax.style.width - 0);
//     parallax.appendChild(element);
// }

// let moveGreenDivs = setInterval(() => {
//     parallax.childNodes.forEach((element) => {
//       const widthParallax = parseInt(parallax.style.width);
//       const marginLeft = parseInt(element.style.marginLeft);

//       if (element.className === "greenDiv-left") {
//         if (marginLeft < 0) {
//             // Element has reached the left edge
//             marginLeft = "100";
//           } else {
//             // Move element to the left
//             element.style.marginLeft = marginLeft - 1 ;
//           }

//       } else {
//         if (marginLeft > widthParallax) {
//             // Element has reached the right edge
//             marginLeft = "0"
//           } else {
//             // Move element to the right
//             element.style.marginLeft = marginLeft + 1 ;
//           }
//       }
//     });
//   }, 0);

window.addEventListener("scroll", () => {
    
    const scrollY = window.scrollY;
    
    // if (scrollY > 500) {
    //     document.querySelectorAll(".green").forEach((element) => {
    //       element.querySelector("::first-letter").style.boxShadow = "0 0 5px 5px rgba(0, 255, 0, 0.7)";
    //     });
    //   } else {
    //     document.querySelectorAll(".green").forEach((element) => {
    //       element.querySelector("::first-letter").style.boxShadow = "none";
    //     });
    //   }
    let header = document.getElementById("header");
    let links = document.getElementsByClassName("link");
    
    if (scrollY > 1500) {
      header.style.color = "white";
    //   header.style.boxShadow = "5px 5px  50px #ffffffff";
      
      Array.from(links).forEach((element) => {
        element.style.color = "white";
      });
    } else {
      header.style.color = "black";
    //  header.style.boxShadow = "5px 5px  50px #a0a0a02d";
      Array.from(links).forEach((element) => {
        element.style.color = "black";
      });
    }

});