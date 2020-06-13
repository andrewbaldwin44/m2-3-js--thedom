const TRACK = document.querySelector('#track');
const HEAD = document.querySelector('head');
const FROGS = 3;

let styles = document.createElement('link');
styles.setAttribute('rel', 'stylesheet');
styles.setAttribute('href', '../assets/styles.css');
HEAD.appendChild(styles);

let ranking = [];

function racingFrog(frog) {
  let progress = frog.progress;
  const trackWidth = track.offsetWidth;
  const distanceHopped = (Math.floor(Math.random() * 100) / trackWidth) * 100;

  const bounce = setInterval(() => {
    progress += distanceHopped;

    if (progress > 100) {
      progress = 100;
      console.log(frog.name, ' has finished!');
      clearInterval(bounce);

      ranking.push(frog);
    }

    document.querySelector(`#${frog.lane} .frog`).style.left = `${progress}%`;
  }, Math.random() * 1000);
}

racingFrogs = Array.from(frogStable);

function determineRacers() {
  while (racingFrogs.length > FROGS) {
    let index = Math.floor(Math.random() * racingFrogs.length);
    racingFrogs.splice(index, 1);
  }
}

determineRacers();
console.log(racingFrogs)
for (let i = 0; i < FROGS; i++) {
  console.log(i)
  let lane = document.createElement('li');
  let laneNumber = document.createElement('span');
  let frog = document.createElement('span');
  let frogProgress = document.createElement('span');

  racingFrogs[i].progress = 0;
  racingFrogs[i].lane = `frog-${i}`;

  lane.setAttribute('id', `frog-${i}`);
  laneNumber.textContent = i + 1;
  frog.textContent = racingFrogs[i].number;
  frog.setAttribute('class', 'frog');
  frog.style.backgroundColor = racingFrogs[i].color;
  frogProgress.setAttribute('id', racingFrogs[i].name);

  TRACK.appendChild(lane);
  lane.appendChild(laneNumber);
  lane.appendChild(frog);
  lane.appendChild(frogProgress);

  racingFrog(racingFrogs[i])
}
