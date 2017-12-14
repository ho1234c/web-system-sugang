module.exports = (subjects, newSubject) => {
  let result = true;
  const newLectureTime = newSubject.lectureTime.split(',');

  subjects.forEach(e => {
    const lectureTimes = e.lectureTime.split(',');
    const intersect = lectureTimes.filter(t => newLectureTime.indexOf(t) > -1);
    if(intersect.length > 0) {
      result = false;
      return;
    }
  })
  return result;
};
