const express = require("express")
const { initializeApp } = require('firebase/app');
const { getDatabase, ref,get,child, set,push} = require('firebase/database');

const firebaseConfig = {
<YOUR_FIREBASE_CONFIG>
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const router = express.Router()

async function getAllUsers(){
    const dbRef = ref(database);
    try {
        const snapshot = await get(child(dbRef, 'users/'));


        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error reading data:", error);
    }
}


router.get('/',(req,res)=>{
    res.send('user route');
});

router.post('/login', async (req, res) => {
    const user = req.body.user;
    console.log(user);
    var users = await getAllUsers();

    let usersArray = [];
    for (let key in users) {
        if (users.hasOwnProperty(key)) {
            usersArray.push({ id: key, ...users[key] });
        }
    }

    console.log(usersArray);

    const foundUser = usersArray.find(u => u.email === user.email);

    if (foundUser) {
        if (foundUser.pass === user.pass) {
            return res.send({ user: foundUser });
        } else {
            return res.send({ error: 'Invalid password' });
        }
    }

    return res.send({ error: 'Invalid credentials' });
});

router.post('/register', async (req, res) => {
    const user = req.body.user;
    var users = await getAllUsers();

    let usersArray = [];
    for (let key in users) {
        if (users.hasOwnProperty(key)) {
            usersArray.push({ id: key, ...users[key] });
        }
    }
    const foundUser = usersArray.find(u => u.email === user.email);
    if (foundUser) {
        return res.status(409).send({msg : "user alredy exists"});
    }

    const dbref = ref(database, 'users/');
    
    push(dbref, user)
    .then(() => {
        console.log('Data written successfully!');
        return res.status(200).send({msg : "user added sucessfully"});
    })
    .catch((error) => {
        console.error('Error writing data: ', error);
        return res.status(500).send({msg : error});
    });
});

module.exports = router;
