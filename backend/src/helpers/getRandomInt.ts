class Numbers {
    public getRandomInt (cod:number):number {
        cod = Math.floor(Math.random() * (9999 - 1000) + 1000);
        return cod;
    };
}

export const numberRandom = new Numbers()