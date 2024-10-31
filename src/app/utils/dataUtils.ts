export function paginar(arr : any[], maxTam : number) : any[][] {
    let retorno : any[][] = [];

    let indexBase = 0;

    while (indexBase < arr.length) {
        retorno.push(arr.slice(indexBase, indexBase+maxTam))
        indexBase += maxTam;
    }

    return retorno;
}