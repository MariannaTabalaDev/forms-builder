export interface Styles {
    [key: string]: string;
}
export interface ElemHasType {
    elemType?: string,
    styles?: Styles,
    onClick(): void,
    isActive: boolean
}

// export interface IDragDrop {
//     elements: ElemHasType[]
//     styles?: Styles,
// }

export interface IAppState {
    fieldsInForm: ElemHasType[]
}
