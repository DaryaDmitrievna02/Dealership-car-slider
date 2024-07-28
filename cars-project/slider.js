import "./main.scss";
import car1 from "./car1.png";
import car2 from "./car2.png";

const DESCRIPTION = [
  {
    name: "Mercedes-Benz ML",
    description:
      "Гамма двигателей представлена тремя моторами: 4-цилиндровым 2,1-литровым дизельным двигателем мощностью 204 л.с., 6-цилиндровым 3.0-литровым турбодизелем, выдающим 258 л.с. мощности, а также 4,7-литровым бензиновым двигателем, развивающим мощность в 306 «лошадок». Минимальный расход топлива для моторов составляет 6 л на 100 км. А максимальный разгон достигает 245 км/ч. Mercedes-Benz ML-class – отличный комфортный внедорожник, который способен удовлетворить самых требовательных владельцев.",
  },
  {
    name: "Mercedes-Benz G-class",
    description:
      " Комфорт внедорожника дополняется подогревом сидений и центральным подлокотником между передними сидениями, куда встроен вещевой ящик и подстаканники. Гамма двигателей автомобиля представлена 6-цилиндровым 3,0-литровым двигателем мощностью 211 л.с. или же 8-цилиндровым 5,5-литровым бензиновым мотором, выдающим мощность в 388 «лошадок». Расход топлива, в зависимости от двигателя, составит от 11 до 15 л на 100 км. В паре с двигателями работает 7-ступенчатая автоматическая коробка передач. Mercedes-Benz G-class – просторный внедорожник, обеспечивающий водителя и пассажиров максимальным комфортом при длительных поездках даже по сложному бездорожью.",
  },
  {
    name: "Mercedes-Benz ML",
    description:
      "Гамма двигателей представлена тремя моторами: 4-цилиндровым 2,1-литровым дизельным двигателем мощностью 204 л.с., 6-цилиндровым 3.0-литровым турбодизелем, выдающим 258 л.с. мощности, а также 4,7-литровым бензиновым двигателем, развивающим мощность в 306 «лошадок». Минимальный расход топлива для моторов составляет 6 л на 100 км. А максимальный разгон достигает 245 км/ч. Mercedes-Benz ML-class – отличный комфортный внедорожник, который способен удовлетворить самых требовательных владельцев.",
  },
  {
    name: "Mercedes-Benz G-class",
    description:
      " Комфорт внедорожника дополняется подогревом сидений и центральным подлокотником между передними сидениями, куда встроен вещевой ящик и подстаканники. Гамма двигателей автомобиля представлена 6-цилиндровым 3,0-литровым двигателем мощностью 211 л.с. или же 8-цилиндровым 5,5-литровым бензиновым мотором, выдающим мощность в 388 «лошадок». Расход топлива, в зависимости от двигателя, составит от 11 до 15 л на 100 км. В паре с двигателями работает 7-ступенчатая автоматическая коробка передач. Mercedes-Benz G-class – просторный внедорожник, обеспечивающий водителя и пассажиров максимальным комфортом при длительных поездках даже по сложному бездорожью.",
  },
];

window.onload = function () {
  const carSlider = document.getElementById("cars__slider");
  carSlider.innerHTML += ` <div id="car__container1" class="car__container current">
    <img src=${car1} alt="">
      </div>
      <div id="car__container2" class="car__container">
    <img src=${car2} alt="">
      </div>

        <div id="car__container2" class="car__container">
    <img src=${car1} alt="">
      </div>

        <div id="car__container2" class="car__container">
    <img src=${car2} alt="">
      </div>
    `;

  const carDescription = document.getElementById("car__description");
  carDescription.innerHTML = `       
            
            <h1>${DESCRIPTION[0].name}</h1>
            <p>
            ${DESCRIPTION[0].description}
            </p>
    
    `;

  let current = 0;

  document.getElementById("btn-next").addEventListener("click", function (e) {
    document.getElementById("btn-next").disabled = true;
    setTimeout(() => {
      document.getElementById("btn-next").disabled = false;
    }, 600);
    swapCar(1);
  });
  document.getElementById("btn-return").addEventListener("click", function () {
    document.getElementById("btn-return").disabled = true;
    setTimeout(() => {
      document.getElementById("btn-return").disabled = false;
    }, 600);
    swapCar(-1);
  });

  function swapCar(direction) {

    let slides = document.getElementsByClassName("car__container");

    if (direction == 1 && current < slides.length - 1) {
      current++;
      slides[current - 1].classList.add("swapLeft");
      slides[current - 1].classList.remove("current");
      slides[current].classList.add("current");

      carDescription.classList.add("opacityHide");
      carDescription.classList.remove("opacityShow");
      setTimeout(() => {
        carDescription.innerHTML = `            
      <h1>${DESCRIPTION[current].name}</h1>
      <p>
      ${DESCRIPTION[current].description}
      </p>
`;

        carDescription.classList.remove("opacityHide");
        carDescription.classList.add("opacityShow");
      }, 500);
    }

    if (direction == -1 && current > 0) {
      slides[current - 1].classList.add("current");
      slides[current - 1].classList.remove("swapLeft");
      slides[current].classList.remove("current");
      current--;

      carDescription.classList.add("opacityHide");
      carDescription.classList.remove("opacityShow");

      setTimeout(() => {
        carDescription.innerHTML = `            
      <h1>${DESCRIPTION[current].name}</h1>
      <p>
      ${DESCRIPTION[current].description}
      </p>
`;

        carDescription.classList.remove("opacityHide");
        carDescription.classList.add("opacityShow");
      }, 500);
    }
  }
};

window.addEventListener("resize", () => {
  let slides = document.getElementsByClassName("car__container");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add("no-transition");
  }

  setTimeout(() => {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("no-transition");
    }
  }, 50);
});
