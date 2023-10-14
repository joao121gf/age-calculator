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

  console.log(results[2].innerHTML);
  console.log(monthToday);

  function showAge() {
    results.forEach((i) => {
      i.classList.remove("active");
      i.classList.add("activeNone");

      let ageUser = yearToday - parseInt(year.value);
      let daysOff = dayToday - day.value;
      if (daysOff < 0) {
        daysOff += 30;
      }
      let monthOff = monthToday - month.value;
      if (monthToday - month.value <= 0 && dayToday < day.value) {
        monthOff += 11;
      }
      if (monthToday <= year.value && dayToday <= day.value) {
        ageUser -= 1;
      }
      if (day.value == dayToday && monthToday == month.value) {
        ageUser += 1;
        monthOff = 0
      }

      console.log(ageUser, monthOff, daysOff);
      results[2].innerHTML = ageUser;
      results[1].innerHTML = monthOff;
      results[0].innerHTML = daysOff;
    });
  }
  btn.addEventListener("click", showAge);
});
