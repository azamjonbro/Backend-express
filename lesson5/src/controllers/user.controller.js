const UserModel = require("../models/user.model");
const UserHistoryModel = require("../models/user.history.model");
exports.createUser = async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        return res.status(201).send(user);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await UserModel.find().lean().exec();
        return res.status(200).send(users);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id).lean().exec();
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        return res.status(200).send(user);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        await UserHistoryModel.create({
            userId: user._id,
            action: "update name to " + req.body.name,
            timestamp: new Date(),
        });
        return res.status(200).send(user);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id).lean().exec();
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        return res.status(200).send({ message: "User deleted successfully" });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
};  

