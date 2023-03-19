// Zodiac Signs
let signs = {
  Aries: "Mar 21-Apr 19",
  Taurus: "Apr 20-May 20",
  Gemini: "May 20-Jun 20",
  Cancer: "Jun 21-Jul 22",
  Leo: "Jul 23-Aug 22",
  Virgo: "Aug 23-Sep 22",
  Libra: "Sep 23-Oct 22",
  Scorpio: "Oct 23-Nov 21",
  Sagittarius: "Nov 22-Dec 21",
  Capricorn: "Dec 22-Jan 19",
  Aquarius: "Jan 20-Feb 18",
  Pisces: "Feb 19-Mar 20",
};
const randomWisdom = {
  fortune: [
    "good luck",
    "bad luck",
    "a good day",
    "a terrible day",
    "an amazing week",
  ],
  advice: [
    "eat chocolate",
    "go for a jog",
    "call your loved one",
    "smile more",
    "exercise",
  ],
};

const rng = (num) => {
  return Math.floor(Math.random() * num);
};

const userSign = (day, month) => {
  let monthWith30days = ["jan", "mar", "may", "jul", "aug", "oct", "dec"];
  let monthWith31days = ["apr", "jun", "sep", "nov"];

  if (monthWith31days.includes(month) && day > 31) {
    day = 31;
  }

  if (monthWith30days.includes(month) && day > 30) {
    day = 30;
  }

  if (month === "Feb" && day > 28) {
    day = 28;
  }
  if (day < 1) {
    day = 1;
  }

  for (let sign in signs) {
    let [start, end] = signs[sign].split("-");
    // splitting the start and end dates for a sign into variables
    let [startM, startD] = start.split(" ");
    let [endM, endD] = end.split(" ");

    // returning sign if day and month within the constraints
    if (
      (startM === month && startD <= day) ||
      (endM === month && endD >= day)
    ) {
      return sign;
    }
  }
};

const genHoroscope = (day, month) => {
  const sign = userSign(day, month);
  document.querySelector(".sign").textContent = `Your sign is ${sign}`;
  for (prop in randomWisdom) {
    let optionIndex = rng(randomWisdom[prop].length);
    let wisdom = "N/A";
    switch (prop) {
      case "fortune":
        wisdom = `You are having ${randomWisdom[prop][optionIndex]}.`;
        break;
      case "advice":
        wisdom = `You should ${randomWisdom[prop][optionIndex]}.`;
        break;
      default:
        wisdom = "N/A";
    }
    document.querySelector(`.${prop}`).textContent = wisdom;
  }
};

document.querySelector(".gen-btn").addEventListener("click", () => {
  let month = document.getElementById("monthSelect").value;
  let day = parseInt(document.getElementById("daySelect").value);
  if (!month || !day) return;
  genHoroscope(day, month);
  console.log(day, month);
});

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// add month options
const monthSelect = document.getElementById("monthSelect");
months.forEach((month) => {
  const option = document.createElement("option");
  option.value = month.substring(0, 3);
  option.text = month;
  monthSelect.appendChild(option);
});

const daySelect = document.getElementById("daySelect");
// create blank option
const blankOption = document.createElement("option");
blankOption.value = null;
blankOption.text = "-day-";
daySelect.appendChild(blankOption);
const daysInMonth = (month) => {
  return new Date(new Date().getFullYear(), month, 0).getDate();
};

const changeAvailableDays = () => {
  while (daySelect.firstChild) {
    daySelect.removeChild(daySelect.firstChild);
  }
  console.log("ha");
  console.log(monthSelect, monthSelect.value);
  const monthIndex = months.findIndex(
    (m) => m.substring(0, 3) === monthSelect.value
  );
  console.log(monthIndex);
  const days = daysInMonth(monthIndex + 1);
  const blankOption = document.createElement("option");
  blankOption.value = null;
  blankOption.text = "-day-";
  daySelect.appendChild(blankOption);
  for (let i = 1; i <= days; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    daySelect.appendChild(option);
  }
};
changeAvailableDays();

monthSelect.onchange = changeAvailableDays;
