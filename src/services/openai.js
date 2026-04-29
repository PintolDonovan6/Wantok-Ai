export async function askOpenAI(message) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_OPENAI_API_KEY"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are Wantok-AI. Respond in Tok Pisin or English. Keep answers simple, helpful, and relevant to Papua New Guinea users."
        },
        { role: "user", content: message }
      ]
    })
  });

  return response.json();
}
