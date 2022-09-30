export default class Slider {
  config = {
    leftArrow: true,
    rightArrow: true
  }
  leftArrow = document.querySelector('.slider__arrow_left')
  rightArrow = document.querySelector('.slider__arrow_right')
  listImg = document.querySelectorAll('.slider__img')

  constructor(obj = {}) {
    for (const key in obj) {
      if(this.config[key]) {
        this.config[key] = obj[key]
      }
    }

    this.setLeftArrow()
    this.setRightArrow()
  }

  setLeftArrow() {
    this.leftArrow.hidden = !this.config.leftArrow;
  }

  setRightArrow() {
    this.rightArrow.hidden = !this.config.rightArrow;
  }


}