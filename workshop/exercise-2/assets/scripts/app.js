class FrogRace {
  constructor() {
    this.track = document.querySelector('#track');
    this.trackLength = track.offsetWidth;
    this.racingFrogs = Array.from(frogStable);
    this.numberOfRacers = 3;
    this.ranking = [];
  }

  determineRacers() {
    while (this.racingFrogs.length > this.numberOfRacers) {
      let index = Math.floor(Math.random() * this.racingFrogs.length);
      this.racingFrogs.splice(index, 1);
    }
    return self;
  }

  createTrack() {
    for (let i = 0; i < this.numberOfRacers; i++) {
      let lane = document.createElement('li');
      let laneNumber = document.createElement('span');
      let frog = document.createElement('img');
      let frogProgress = document.createElement('span');

      this.racingFrogs[i].frog = frog;
      this.racingFrogs[i].progress = 0;
      this.racingFrogs[i].lane = `frog-${i}`;

      lane.setAttribute('id', `frog-${i}`);
      laneNumber.textContent = i + 1;

      frog.setAttribute('src', 'assets/images/frogx50.png');
      frog.setAttribute('alt', this.racingFrogs[i].number);
      frog.setAttribute('class', 'frog');
      frogProgress.setAttribute('id', this.racingFrogs[i].name);

      this.track.appendChild(lane);
      lane.appendChild(laneNumber);
      lane.appendChild(frog);
      lane.appendChild(frogProgress);
    }
    return self;
  }

  startRace() {
    this.racingFrogs.forEach(frog => this.runRace(frog));
  }

  runRace(frog) {
    let progress = frog.progress;
    const distanceHopped = (Math.floor(Math.random() * 100) / this.trackLength) * 100;

    let bounce = setInterval(() => {
      progress += distanceHopped;

      if (progress > 100) {
        progress = 100;

        this.ranking.push(frog);
        console.log(frog.name, ' has finished!');
        this.placePodium(frog);

        clearInterval(bounce);
      }
      else {
        document.querySelector(`#${frog.lane} .frog`).style.left = `${progress}%`;
      }
    }, Math.random() * 1000);
  }

  placePodium(frog) {
    frog.frog.style.transform = 'scale(0.1)';

    let rank = this.ranking.indexOf(frog);
    let podiumSection = document.querySelector('.podium');
    let stand = document.querySelector(`#frog-seat-${rank + 1}`);
    let namePlace = document.querySelector(`#frog-name-${rank + 1}`);
    stand.style.transition = 'transform 2s';

    setTimeout(() => {
      frog.frog.style.transform = 'scale(1)';
      frog.frog.style.left = 0;
      stand.appendChild(frog.frog);
      namePlace.textContent = frog.name;
    }, 2000);
  }

  restartRace() {
    clearInterval(bounce);
    this.startRace()
  }
}

let frogRace = new FrogRace();
frogRace.determineRacers();
frogRace.createTrack();
frogRace.startRace();

newRace = document.querySelector('#new-race');
newRace.addEventListener('click', () => {
  // frogRace.restartRace();
});
