const connection = new WebSocket("ws://localhost:3000") //3-6 create WS client connection object
const logWindow = document.querySelector("#log-window") //3-7 get reference to log window

connection.onopen = () => {
    connection.send("Hello from the client!") //3-8 send msg to web socket
}

connection.onmessage = (event) => {
    logWindow.innerHTML = event.data
}



