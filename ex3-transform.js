// ==========================================
// สรุปผลการเรียน
// ==========================================

const students = [
    {
        id: "6501",
        name: "สมชาย",
        major: "CE",
        score: 78
    },
    {
        id: "6502",
        name: "สมหญิง",
        major: "IT",
        score: 85
    },
    {
        id: "6503",
        name: "กิตติ",
        major: "CE",
        score: 45
    },
    {
        id: "6504",
        name: "ปกรณ์",
        major: "IT",
        score: 62
    },
    {
        id: "6505",
        name: "นภัส",
        major: "CE",
        score: 91
    },
    {
        id: "6506",
        name: "ธนา",
        major: "CE",
        score: 55
    }
];


// คืน array ของชื่อทุกคน
const getNames = (students) => {
    return students.map((student) => student.name);
};


// คืนเฉพาะนักศึกษาที่ผ่าน
const getPassedStudents = (students) => {
    return students.filter((student) => student.score >= 50);
};


// รวมคะแนนทั้งหมด
const getTotalScore = (students) => {
    return students.reduce(
        (total, student) => total + student.score,
        0
    );
};


// หาคะแนนเฉลี่ย
const getAverageScore = (students) => {

    // ถ้า array ว่าง ให้คืน 0 เพื่อป้องกัน NaN
    if (students.length === 0) {
        return 0;
    }

    const total = getTotalScore(students);

    return Number((total / students.length).toFixed(2));
};


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


// นับจำนวนแต่ละเกรด
const countByGrade = (students) => {

    return students.reduce((result, student) => {

        const grade = toGrade(student.score);

        result[grade] = (result[grade] ?? 0) + 1;

        return result;

    }, {});
};


// หานักศึกษาที่คะแนนสูงสุด
const getTopStudent = (students) => {

    if (students.length === 0) {
        return undefined;
    }

    return students.reduce((top, student) => {

        if (student.score > top.score) {
            return student;
        }

        return top;

    });
};


// ==========================================
// ทดสอบ
// ==========================================

console.log("ข้อที่ 3");

console.log(
    "ชื่อทั้งหมด:",
    getNames(students)
);

console.log(
    "นักศึกษาที่ผ่าน:",
    getPassedStudents(students)
);

console.log(
    "คะแนนรวม:",
    getTotalScore(students)
);

console.log(
    "คะแนนเฉลี่ย:",
    getAverageScore(students)
);

console.log(
    "จำนวนแต่ละเกรด:",
    countByGrade(students)
);

console.log(
    "นักศึกษาคะแนนสูงสุด:",
    getTopStudent(students)
);


// ทดสอบ array ว่าง
const emptyStudents = [];

console.log(
    "คะแนนเฉลี่ยของ array ว่าง:",
    getAverageScore(emptyStudents)
);


// filter → map → reduce
const ceAverage = students
    .filter((student) => student.major === "CE")
    .map((student) => student.score)
    .reduce((total, score, index, scores) => {

        // หาผลรวม แล้วหารด้วยจำนวนข้อมูล
        return index === scores.length - 1
            ? (total + score) / scores.length
            : total + score;

    }, 0);

console.log(
    "คะแนนเฉลี่ยนักศึกษา CE:",
    Number(ceAverage.toFixed(2))
);