function Sum(arr){

    const halfIndex = Math.ceil(arr.length / 2);

    const sum = arr.reduce((acc, curr, index) => {
        if (index < halfIndex) {
            return acc + curr;
        }
        return acc;
    }, 0);

    console.log(sum);
}

const arr = [1,2,3,4,5,6,7,8,9]

Sum(arr);