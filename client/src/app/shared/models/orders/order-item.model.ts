export class OrderItem {

    orderId: number;
    medicineId: number;
    quantity: number;

    constructor(orderItem = {orderId: 0, medicineId: 0, quantity: 0 }) {
        this.orderId = orderItem.orderId;
        this.medicineId = orderItem.medicineId;
        this.quantity = orderItem.quantity;
    }
}
