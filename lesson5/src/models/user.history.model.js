const mongoose = require('mongoose');

const userHistorySchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    action: {type: String, required: true},
    timestamp: {type: Date, default: Date.now},
},{
    timestamps: true,
});

const UserHistory = mongoose.model('UserHistory', userHistorySchema);

module.exports = UserHistory;