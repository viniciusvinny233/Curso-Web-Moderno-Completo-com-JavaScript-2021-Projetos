function Timer() {
  this.seg = 0;

  this.min = 0;

  this.hour = 0;

  setInterval(() => {
    this.seg++;

    if (this.min == 0 && this.hour == 0) {
      console.log(`${this.seg}s`);
    }
    if (this.min != 0 && this.hour == 0) {
      console.log(`${this.min}min ${this.seg}s`);
    }
    if (this.hour != 0) {
      console.log(`${this.hour}hrs ${this.min}min ${this.seg}s`);
    }

    switch (this.seg) {
      case 60:
        this.min++;
        break;
    }

    switch (this.min) {
      case 60:
        this.hour++;
        break;
    }

    if (this.seg == 60) {
      this.seg = 0;
    }
    if (this.min == 60) {
      this.min = 0;
    }
    if (this.hour == 24) {
      console.log(`24hrs 0min 0s`);
      this.hour = 0;
    }
  }, 1000);
}

new Timer();
