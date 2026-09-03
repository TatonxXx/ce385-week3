// ==========================================
// รับผิดชอบเก็บข้อมูลนักศึกษา
// ==========================================

// ข้อมูลนักศึกษา
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


// คืนข้อมูลนักศึกษาทั้งหมด
const getAllStudents = () => {
    return [...students];
};


// ค้นหานักศึกษาจาก ID
const findStudentById = (id) => {
    return students.find((student) => student.id === id);
};


// ใช้ Named Export เท่านั้น
export {
    getAllStudents,
    findStudentById
};