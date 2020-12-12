type Cominable = number | string;
type ConvertDescript = 'as-number' | 'as-text';
type User = { name: string; age: number };
const u1: User = { name: 'Tristan', age: 29 };
console.log(u1);


const combine = (
    input1: Cominable,
    input2: Cominable,
    resultType: ConvertDescript
    ) => {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number')
    {
        result = +input1 + +input2;
    }
    else
    {
        result = input1.toString() + input2.toString();
    }
    return result;
};

const combinedAges = combine(30, 27, 'as-number');
console.log(combinedAges);

const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);

const combineNames = combine('Tristan', 'Kayla', 'as-text');
console.log(combineNames);

