const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
      id: {
            type: Number,
            require: true,
            unique: true,
        },
     name: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
     email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
    phone: {
            type: String,
            required: true,
        },
    role: {
            type: String,
            required: true,
            max: 50,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("List", PostSchema);  //this will create lists collection in mongo
