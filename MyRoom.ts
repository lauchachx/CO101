import { Room, Client } from "colyseus";

export class MyRoom extends Room {
  constructor() {
    super();
    this.startOnMessage()
  }
  // number of clients per room
  // (colyseus will create the room instances for you)
  maxClients = 4;

  // room has been created: bring your own logic
  async onCreate() {
    console.log('onCreate')
   }

  // client joined: bring your own logic
  async onJoin() { }

  // client left: bring your own logic
  async onLeave() { }

  // room has been disposed: bring your own logic
  async onDispose() { }


  public startOnMessage() {
    this.onMessage('pickup', (client: Client) => {
      console.log('pickup')
      client.send('pickup', { key: 'ได้รับแล้ว' })
    })
  }

  public playerMove(player: any, angle: any) {

  }
}