export class Chat {
  id: number;
  title: string = '';
  description: string = '';
  categories: string[];
  lastActive: Date;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
