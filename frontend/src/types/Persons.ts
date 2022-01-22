export type classIMC = {
    id: number;
    nome: string;
}
export type Persons = {
    id: number;
    nome: string;
    data_nasc: Date;
    cpf: string;
    sexo: string;
    altura: number;
    peso: number;
    classIMC: classIMC;
}
export type ContentPersons = {
    content: Persons[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}
