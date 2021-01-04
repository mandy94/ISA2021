export interface Medicine {
    id: number;
    code: string;
    name: string;
    type: string;
    shape: string;
    mandatoryPrescription: boolean;
    warningNotes: null;
    initialPrice: number;
    currentPrice: number;
    activeDiscount: null;
    manufacturer: Manufacturer;
    ingredients: any[];
    inOffers: any[];
    inOrders: any[];
}

export interface Manufacturer {
    id: number;
    name: string;
    adress: string;
}
