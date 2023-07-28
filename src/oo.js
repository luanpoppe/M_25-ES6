// function Pokemon(nomeDoPokemon, tipoDoPokemon) {
//     this.nome= nomeDoPokemon
//     this.tipo = tipoDoPokemon
// }

// const pikachu = new Pokemon("Pikachu", "elétrico")

class Pokemon {
    #hp = 100

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon
        this.tipo = tipoDoPokemon
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque() {
        this.hp -= 10
    }
}

class Pikachu extends Pokemon{
    constructor() {
        super("Pikachu", "Elétrico")
    }

    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`)
    }
}

const pikachuDoAshe = new Pikachu("pikachu", "elétrico")
const pikachu = new Pokemon("pikachu", "elétrico")
// pikachu.atacar("choque do trovão")

console.log(pikachu)
console.log(pikachuDoAshe)

pikachuDoAshe.atacar()
pikachuDoAshe.recebeuAtaque()
console.log(pikachuDoAshe.hp)