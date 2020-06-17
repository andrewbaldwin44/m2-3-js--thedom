class FrogRace {
  constructor() {
    this.track = document.querySelector('#track');
    this.trackLength = track.offsetWidth;
    this.racingFrogs = this.cloneFrogStable();
    this.numberOfRacers = 3;
    this.ranking = [];
  }

  cloneFrogStable() {
    return Array.from(frogStable);
  }

  determineRacers() {
    while (this.racingFrogs.length > this.numberOfRacers) {
      let index = Math.floor(Math.random() * this.racingFrogs.length);
      this.racingFrogs.splice(index, 1);
    }

    return this;
  }

  createTrack() {
    for (let i = 0; i < this.numberOfRacers; i++) {
      let lane = document.createElement('li');
      let laneNumber = document.createElement('span');

      lane.setAttribute('id', `frog-${i}`);
      laneNumber.textContent = i + 1;

      this.track.appendChild(lane);
      lane.appendChild(laneNumber);
    }
    return this;
  }

  createFrogs() {
    for (let i = 0; i < this.numberOfRacers; i++) {
      let lane = document.querySelector(`#frog-${i}`);
      let frog = document.createElement('img');
      let frogProgress = document.createElement('span');

      this.racingFrogs[i].frog = frog;
      this.racingFrogs[i].progress = 0;
      this.racingFrogs[i].lane = `frog-${i}`;

      frog.setAttribute('src', `assets/images/${this.racingFrogs[i].color}.png`);
      frog.setAttribute('alt', this.racingFrogs[i].number);
      frog.setAttribute('class', 'frog');
      frogProgress.setAttribute('id', this.racingFrogs[i].name);

      lane.appendChild(frog);
      lane.appendChild(frogProgress);
    }

    return this;
  }

  startRace() {
    newRace.disabled = true;
    this.racingFrogs.forEach(frog => this.runRace(frog));
  }

  runRace(frog) {
    let progress = frog.progress;
    let currentProgress = document.querySelector(`#${frog.lane} .frog`);
    const distanceHopped = (Math.floor(Math.random() * 100) / this.trackLength) * 100;

    let bounce = setInterval(() => {
      progress += distanceHopped;

      if (progress > 100) {
        progress = 100;

        this.ranking.push(frog);
        this.placePodium(frog);

        clearInterval(bounce);
      }
      else {
        currentProgress.style.left = `${progress}%`;
      }
    }, Math.random() * 1000);
  }

  placePodium(frog) {
    frog.frog.style.transform = 'scale(0.1)';

    let rank = this.ranking.indexOf(frog);
    let stand = document.querySelector(`#frog-seat-${rank + 1}`);
    let numberPlace = document.querySelector(`#frog-number-${rank + 1}`)
    let namePlace = document.querySelector(`#frog-name-${rank + 1}`);

    setTimeout(() => {
      frog.frog.style.transform = 'scale(1)';
      frog.frog.style.left = 0;
      stand.appendChild(frog.frog);
      numberPlace.textContent = `#${frog.number}`;
      namePlace.textContent = frog.name;

      if (this.ranking.length == this.numberOfRacers) newRace.disabled = false;
    }, 2000);
  }

  removeTextContent(elements) {
    [...elements].forEach(element => element.textContent = '');
  }

  removePreviousRacers() {
    let frogSeats = document.querySelectorAll('.frog-seat');
    let frogNumbers = document.querySelectorAll('.frog-number');
    let frogNames = document.querySelectorAll('.frog-name');

    [...frogSeats].forEach(frogSeat => frogSeat.firstChild.remove());
    this.removeTextContent(frogNumbers);
    this.removeTextContent(frogNames);
  }

  newRace() {
    this.removePreviousRacers();
    this.ranking = [];
    this.racingFrogs = this.cloneFrogStable();
    this.determineRacers();
    this.createFrogs();
    this.startRace();
  }
}

let newRace = document.querySelector('#new-race');
newRace.addEventListener('click', () => {
  frogRace.newRace();
});

let frogRace = new FrogRace();
frogRace.determineRacers().createTrack().createFrogs().startRace();
