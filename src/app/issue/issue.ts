enum Type {
  UserFlagged,
  UserRequested,
  UserMissed,
}

export class Issue {
  static Type = Type;

  id: number;
  userId: string;
  counsellorId: string;
  dateCreated: Date;
  type: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
    this.dateCreated = new Date();
  }
}
