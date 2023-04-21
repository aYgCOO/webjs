// let lecture = 10;
// let section = 3;
// let title = "JavaScript";

const course = {
  lecture: 10,
  section: 3,
  title: "JavaScript",
  notes: {
    introduction: "Welcome to Js course",
  },
  enroll() {
    console.log("You are succesfully enrolled.");
  },
};
function enroll() {
  console.log("You are succesfully enrolled.");
}
console.log(enroll());
console.log(course.title);
console.log(course);

function createCourse(hello) {
  return {
    hellow: hello,
    bollo() {
      console.log("Hello Bhi!");
    },
  };
}
