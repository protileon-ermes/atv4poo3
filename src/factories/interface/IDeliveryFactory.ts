import IIFood from "../../deliverys/food/interface/IFood";
import IAiqFome from "../../deliverys/drink/interface/IAiqFome";

export default interface ITransportFactory{
    createDeliveryDrink(): IAiqFome;
    createDeliveryFood(): IIFood;
}