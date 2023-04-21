// Factory Function......
function createCourse(title) {
  return {
    title: title,
    enroll() {
      console.log("You are succesfully enrolled ");
    },
  };
}
console.log(createCourse());

//Constructor Function......
function Course(title) {
  (this.title = title),
    (this.enroll = function () {
      console.log("You are succesfully enrolled.");
    });
}
const course = new Course("JavaScript");
console.log(course);

//Using delete keyword......

delete course.title;
course.checkEnrollment = function () {
  console.log("80 users are enrolled.");
};
console.log(course);

//
console.log(course.constructor);
