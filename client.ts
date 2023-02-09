
// connection.ts (client-side)
console.log('3')
import { Client } from "colyseus.js";

const client = new Client("ws://localhost:2567");

console.log('Client')

const x = connect()

async function connect () {
  console.log('11')
    try {
        const room = await client.joinOrCreate("my_room");
        console.log('14')
        room.send("pickup", { item: 'ak47' })

    room.onLeave((code) => {
        console.log("You've been disconnected.");
    });


    room.onMessage('pickup', (message: any) => {
      console.log('24pickup', message)
    })

    } catch (e) {
        console.error("Couldn't connect:", e);
    }    
}

