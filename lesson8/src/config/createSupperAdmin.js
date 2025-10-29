const SuperAdmin = require("../models/supperAdmin.model");
const bcrypt = require("bcryptjs");

exports.createSuperAdminController = async () => {
  try {
    const existingAdmin = await SuperAdmin.findOne({ role: "supperAdmin" });

    if (existingAdmin) {
      console.log("Admin allaqachon mavjud");
      return;
    }

    const hashedPassword = await bcrypt.hash("Bro1122@", 10);

    const admin = new SuperAdmin({
      username: "Azamjonbro",
      password: hashedPassword,
      phoneNumber: "+998770057891",
      email: "azamjonbro@gmail.com",
      role: "supperAdmin",
    });

    await admin.save();
    console.log("✅ Super admin muvaffaqiyatli yaratildi");
  } catch (error) {
    console.error("❌ Admin yaratishda xatolik:", error.message);
  }
};

