import HotDog from "../deliverys/food/HotDog";
import IFood from "../deliverys/food/interface/IFood";
import IDeliveryFactory from "./interface/IDeliveryFactory";
import SoftDrink from "../deliverys/drinks/softdrink";
import IAiqFome from "../deliverys/drinks/interface/IAiqFome";

export default class IFoodFactory implements IDeliveryFactory{
    createDeliveryFood(): IFood {
        console.log("Transporte Via UBER");
        return new HotDog();
    }
    createDeliveryDrink(): IAiqFome {
        console.log("Transporte Via UBER");
        return new SoftDrink;
    }
}