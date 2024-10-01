

//El array a ordenar
const miArr: number[] = [7, 4, 6, 8, 9, 3, 5, 1, 2];

function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    let miPiv: number = arr[Math.floor(arr.length / 2)];

    const arrMenor = arr.filter((elem) => elem < miPiv);
    const arrIgual = arr.filter((elem) => elem === miPiv);
    const arrMayor = arr.filter((elem) => elem > miPiv);

    return quickSort(arrMenor).concat(arrIgual, quickSort(arrMayor));
}

const miArr2: number[] = quickSort(miArr);
console.log(miArr2);
