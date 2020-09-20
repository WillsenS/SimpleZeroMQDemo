const zmq = require("zeromq");
const sock = new zmq.Push();

run();

async function run() {
    await sock.bind("tcp://127.0.0.1:8080");
    console.log("The server is up and running on port 8080");
    console.log("Press any key to send jobs to the worker");
    process.stdin.once("data", send);
}

async function send() {
    for (let i=0; i < 100; i++) {
        await sock.send(`sending job ${i}`);
        await new Promise(resolve => setTimeout(resolve,500));
    }
}