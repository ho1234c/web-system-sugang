import { Course } from './course';

export const CourseSet: Course[] = [
  { subjectId: 1, seats: 40, credit: 3, name: 'firstCourse', lectureTime: '월A목A', professor: 'first', major: '소프트웨어',
    time: 3, lectureRoom: '팔309', IsCyber: true},
  { subjectId: 2, seats: 25, credit: 4, name: 'secondCourse', lectureTime: '화C목C', professor: 'second', major: '소프트웨어',
    time: 3, lectureRoom: '팔309', IsCyber: true},
  { subjectId: 3, seats: 45, credit: 4, name: 'thirdCourse', lectureTime: '수F금F', professor: 'third', major: '미디어',
    time: 3, lectureRoom: '팔309', IsCyber: true},
  { subjectId: 4, seats: 40, credit: 3, name: 'forthCourse', lectureTime: '수E목D', professor: 'forth', major: '미디어',
    time: 3, lectureRoom: '팔309', IsCyber: true}
];

