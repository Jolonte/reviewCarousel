export class Peoples {
  readonly img: string;
  readonly name: string;
  readonly profession: string;
  readonly message: string;

  constructor(img: string, name: string, profession: string, message: string) {
    this.img = img;
    this.name = name;
    this.profession = profession;
    this.message = message;
  }

  get getImg() {
    return this.img;
  }

  get getName() {
    return this.name;
  }

  get getProfession() {
    return this.profession;
  }

  get getMessage() {
    return this.message;
  }
}
