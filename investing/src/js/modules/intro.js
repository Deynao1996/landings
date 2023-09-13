export default class Intro {
  constructor({ intro } = {}) {
    this.intro = intro
  }

  test(label) {
    console.log(this.intro)
    console.log(label)
  }

  init() {
    this.test('This is Intro!')
  }
}
