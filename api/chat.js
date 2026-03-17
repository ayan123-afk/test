export default async function handler(req, res) {

const API_KEY = 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;

try {

const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
method: "POST",
headers: {
"Content-Type": "application/json",
"Authorization": `Bearer ${API_KEY}`
},
body: JSON.stringify({
model: "llama3-8b-8192",
messages: [
{
role: "user",
content: req.body.message
}
]
})
});

const data = await response.json();

res.status(200).json({
reply: data.choices[0].message.content
});

} catch (error) {

res.status(500).json({ error: "AI request failed" });

}

}
