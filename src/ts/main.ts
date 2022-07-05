import '../scss/style.scss'

import { Peoples } from './peoples';

const people1 = new Peoples('Mary', 'Engenheira', 'Se podemos sonhar, também podemos tornar nossos sonhos realidade.');

const people2 = new Peoples('Alejandro', 'Médico', 'A vida é como andar de bicicleta. Para ter equilíbrio você tem que se manter em movimento.');

const people3 = new Peoples('Lucas', 'Advogado', 'Ser feliz sem motivo é a mais autêntica forma de felicidade.');

const people4 = new Peoples('Atlas', 'Developer', 'Sou como você me vê. Posso ser leve como uma brisa ou forte como uma ventania, depende de quando e como você me vê passar.');

const listOfPeoples: object[] = [people1, people2, people3, people4];
console.log(listOfPeoples);

