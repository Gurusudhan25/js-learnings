class School {
  constructor() {
    this.School = "SRM public school";
  }
}

//Teacher class is inheriting School class
class Teacher extends School {
  constructor(teacher_name, experience) {
    super();
    this.teacher_name = teacher_name;
    this.experience = experience;
  }
  experienceDetails() {
    console.log(
      this.teacher_name +
        " worked in " +
        this.School +
        " for " +
        this.experience +
        " years"
    );
  }
}

//Student class is inheriting School class
class Student extends School {
  constructor(student_name, std) {
    super();
    this.student_name = student_name;
    this.std = std;
  }
  studentDetail() {
    console.log(
      this.student_name,
      "is studying in",
      this.School,
      "in",
      this.std + "th standard"
    );
  }
}

//Teacher class
const teacher1 = new Teacher("Saravanan", 3);
const teacher2 = new Teacher("Gokul Anand", 8);
const teacher3 = new Teacher("Kalaiselvi", 5);
//Student class
const student1 = new Student("Gurusudhan", 12);
const student2 = new Student("Hiresh", 10);


teacher1.experienceDetails(); //Saravanan worked in SRM public school for 3 years
student2.studentDetail(); //Hiresh is studying in SRM public school in 10th standards