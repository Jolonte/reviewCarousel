import '../scss/style.scss'
import { Peoples } from './peoples';
import { styleDOM } from './style';
import { imgs } from './imgs';

const people = new Peoples(imgs.mary, 'Mary', 'Engenheira', 'Se podemos sonhar, também podemos tornar nossos sonhos realidade.');

const people1 = new Peoples(imgs.alejandro, 'Alejandro', 'Médico', 'A vida é como andar de bicicleta. Para ter equilíbrio você tem que se manter em movimento.');

const people2 = new Peoples(imgs.lucas, 'Lucas', 'Advogado', 'Ser feliz sem motivo é a mais autêntica forma de felicidade.');

const people3 = new Peoples(imgs.atlas, 'Atlas', 'Desenvolvedor', 'Sou como você me vê. Posso ser leve como uma brisa ou forte como uma ventania, depende de quando e como você me vê passar.');

interface Teste {
  img: string;
  name: string;
  profession: string;
  message: string;
}

const listOfPeoples: Teste[] = [people, people1, people2, people3];

const btn = document.querySelectorAll('i') as NodeListOf<HTMLIFrameElement>;
let nmbr = 0;

document.addEventListener('DOMContentLoaded', () => {
  styleDOM(people.getImg, people.getName, people.getProfession, people.getMessage)
})

// Carousel
btn.forEach(element => {
  element.addEventListener('click', () => {
    if(element.classList.contains('ri-arrow-right-line')) {
      nmbr++
      if(nmbr > listOfPeoples.length - 1) {
        nmbr = 0
      }
      styleDOM(listOfPeoples[nmbr].img, listOfPeoples[nmbr].name, listOfPeoples[nmbr].profession,listOfPeoples[nmbr].message);
    }
    else {
      nmbr--
      if(nmbr < 0) {
        nmbr = listOfPeoples.length - 1;
      }
      styleDOM(listOfPeoples[nmbr].img, listOfPeoples[nmbr].name, listOfPeoples[nmbr].profession,listOfPeoples[nmbr].message);
    }
  })
});
