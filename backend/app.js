const express = require("express");
const cors = require('cors');
const path = require('path');  

const userRoute = require("./routes/user.route");
const prescriptionRoute = require("./routes/prescription.route")
const chatRoute = require("./routes/chat.route");

const app = express();

app.use(express.json());
app.use(cors());
app.use('/uploads',express.static('uploads'));
app.use('/frontend',express.static('frontend'));
app.use("/users", userRoute);
app.use("/chat", chatRoute);

app.use("/prescription", prescriptionRoute);


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'login.html'));
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'frontend','index.html'));
})

app.get('/medicalquery', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'medicalQuery.html'));
});

app.listen(3000, () => { 
    console.log("Listening on port 3000");
});