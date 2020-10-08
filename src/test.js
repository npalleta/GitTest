/*jshint esversion: 6 */

class MyClass {
  constructor(name) {
      console.log("I am a MyClass object .. ", name);
  }

  get methodA() {
    return 'This is the method A';
  }

  test() {
    console.log('This is a test A B C D F G H I J K');
  }
}

var myclass = new MyClass('1234');