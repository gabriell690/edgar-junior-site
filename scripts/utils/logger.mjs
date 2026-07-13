export function log(...mensagem) {

    const hora = new Date().toLocaleTimeString("pt-BR");

    console.log(
        `[${hora}]`,
        ...mensagem
    );

}