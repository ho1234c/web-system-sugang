export class Announce {
  announceId: number;
  title: string;
  content: string;
  constructor(announceId: number, title: string, content: string) {
    this.announceId = announceId;
    this.title = title;
    this.content = content;
  }
}
