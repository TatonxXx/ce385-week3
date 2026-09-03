// ==========================================
// จุดเริ่มต้นของโปรแกรม
// ==========================================

import {
    getAllStudents,
    findStudentById
} from "./student-data.mjs";

import {
    toGrade,
    isPassing,
    summarize
} from "./student-service.mjs";


// ดึงข้อมูลนักศึกษาทั้งหมด
const students = getAllStudents();


// สร้างข้อมูลสรุป
const summary = summarize();


// ==========================================
// แสดงผล
// ==========================================

console.log("================================");
console.log("Workshop 2 - ข้อที่ 5");
console.log("================================");

console.log("นักศึกษาทั้งหมด:");
console.table(students);


// ทดสอบค้นหานักศึกษา
const student = findStudentById("6501");

console.log("ค้นหา ID 6501:");
console.log(student);


// ทดสอบ ID ที่ไม่มี
const missingStudent = findStudentById("9999");

console.log("ค้นหา ID 9999:");
console.log(missingStudent);


// แสดงตารางสรุป
console.log("สรุปผลการเรียน:");
console.table(summary);


// ทดสอบฟังก์ชัน
const testScore = 78;

console.log(
    "คะแนน:",
    testScore
);

console.log(
    "เกรด:",
    toGrade(testScore)
);

console.log(
    "ผ่านหรือไม่:",
    isPassing(testScore)
);