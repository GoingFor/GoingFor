// CHATGPT_INTEGRATION


// const axios = require('axios');
// const GPT_API_URL = 'https://api.openai.com/v1/engines/davinci/completions';
// const GPT_API_KEY = 'Your_API_key'; // Get an API key from OpenAI

// async function sendMessageToGPT(message) {
//   try {
//     const response = await axios.post(GPT_API_URL, {
//       prompt: message,
//       max_tokens: 150,
//     }, {
//       headers: {
//         'Authorization': `Bearer ${GPT_API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     return response.data.choices[0].text;
//   } catch (error) {
//     console.error('Error interacting with GPT:', error);
//     return 'Sorry, there was an error processing your request.';
//   }
// }

// module.exports = {
//   sendMessageToGPT,
// };