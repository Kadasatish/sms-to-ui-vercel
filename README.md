# SMS to UI with Groq

This app receives SMS via Tasker (or API), sends it to Groq LLM to determine if it's a successful payment, and displays the result on a webpage.

## Endpoints

- `POST /api/process` → `{ sms: "received ₹10 from bharathpe" }`
- `GET /api/process` → `{ message: ..., response: ... }`
