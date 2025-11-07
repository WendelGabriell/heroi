class heroi {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi, tipoAtaque){
        this.nomeHeroi = nomeHeroi;
        this.idadeHeroi = idadeHeroi;
        this.tipoHeroi = tipoHeroi;
        this.tipoAtaque = tipoAtaque;

    }

    atacar(){
        if (this.tipoHeroi === "mago") {
            this.tipoAtaque = "magia";

        }else if(this.tipoHeroi === "guerreiro"){
            this.tipoAtaque = "espada";

        }else if(this.tipoHeroi === "monge"){
            this.tipoAtaque = "artes marciais";

        }else if(this.tipoHeroi === "ninja"){
            this.tipoAtaque = "shuriken";
        }else{
            console.log("Tipo de Herói inválido!!!, escolha entre (mago, guerreiro, monge, ninja)");
        }

        console.log(`O ${this.tipoHeroi} atacou usando ${this.tipoAtaque}`)
    }
}

let dragonBallZ = new heroi("Kuririn", 30, "guerreiro")
dragonBallZ.atacar();