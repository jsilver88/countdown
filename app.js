const year = new Date().getFullYear()

const newYear = new Date(year, 0, 1).getTime()
const newYearNextYear = new Date(year + 1, 0, 1).getTime()

const month = new Date().getMonth()

let timer = setInterval(() => {
  const today = new Date().getTime()

  let difference
  if (month > 0) {
    difference = newYearNextYear - today
  } else {
    difference = newYear - today
  }

  let days = Math.floor(difference / (1000 * 60 * 60 * 24))
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((difference % (1000 * 60)) / 1000)

  document.getElementById('timer').innerHTML = `
  <div class="days"><div class="numbers">${days}</div>days</div>
  <div class="hours"><div class="numbers">${hours}</div>hours</div>
  <div class="minutes"><div class="numbers">${minutes}</div>minutes</div>
  <div class="seconds"><div class="numbers">${seconds}</div>seconds</div>
  `
}, 1000)
