import path from "path";
import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/"); //null is for error, second one is path
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    ); //Image(filedname)-date.extension(jpeg, png)
  },
});

function checkFileTypee(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const minetype = filetypes.test(file.minetype);
  if (extname && minetype) {
    return cb(null, true);
  } else {
    cb("Images only!");
  }
}

export default router;
