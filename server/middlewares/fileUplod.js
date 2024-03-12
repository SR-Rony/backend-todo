const multer = require("multer");
const path = require("path")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/user')
    },
    filename: function (req, file, cb) {
      const extName = path.extname(file.originalname)
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + extName)
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports = upload