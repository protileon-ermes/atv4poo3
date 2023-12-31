import IAiqFome from "../deliverys/drinks/interface/IAiqFome";
import IIFood from "../deliverys/food/interface/IFood"
import IDeliveryFactory from "../factories/interface/IDeliveryFactory"

export default class{
    private food: IIFood;
    private drink: IAiqFome;

    constructor(factory : IDeliveryFactory){
        this.food = factory.createDeliveryFood();
        this.drink = factory.createDeliveryDrink();
    
    }
    startRoute(){
        this.food.startRoute();
        this.drink.startRoute();
    }

}