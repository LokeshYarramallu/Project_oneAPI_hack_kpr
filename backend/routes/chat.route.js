const Groq = require("groq-sdk");
const groq = new Groq({
  apiKey: "<YOUR_GROQ_API_KEY>",
});
const express = require("express");
const { initializeApp } = require("firebase/app");
const {
  getDatabase,
  ref,
  get,
  child,
  set,
  push,
} = require("firebase/database");

const firebaseConfig = {
<YOUR_FIREBASE_CONFIG>
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const router = express.Router();

function getchats() {
  return new Promise((resolve, reject) => {
    const dbRef = ref(database);
    get(child(dbRef, "chats/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          resolve(snapshot.val());
        } else {
          console.log("No data available");
          resolve([]);
        }
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}

router.post("/chatcomplete", async (req, res) => {
  try {
    prev_chats = await getchats();
    
    const {
      user_query,
      language,
      model,
      temperature,
      max_tokens,
      top_p,
      stream,
      stop,
    } = req.body;
    const prompt = `
        Based on the previous conversations with the user ${prev_chats}, analyze the user query in ${language}: "${user_query}". If the query pertains to a medical question, provide an appropriate medical solution while considering the context of past interactions. If the query is unrelated to medicine, do not respond. Please reply in ${language}.
        `;
    const messages = [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: prompt },
    ];

    const chatCompletion = await groq.chat.completions.create({
      messages,
      model,
      temperature,
      max_tokens,
      top_p,
      stream,
      stop,
    });
    res.setHeader("Content-Type", "text/plain");
    for await (const chunk of chatCompletion) {
      res.write(chunk.choices[0]?.delta?.content || "");
    }
    res.end();
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/update_chat", (req, res) => {
  const chats = req.body.chat;

  // Set the chats data directly at the 'chats/' reference
  set(ref(database, "chats/"), chats)
    .then(() => {
      console.log("Data written successfully");
      return res.status(200).send({ msg: "Chats are successfully updated" });
    })
    .catch((error) => {
      console.error("Error while saving chats:", error);
      return res.status(500).send({ msg: error });
    });
});

router.get("/getchats", (req, res) => {
  const dbRef = ref(database);
  get(child(dbRef, "chats/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return res.status(200).send({ chats: snapshot.val() });
      } else {
        console.log("No data available");
        return res.status(200).send({ chats: [] });
      }
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).send({ msg: error });
    });
});

router.delete('/clearchats',(req,res)=>{
    set(ref(database,'chats/'),{})
    .then(()=>{
        res.send('All chats have been cleared successfully')
    })
    .catch((error)=>{
        res.status(500).send(error)
    })
})

module.exports = router;
