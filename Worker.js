const zmq = require("zeromq");
const sock = new zmq.Pull();

run();

async function run() {
    await sock.connect("tcp://127.0.0.1:8080");
    console.log("Connected to the server");

    for await (const msg of sock) {
        console.log(`get job ${msg.toString()}`);

    }
}