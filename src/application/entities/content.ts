export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validatorContentLength(content: string): boolean {
    return content.length >= 4 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentvalid = this.validatorContentLength(content);

    if (!isContentvalid) {
      throw new Error('Content length invalid!');
    }

    this.content = content;
  }
}
