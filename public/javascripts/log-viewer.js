const connection = new WebSocket("ws://localhost:3000") //3-6 create WS client connection object
const logWindow = document.querySelector("#log-window") //3-7 get reference to log window
const filePath = document.getElementById("logFilePath").value //4-3 get logFilePath element

//send msg to web socket
connection.onopen = () => {
    if (filePath) {
        connection.send(filePath); //4-4send log file path to WS server
    }
    // connection.send("Hello from the client!") //3-8 send msg to web socket
}

//display message in log window
connection.onmessage = (event) => {
    const logs = event.data.split("\n").join("<hr>");
    logWindow.innerHTML = logs;

    //logWindow.innerHTML = event.data //3-9 display message in log window
}



