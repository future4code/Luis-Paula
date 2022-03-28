export class Recipe {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private created_at: string
  ) {}

  public getId() {
    return this.id;
  }

  public getTitle() {
    return this.title;
  }

  public getDescription() {
    return this.description;
  }

  public getCreatedAt() {
    return this.created_at;
  }

  static toUserModel(data: any) {
    return new Recipe(data.id, data.title, data.description, data.created_at);
  }
}
