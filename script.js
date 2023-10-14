window.addEventListener("load", function () {
  const day = document.querySelector(".dayData");
  const month = document.querySelector(".mounthData");
  const year = document.querySelector(".yearData");

  const btn = document.querySelector(".btn");

  const results = [
    document.querySelector(".dResults"),
    document.querySelector(".mResults"),
    document.querySelector(".yResults"),
  ];
  let dateActl = new Date();
  let dayToday = dateActl.getDate();
  let monthToday = dateActl.getMonth() + 1;
  let yearToday = dateActl.getFullYear();

  function showAge() {
    const p = document.querySelectorAll(".p");
    console.log(p);
    const input = document.querySelectorAll("input");
    const secondP = document.querySelectorAll(".secondP");
    function check() {
      let cont = 0;
      if (day.value <= 0 || day.value > 31 || isNaN(day.value)) {
        cont += 1;
        secondP[0].style.opacity = 1;
      } else {
        secondP[0].style.opacity = 0;
      }
      if (month.value < 1 || month.value > 12 || isNaN(month.value)) {
        cont += 1;
        secondP[1].style.opacity = 1;
      } else {
        secondP[1].style.opacity = 0;
      }
      if (year.value < 1500 || year.value > 2023 || isNaN(month.value)) {
        cont += 1;
        secondP[2].style.opacity = 1;
      } else {
        secondP[2].style.opacity = 0;
      }

      if (cont > 0) {
        input.forEach((i) => {
          i.classList.add("errorActive");
        });
        p.forEach((i) => {
          i.classList.add("errorActive");
        });
      } else {
        input.forEach((i) => {
          i.classList.remove("errorActive");
        });
        p.forEach((i) => {
          i.classList.remove("errorActive");
        });
        return (check = true);
      }
    }
    check();
    if (check === true) {
      math();
    }
    function math() {
      results.forEach((i) => {
        i.classList.remove("active");
        i.classList.add("activeNone");

        let ageUser = yearToday - parseInt(year.value);
        let daysOff = dayToday - day.value;

        let monthOff = monthToday - month.value;
        if (monthToday < month.value) {
          ageUser -= 1;
          monthOff += 12;
        }
        if (daysOff < 0) {
          daysOff += 30;
          monthOff -= 1;
        }

        if (day.value == dayToday && monthToday == month.value) {
          ageUser += 1;
          monthOff = 0;
        }

        results[2].innerHTML = ageUser;
        results[1].innerHTML = monthOff;
        results[0].innerHTML = daysOff;
      });
    }
  }
  btn.addEventListener("click", showAge);
  this.document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      showAge();
    }
  });
});
