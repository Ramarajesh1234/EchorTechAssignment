const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/transform", (req, res) => {
    const {sentence} = req.body;

    if (!sentence || typeof sentence !== "string") {
        return res.status(400).json({error: "Sentence is required"});
    }

    const words = sentence.split(/\s+/);

    const word_count = words.length;

    const unique_words = [...new Set(words.map(w => w.toLowerCase()))];

    const reversed_sentence = words.reverse().join(" ");

    res.json({
        word_count,
        unique_words,
        reversed_sentence
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
