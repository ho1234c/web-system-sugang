module.exports = (subjects, newSubject) => {
  const newLectureTime = newSubject.lectureTime.split(',');

  subjects.forEach(e => {
    const { lectureTime } = e.split(',');
    const intersect = lectureTime.filter(t => newLectureTime.indexOf(t) > -1);

    return intersect === 0
  })
};
