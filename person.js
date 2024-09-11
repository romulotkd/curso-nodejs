class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    return `Meu nome é ${this.name}!!`;
  }
}

module.exports = {
  Person,
};
