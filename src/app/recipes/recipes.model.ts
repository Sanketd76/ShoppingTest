export class Recipe {
  constructor(
    public name: string,
    public desc: string,
    public imagePath: string
  ) {
    this.name = name;
    this.desc = desc;
    this.imagePath = imagePath;
  }
}
