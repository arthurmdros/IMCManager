export function getPesoIdeal(sexo: string, altura: number) {
    if (sexo === "M") {
        const result = (72.7 * altura) - 58;
        return result.toFixed(2);
    } else if (sexo === "F") {
        const result = (62.1 * altura ) - 44.7;
        return result.toFixed(2);        
    } else {
        return "Recomendamos que verifique seu IMC";
    }
}