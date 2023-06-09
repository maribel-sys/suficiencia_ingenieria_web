const express = require("express");
const postController = require("../controller/PostController");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const filename = file.fieldname + '-' + Date.now() + '-' + Math.round(Math.random() * 1E9)+'.jpg';
      req.body.image_path = filename;
      cb(null, filename)
    }
  })
  
const upload = multer({ storage: storage })

const storage_video = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads_videos')
  },
  filename: function (req, file, cb) {
    const filename = file.fieldname + '-' + Date.now() + '-' + Math.round(Math.random() * 1E9)+'.mp4';
    req.body.video_path = filename;
    cb(null, filename)
  }
})

const upload_video = multer({ storage_v: storage_video })

const router = express.Router();

router.post('/add-post-image-description',upload.single('image'), postController.addPost);
router.post('/like-un-like', postController.likeUnLike);
router.post('/add-post-video-description',upload_video.single('video'), postController.addPostVideo);
router.post('/add-post-comment', postController.addPostComment);
router.get('/get-all.post', postController.getAllPost);

module.exports = router;