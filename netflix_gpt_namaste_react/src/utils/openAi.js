import OpenAI from "openai";

const client = new OpenAI({
  //   apiKey: process.env.OPENAI_API_KEY,
  apiKey:
    "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",
  dangerouslyAllowBrowser: true,
});

export default client;

// async function main() {
//   const chatCompletion = await client.chat.completions.create({
//     messages: [{ role: "user", content: "Say this is a test" }],
//     model: "gpt-3.5-turbo",
//   });
// }
