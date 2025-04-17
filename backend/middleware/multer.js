import multer from "multer";

// Setup storage
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname); // Save the file with its original name
  },
});

// File type validation (allow only image files)
const fileFilter = (req, file, callback) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  if (!allowedTypes.includes(file.mimetype)) {
    return callback(new Error('Invalid file type, only JPEG, PNG, and GIF are allowed.'));
  }
  callback(null, true);
};

// Multer setup with file size limit and file type validation
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB file size limit
});

export default upload;
