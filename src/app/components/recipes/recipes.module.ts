export class RecipesModule {
  name: string;
  description: string;
  image_path: string;
  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.image_path = imagePath;
  }
}
