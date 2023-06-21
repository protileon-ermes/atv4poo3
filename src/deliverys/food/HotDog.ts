import IIFood from "./interface/IFood";

export default class HotDog implements IIFood{
    startRoute(): void {
        this.getCargo();
        console.log("HotDog: Lanche enviado...")
    }
    getCargo(): void {
        console.log("HotDog: Dogão embalado!");
    }
}