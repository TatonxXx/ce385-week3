// ==========================================
// ทะเบียนนักศึกษา
// ==========================================

// ข้อมูลนักศึกษาอย่างน้อย 6 คน
const students = [
    {
        id: "6501",
        name: "สมชาย",
        major: "CE",
        score: 78,
        contact: {
            email: "somchai@dpu.ac.th",
            phone: "081-111-1111"
        }
    },
    {
        id: "6502",
        name: "สมหญิง",
        major: "IT",
        score: 85,
        contact: {
            email: "somying@dpu.ac.th",
            phone: "082-222-2222"
        }
    },
    {
        id: "6503",
        name: "กิตติ",
        major: "CE",
        score: 45,
        contact: {
            email: "kitti@dpu.ac.th",
            phone: "083-333-3333"
        }
    },
    {
        id: "6504",
        name: "ปกรณ์",
        major: "IT",
        score: 62,
        contact: {
            email: "pakorn@dpu.ac.th",
            phone: "084-444-4444"
        }
    },
    {
        id: "6505",
        name: "นภัส",
        major: "CE",
        score: 91,
        contact: {
            email: "napat@dpu.ac.th",
            phone: "085-555-5555"
        }
    },
    {
        id: "6506",
        name: "ธนา",
        major: "CE",
        score: 55
    }
];


// ค้นหานักศึกษาจาก ID
const findById = (students, id) => {
    return students.find((student) => student.id === id);
};


// ค้นหานักศึกษาตามสาขา
const findByMajor = (students, major) => {
    return students.filter((student) => student.major === major);
};


// ตรวจสอบว่ามีนักศึกษาที่สอบตกหรือไม่
const hasFailingStudent = (students) => {
    return students.some((student) => student.score < 50);
};


// ดึง Email ของนักศึกษา
const getEmail = (students, id) => {

    const student = students.find((item) => item.id === id);

    // ?. ป้องกัน error ถ้าไม่มีนักศึกษา
    // ?? ใช้ข้อความสำรองถ้าไม่มี email
    return student?.contact?.email ?? "ไม่พบข้อมูลติดต่อ";
};


// ==========================================
// ทดสอบ
// ==========================================

console.log("ข้อที่ 2");

console.log(
    "ค้นหา 6501:",
    findById(students, "6501")
);

console.log(
    "ค้นหา 9999:",
    findById(students, "9999")
);

console.log(
    "นักศึกษา CE:",
    findByMajor(students, "CE")
);

console.log(
    "มีนักศึกษาตกหรือไม่:",
    hasFailingStudent(students)
);

console.log(
    "Email 6501:",
    getEmail(students, "6501")
);

console.log(
    "Email 9999:",
    getEmail(students, "9999")
);


// เพิ่มนักศึกษาที่ไม่มี contact
// ใช้ spread เพื่อสร้าง array ใหม่
const studentWithoutContact = [
    ...students,
    {
        id: "6507",
        name: "วิชัย",
        major: "IT",
        score: 70
    }
];

console.log(
    "Email 6507:",
    getEmail(studentWithoutContact, "6507")
);