module.exports = (subjects, newSubject) => {
  const newLectureTime = newSubject.lectureTime.split(',');

  subjects.forEach(e => {
    const lectureTimes = e.lectureTime.split(',');
    const intersect = lectureTimes.filter(t => newLectureTime.indexOf(t) > -1);

    return intersect === 0
  })
};
