export interface Styles {
    [key: string]: string;
}
export interface ElemHasType {
    elemType: string,
    styles?: Styles,
}

export interface IDragDrop {
    elements: ElemHasType []
}
