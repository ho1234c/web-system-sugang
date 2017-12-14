import { Subject } from './subject/Subject';

export class User {
  _id: string;
  email: string;
  displayName: string;
  major: string;
  grade: string;
  maximum_credit: string;
  subjects: Subject[]

  constructor(_id: string, email: string, displayName: string, major: string, grade: string, maximum_credit: string, subjects: Subject[]) {
    this._id = _id;
    this.email = email;
    this.displayName = displayName;
    this.major = major;
    this.grade = grade;
    this.maximum_credit = maximum_credit;
    this.subjects = subjects;
  }

  addSubject(subject: Subject) {
    this.subjects.push(subject);
    return this;
  }

  removeSubject(subject) {
    this.subjects.forEach((sb, idx) => {
      if(subject._id === sb._id) {
        this.subjects.splice(idx, 1);
      }
    });
    return this;
  }
}
