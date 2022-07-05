export class Peoples {
  readonly name: string;
  readonly profession: string;
  readonly message: string;

  constructor(name: string, profession: string, message: string) {
    this.name = name;
    this.profession = profession;
    this.message = message;
  }

  mostrarPessoa() {
    console.log(`O nome da pessoa é ${this.name}, ele(a) é ${this.profession}. Sua menssagem: ${this.message}`);
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
