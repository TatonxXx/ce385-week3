// ==========================================
// รับผิดชอบกฎทางธุรกิจ
// ==========================================

import {
    getAllStudents,
    findStudentById
} from "./student-data.mjs";


// แปลงคะแนนเป็นเกรด
const toGrade = (score) => {

    const gradeRules = [
        { grade: "A", min: 80 },
        { grade: "B+", min: 75 },
        { grade: "B", min: 70 },
        { grade: "C+", min: 65 },
        { grade: "C", min: 60 },
        { grade: "D+", min: 55 },
        { grade: "D", min: 50 },
        { grade: "F", min: 0 }
    ];

    const result = gradeRules.find((item) => score >= item.min);

    return result.grade;
};


// ตรวจสอบว่าผ่านหรือไม่
const isPassing = (score) => {
    return score >= 50;
};


// สรุปข้อมูลนักศึกษา
const summarize = () => {

    const students = getAllStudents();

    return students.map((student) => ({
        id: student.id,
        name: student.name,
        major: student.major,
        score: student.score,
        grade: toGrade(student.score),
        passing: isPassing(student.score)
    }));
};


// ใช้ Named Export
export {
    toGrade,
    isPassing,
    summarize,
    findStudentById
};