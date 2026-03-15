const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get("/getallusers", userController.getAllUsers);
router.get("/getuser/:id", userController.getUserById);
router.post("/create", userController.createUser);
router.put("/updateuser/:id", userController.updateUser);
router.delete("/deleteuser/:id", userController.deleteUserById);

module.exports = router;