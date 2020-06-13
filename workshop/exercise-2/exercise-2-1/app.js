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
      let frog = document.createElement('span');
      let frogProgress = document.createElement('span');

      this.racingFrogs[i].progress = 0;
      this.racingFrogs[i].lane = `frog-${i}`;

      lane.setAttribute('id', `frog-${i}`);
      laneNumber.textContent = i + 1;
      frog.textContent = this.racingFrogs[i].number;
      frog.setAttribute('class', 'frog');
      frog.style.backgroundColor = this.racingFrogs[i].color;
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

    const bounce = setInterval(() => {
      progress += distanceHopped;

      if (progress > 100) {
        progress = 100;
        console.log(frog.name, ' has finished!');
        clearInterval(bounce);

        this.ranking.push(frog);
      }

      document.querySelector(`#${frog.lane} .frog`).style.left = `${progress}%`;
    }, Math.random() * 1000);
  }
}

let frogRace = new FrogRace();
frogRace.determineRacers();
frogRace.createTrack();
frogRace.startRace();
