/*
    ===== Código de TypeScript =====
*/
let habilidades = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    nombre: String;
    hp: number;
    habilidades: String[];
    puebloNatal?: String;
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: habilidades,
};

personaje.puebloNatal = 'Pueblo paleta';

console.table(personaje);
