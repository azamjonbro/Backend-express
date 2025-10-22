const router = require("express").Router();;
const {createUser, updateUser, getUserById,getUsers,deleteUser} = require("../controllers/user.controller");

router.post("/", createUser);
router.put("/:id", updateUser);
router.get("/:id", getUserById);
router.get("/", getUsers);
router.delete("/:id", deleteUser);

module.exports = router;