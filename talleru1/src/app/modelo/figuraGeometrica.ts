export abstract class figuraGeometrica {

    constructor() {    
    }
    
    abstract calcularPerimetro(): number
}

export class circulo extends figuraGeometrica {
    radio:number;

    constructor (radio:number) {
        super();
        this.radio = radio;
    }
    override calcularPerimetro(): number {
        return 2 * Math.PI * this.radio
    }
}

export class triangulo extends figuraGeometrica {
    ladoA: number;
    ladoB: number;
    ladoC: number;

    constructor (ladoA:number, ladoB:number, ladoC:number) {
        super();
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
        
    }
    override calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC
    }
}