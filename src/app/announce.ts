export class Announce {
  announceId: number;
  title: string;
  body: string;

  constructor(announceId: number, title: string, body: string) {
    this.announceId = announceId;
    this.title = title;
    this.body = body;
  }
}
