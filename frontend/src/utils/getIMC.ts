export function getIMC(peso: number, altura: number) {
    return (peso/(altura * altura)).toFixed(2);
}
