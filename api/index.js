import express from "express";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";


const app = express()
app.use(express.json())
app.use(cors());
app.use(cookieParser());

app.use("/api/posts",postRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Set the destination folder where the uploaded file should be stored
      cb(null, "../client/public/upload");
    },
    filename: function (req, file, cb) {
      // Set the filename of the uploaded file
      cb(null, Date.now() + file.originalname);
    },
  });
  
  // Set up multer middleware with the defined storage configuration
  const upload = multer({ storage });
  
  // Set up a POST endpoint for handling file uploads
  app.post("/api/upload", upload.single("file"), function (req, res) {
    // Get the uploaded file
    const file = req.file;
    // Send a response with the filename of the uploaded file
    res.status(200).json(file.filename);
  });


  app.get('/test' ,(req,res)=> {
    res.json("Yo this is test")
  })
app.listen(1234,()=>{
    console.log("haha")
})