const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const past_vote_schema = new Schema({
    month: Number,
    year: Number,
    vote: Number, //may be changed to star, string.........
    date: { type: Date, default: Date.now }
})

const PastSchema = mongoose.model("PastVote", past_vote_schema);
module.exports = PastSchema;