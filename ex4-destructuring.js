// ==========================================
// Destructuring / Spread / Rest
// ==========================================

const baseInfo = {
    id: "6501",
    name: "สมชาย",
    major: "CE"
};

const scoreInfo = {
    id: "6501",
    score: 78,
    attendance: 9
};

const contactInfo = {
    id: "6501",
    contact: {
        email: "somchai@dpu.ac.th",
        phone: "081-111-1111"
    }
};


// ==========================================
// ส่วนที่ 1 - Merge ข้อมูล
// ==========================================

const mergeStudent = (base, score, contact) => {

    const merged = {
        ...base,
        ...score,
        ...contact,
        grade: toGrade(score.score)
    };

    return merged;
};


// ฟังก์ชันแปลงคะแนนเป็นเกรด
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


// สร้างข้อมูลรวม
const merged = mergeStudent(
    baseInfo,
    scoreInfo,
    contactInfo
);

console.log("ข้อที่ 4");
console.log("ข้อมูลที่รวมแล้ว:", merged);


// ==========================================
// ส่วนที่ 2 - พิสูจน์ Shallow Copy
// ==========================================

// คัดลอก object ชั้นนอกด้วย spread
const copy = {
    ...merged
};

console.log(
    "Email ก่อนแก้:",
    copy.contact.email
);

// แก้ข้อมูลด้านใน
copy.contact.email = "changed@dpu.ac.th";

console.log(
    "Email ใน copy หลังแก้:",
    copy.contact.email
);

console.log(
    "Email ในต้นฉบับหลังแก้:",
    merged.contact.email
);

/*
เหตุผล:
Spread {...merged} เป็น Shallow Copy
จึงคัดลอกเฉพาะ object ชั้นนอก

ส่วน contact เป็น object ซ้อนอยู่ด้านใน
copy.contact และ merged.contact
จึงยังอ้างอิง object เดียวกัน

เมื่อแก้ copy.contact.email
ต้นฉบับจึงเปลี่ยนตาม
*/


// ==========================================
// แก้ไขให้เป็นการคัดลอกที่ถูกต้อง
// ==========================================

const correctCopy = {
    ...merged,
    contact: {
        ...merged.contact
    }
};

correctCopy.contact.email = "correct@dpu.ac.th";

console.log(
    "Email ใน correctCopy:",
    correctCopy.contact.email
);

console.log(
    "Email ใน merged:",
    merged.contact.email
);

/*
ครั้งนี้ contact ถูกคัดลอกใหม่อีกชั้น
ทำให้ correctCopy.contact
ไม่ใช่ object เดียวกับ merged.contact

ดังนั้นเมื่อแก้ correctCopy
merged จะไม่เปลี่ยนตาม
*/


// ==========================================
// ส่วนที่ 3 - Destructuring
// ==========================================

const formatStudent = ({
    name,
    score,
    grade,
    major = "ไม่ระบุ"
}) => {

    return `${name} | ${major} | คะแนน ${score} | เกรด ${grade}`;
};

console.log(
    "formatStudent:",
    formatStudent(merged)
);


// ==========================================
// Rest - แยก contact ออก
// ==========================================

const {
    contact,
    ...publicData
} = merged;

console.log(
    "publicData:",
    publicData
);

/*
Rest (...publicData)
ใช้เก็บ property ที่เหลือ
หลังจากแยก contact ออกแล้ว

ในระบบจริงไม่ควรส่ง contact
ออกไปกับข้อมูลสาธารณะ หาก API
ไม่จำเป็นต้องใช้ข้อมูลส่วนนี้
*/