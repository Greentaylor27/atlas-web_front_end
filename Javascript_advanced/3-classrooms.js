function createClassRoom(numberOfStudents) {
    if (typeof numberOfStudents != 'number') {
        throw new Error('numberOfStudents must be a valid number');
    }

    function studentSeat (seat) {
        if (typeof seat != 'number') {
            throw new Error('seat must be a valid number')
        }

        return () => {
            return seat;
        }
    }

    let students = [];
    for (i = 0; i < numberOfStudents; i++) {
        students.push(studentSeat(i + 1));
    }

    return students;
}
const classRoom = createClassRoom(10);
