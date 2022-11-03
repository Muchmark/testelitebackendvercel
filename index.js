const express = require('express')

const app = express()
app.use(express.json())
const cors = require("cors")
app.use(cors())
var cloudinary = require('cloudinary').v2;
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

cloudinary.config({
    cloud_name: "dibwyka4z",
    api_key: "976358469583163",
    api_secret: "kLaYxxHEXKyevL-MZNbgwDrE7-o",
    secure: true
});
// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         folder: 'some-folder-name',
//         format: async (req, file) => 'png', // supports promises as well
//         public_id: (req, file) => 'computed-filename-using-request',
//     },
// });
// const parser = multer({ storage: storage });

app.get("/", (req, res) => {
    res.status(200).send("welcome to home page..")
})

app.post("/myupload", async (req, res) => {
    console.log(req.body)
    // res.send(req.body)
    //const file = req.files.myfile
    //const url = await cloudinaryImageUploadMethod(req.body.image)
    try {
        const url = await cloudinary.uploader.upload(req.body.image)
        res.send(url)
    }
    catch (err) {
        res.send(err)
    }
    //console.log(req.files.myfile)
    //  console.log(file)

    // try {
    //     const result = await myUpload(req)
    //     res.send(result)
    // }
    // catch (err) {
    //     console.log("error is occured")
    //     res.send(err)
    // }

})


app.listen(3030, () => { console.log("app is listening on port") })