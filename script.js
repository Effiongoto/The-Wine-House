let counter1 = 0;
let counter2 = 1;
let bool = true;

const sections = document.querySelectorAll("section");
const progress = document.querySelector(".progress h2");
const circles = document.querySelectorAll(".circle");
const menu = document.querySelector(".menu");


//progresscounter function to dynamically update the progress info at 
//the bottom of the page when the page is changed
const progressCounter = () => {
  progress.textContent = `${counter2}/${sections.length}`;

  Array.from(circles).forEach((circle) => {
    circle.style.backgroundColor = "transparent";
  });
  document.querySelector(`.circle-${counter2}`).style.backgroundColor = "#ddd";
};


//pageController function to reset the counter and update the page
//when the when you get to the end 
const pageController = () => {
  bool = true;
  if (counter1 === 5) {
    Array.from(sections).forEach((section) => {
      section.style.left = "0";
    });
    counter1 = 0;
    counter2 = 1;
    progressCounter();
    bool = false;
  }

  if (counter1 === -1) {
    Array.from(sections).forEach((section) => {
      if (section.classList[0] === "section-5") {
        return;
      }
      section.style.left = "-100vw";
    });
    counter1 = 4;
    counter2 = 5;
    progressCounter();
    bool = false;
  }
  progressCounter();
  return bool;
};


//mouse wheel function to dynamically change the page as you 
//scroll up or down
window.addEventListener("wheel", (e) => {
  const deltaY = e.deltaY > 0;

  if (deltaY) {
    counter1++;
    counter2++;
  } else {
    counter1--;
    counter2--;
  }

  pageController();
  progressCounter();
  console.log(counter1, counter2);

  if (bool) {
    document.querySelector(
      `.section-${deltaY ? counter1 : counter2}`
    ).style.left = `${deltaY ? "-100vw" : "0"}`;
  }
});


//left button and right button functions to dynamically change the page as you 
//click any of them
document.querySelector(".left-btn").addEventListener("click", () => {
  counter1--;
  counter2--;
  pageController() &&
    (document.querySelector(`.section-${counter2}`).style.left = "0");
});

document.querySelector(".right-btn").addEventListener("click", () => {
  counter1++;
  counter2++;
  pageController() &&
    (document.querySelector(`.section-${counter1}`).style.left = "-100vw");
  document.querySelector(`.section-${counter2}`).style.left = "0";
});

//navigation button functions to dynamically change the page as you 
//click any of them
document.querySelector(".page1").addEventListener("click", () => {
  Array.from(sections).forEach((section) => {
      section.style.left = "0";
    });


  counter1 = 0;
  counter2 = 1;
  progressCounter();
});

document.querySelector(".page2").addEventListener("click", () => {
  Array.from(sections).forEach((section) => {
      if (section.classList[0] === "section-2") {
        section.style.left = "0";
        return;
      }
      section.style.left = "-100vw";
    });

  counter1 = 1;
  counter2 = 2;
  progressCounter();
});

document.querySelector(".page3").addEventListener("click", () => {
  Array.from(sections).forEach((section) => {
      if (section.classList[0] === "section-3") {
        section.style.left = "0";
        return;
      }
      section.style.left = "-100vw";
    });

  counter1 = 2;
  counter2 = 3;
  progressCounter();
});

document.querySelector(".page4").addEventListener("click", () => {
  Array.from(sections).forEach((section) => {
      if (section.classList[0] === "section-4") {
        section.style.left = "0";
        return;
      }
      section.style.left = "-100vw";
    });

  counter1 = 3;
  counter2 = 4;
  progressCounter();
});

document.querySelector(".page5").addEventListener("click", () => {
  Array.from(sections).forEach((section) => {
      if (section.classList[0] === "section-5") {
        section.style.left = "0";
        return;
      }
      section.style.left = "-100vw";
    });

  counter1 = 4;
  counter2 = 5;
  progressCounter();
});








//function to make the background darker as you hover over
//grape image on page 3
document.querySelector(".grapes-img").addEventListener("mouseover", () => {
  document.querySelector(".section-3-wrapper").style.opacity = ".5";
});

document.querySelector(".grapes-img").addEventListener("mouseout", () => {
  document.querySelector(".section-3-wrapper").style.opacity = "1";
});

//To add the change class to the navbar once the menu button is clicked
menu.addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("change");
});
