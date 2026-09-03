// ==========================================
// ฟังก์ชันคำนวณคะแนน
// ==========================================

// ตรวจสอบว่าคะแนนอยู่ในช่วง 0-100 หรือไม่
const isValidScore = (score) => {
    return typeof score === "number" && score >= 0 && score <= 100;
};


// แปลงคะแนนเป็นเกรด
const toGrade = (score) => {

    // เรียงจากคะแนนสูงไปต่ำ
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

    // find จะคืนข้อมูลเกรดตัวแรกที่ตรงเงื่อนไข
    const result = gradeRules.find((item) => score >= item.min);

    return result.grade;
};


// แปลงคะแนนดิบเป็นคะแนนตามน้ำหนัก
const calculateWorkshopScore = (raw, full = 60, weight = 20) => {

    // ตรวจสอบคะแนนก่อนคำนวณ
    if (!isValidScore(raw) || !isValidScore(full) || weight < 0) {
        return 0;
    }

    // สูตร: (คะแนนดิบ ÷ คะแนนเต็ม) × น้ำหนัก
    return (raw / full) * weight;
};


// รวมคะแนนทั้งหมด 5 ส่วน
const calculateTotal = (
    workshop,
    attendance,
    project,
    midterm,
    final
) => {
    return workshop + attendance + project + midterm + final;
};


// ==========================================
// ทดสอบฟังก์ชัน
// ==========================================

// ข้อมูลตัวเลขต้องใช้ const
const score1 = 48;
const score2 = 78;
const workshopScore = calculateWorkshopScore(score1);

// แสดงผลตอนท้ายไฟล์
console.log("ข้อที่ 1");
console.log("คะแนน 48 ถูกต้องหรือไม่:", isValidScore(score1));
console.log("เกรดของ 78:", toGrade(score2));
console.log("Workshop:", workshopScore);
console.log("Total:", calculateTotal(16, 10, 20, 25, 15));


// พิสูจน์ default parameter
const defaultResult = calculateWorkshopScore(48);
const explicitResult = calculateWorkshopScore(48, 60, 20);

console.log("calculateWorkshopScore(48):", defaultResult);
console.log("calculateWorkshopScore(48, 60, 20):", explicitResult);
console.log("ผลลัพธ์เท่ากันหรือไม่:", defaultResult === explicitResult);


// ทดสอบกรณีส่ง undefined
const undefinedResult = calculateWorkshopScore(48, undefined, 25);

console.log(
    "calculateWorkshopScore(48, undefined, 25):",
    undefinedResult
);

/*
เหตุผล:
เมื่อ full ส่งค่าเป็น undefined
JavaScript จะใช้ค่า default ของ full คือ 60

ดังนั้น
calculateWorkshopScore(48, undefined, 25)
= (48 / 60) × 25
= 20
*/