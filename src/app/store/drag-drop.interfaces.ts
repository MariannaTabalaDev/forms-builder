
export interface Styles {
    [key: string]: string
}

export interface ElemHasType {
    elemType?: string,
    styles: Styles,
    onClick(): void,
    isActive: boolean,
    id: number
}

export interface IAppState {
    fieldsInForm: ElemHasType[]
}