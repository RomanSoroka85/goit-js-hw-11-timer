import css from "./css/style.css";

// new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jul 17, 2019"),
// });

// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
// console.dir(Date);
// console.log(Date.now());
// console.log(Date.parse("Oct 1 900"));
// console.log(Date.parse("Oct 1 2020"));

const refs = {
  //   days: document.getElementById("days"),
  //   hours: document.getElementById("hours"),
  //   minutes: document.getElementById("minutes"),
  //   seconds: document.getElementById("seconds"),
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  minutes: document.querySelector('[data-value="mins"]'),
  seconds: document.querySelector("[data-value='secs']"),
  //   startBtn: document.querySelector('[data-action="start"]'),
  //   stopBtn: document.querySelector('[data-action="stop"]'),
};
// console.log(refs.days);
class Timer {
  constructor(startTime, stopTime) {
    this.startTime = startTime;
    this.stopTime = stopTime;
    this.deltaTime = 0;
    this.interval = "";
  }

  pad(value) {
    return String(value).padStart(2, 0);
  }

  getDays(time) {
    return this.pad(Math.floor(time / 1000 / 60 / 60 / 24));
  }
  getHours(time) {
    return this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
  }
  getMins(time) {
    return this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  }

  getSecs(time) {
    return this.pad(Math.floor((time % (1000 * 60)) / 1000));
  }

  updateClockFace(time) {
    if (time) {
      refs.days.textContent = this.getDays(time);
      refs.hours.textContent = this.getHours(time);
      refs.minutes.textContent = this.getMins(time);
      refs.seconds.textContent = this.getSecs(time);
    } else {
      refs.days.textContent = "00";
      refs.hours.textContent = "00";
      refs.minutes.textContent = "00";
      refs.seconds.textContent = "00";
    }
  }

  updateDate() {
    let currentTime = Date.now();
    this.deltaTime = Date.parse(this.stopTime) - currentTime;
    this.updateClockFace(this.deltaTime);
  }

  start() {
    this.interval = setInterval(() => {
      this.updateDate();
    }, 1000);
  }
  stop() {
    clearInterval(this.interval);
    this.updateClockFace();
  }
}

const timer = new Timer("1 sept 2020 13:54:46", "31 dec 2020 03:05:15");
timer.updateDate();
timer.start();
