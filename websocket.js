let ws = new WebSocket("ws://localhost:9090")
ws.onmessage = message => {
const response = JSON.parse(message.data);
console.log(response.message)
}