class hero {
    constructor (name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

    atacar() {
        let ataque;

        if(this.type ==="Mago") {
            ataque = "Magia";
        } else if (this.type === "Guerreiro") {
            ataque = "Espada";
        } else if (this.type === "Monge") {
            ataque = "Artes Macias"
        } else if (this.type === "Ninja"){
            ataque = "Shuriken"
        } else {
            ataque = "um ataque desconhecido";
        }
        console.log(`O ${this.type} atacou usando ${ataque}`);
    }
}

let hero1 = new hero ("Arthas", 30, "Guerreiro")

hero1.atacar();