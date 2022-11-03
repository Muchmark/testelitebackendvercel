const express = require('express')
const multer = require('multer')
const app = express()

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname)
    }

})



const upload = multer({ storage: fileStorageEngine })



app.post("/myupload", upload.single('myfile'), (req, res) => {
    console.log(req.file)
    res.send("single file uploaded")

})
// app.post('/profile', upload.single('avatar'), function (req, res, next) {

// })                                                    

app.listen(3000, () => { console.log("app is listening on port") })