const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    description : {
        type: String,
        default: '',
    },
    image_path : {
        type: String,
        default: '',
        required : false
    },
    like : {
        type: Array,
        default: [],
    },
    comment_post : {
        type: String,
        default: '',
        required : false
    },
    video_path : {
        type: String,
        default: '',
        required : false
    },
    user_id : {
        type: String,
        required : false
    },
    username : {
        type: String,
        required : false
    },
    profile_picture_path : {
        type: String,
        required : false
    }


}, {timestamps: true});
module.exports = mongoose.model('posts', PostSchema);