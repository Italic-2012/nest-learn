export interface Nav {
  _id: string;
  title: string;
  url: string;
  sort: string;
  status: number;
  add_time: string;
}

export interface NavAdd extends Omit<Nav, '_id' | 'add_time'> {}
