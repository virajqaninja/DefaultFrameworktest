export interface ShippingInfo {
    name: string;
    address: string;
}

export interface DemoConstantContract {
    specificField: string;
    commonField: string;
    nestedField: ShippingInfo;
    readonly randomLanguageName: string;

    printLanguageName(): void; // method
}
