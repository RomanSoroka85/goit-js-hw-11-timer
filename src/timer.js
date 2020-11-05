// console.dir(Date);
// console.log(Date.now());
// console.log(Date.parse("Oct 1 900"));
// console.log(Date.parse("Oct 1 2020"));

// const refs = {
//   days: document.getElementById("days"),
//   hours: document.getElementById("hours"),
//   minutes: document.getElementById("minutes"),
//   seconds: document.getElementById("seconds"),
//   startBtn: document.querySelector('[data-action="start"]'),
//   stopBtn: document.querySelector('[data-action="stop"]'),
// };

// class Timer {
//   constructor(startTime, stopTime) {
//     this.startTime = startTime;
//     this.stopTime = stopTime;
//     this.deltaTime = 0;
//     this.interval = "";
//   }

//   pad(value) {
//     return String(value).padStart(2, 0);
//   }

//   getDays(time) {
//     return this.pad(Math.floor(time / 1000 / 60 / 60 / 24));
//   }
//   getHours(time) {
//     return this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//     );
//   }
//   getMins(time) {
//     return this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   }

//   getSecs(time) {
//     return this.pad(Math.floor((time % (1000 * 60)) / 1000));
//   }

//   updateClockFace(time) {
//     if (time) {
//       refs.days.textContent = this.getDays(time);
//       refs.hours.textContent = this.getHours(time);
//       refs.minutes.textContent = this.getMins(time);
//       refs.seconds.textContent = this.getSecs(time);
//     } else {
//       refs.days.textContent = "00";
//       refs.hours.textContent = "00";
//       refs.minutes.textContent = "00";
//       refs.seconds.textContent = "00";
//     }
//   }

//   start() {
//     this.interval = setInterval(() => {
//       let currentTime = Date.now();
//       this.deltaTime = Date.parse(this.stopTime) - currentTime;
//       this.updateClockFace(this.deltaTime);
//     }, 1000);
//   }
//   stop() {
//     clearInterval(this.interval);
//     this.updateClockFace();
//   }
// }

// const timer = new Timer("1 sept 2020 13:54:46", "2 oct 2020 03:05:15");
// console.log(timer);
// refs.startBtn.addEventListener("click", () => {
//   timer.start();
// });

// refs.stopBtn.addEventListener("click", () => {
//   timer.stop();
// });