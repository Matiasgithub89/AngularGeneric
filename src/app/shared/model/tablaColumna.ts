export enum TablaTipoColumna{
    ACCIONES,
    TEXTO,
    CHECKBOX,
    FECHA,
    NUMERO,
    ICONO
}
export interface TablaColumna{
    valor: string;
    tipo: TablaTipoColumna;
    //visible: boolean;
}