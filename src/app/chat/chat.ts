export class Chat {
  roomId: string;
  roomName: string = '';
  userLimit: number;
  roomDescription: string = '';
  categories: string[];
  lastActive: Date;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
