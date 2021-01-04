export class Offer {
    id: number;
    orderId: number;
    supplierName: string;
    shippingDate: Date;

    constructor(offer = {id: 0, orderId: 0, supplierName: null, shippingDate: null }) {
        this.id = offer.id;
        this.orderId = offer.orderId;
        this.supplierName = offer.supplierName;
        this.shippingDate = offer.shippingDate;
    }
}
