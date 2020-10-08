/*jshint esversion: 6 */

class MyClass {
  constructor(name) {
      console.log("I am a MyClass object .. ", name);
  }

  get methodA() {
    return 'This is the method A';
  }

  test() {
    return 'This is a test';
  }
}

var myclass = new MyClass('1234');