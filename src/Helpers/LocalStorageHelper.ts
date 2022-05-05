export const GetItem = (value: string) => localStorage.getItem(value) ?? "";

export const ExistItem = (value: string) : boolean => GetItem(value) === null ? false : true;

function identity<T>(value: T): T {
    return value;
}

const identity2 = <T>(value: string): T | string => {
    return "hola";
}

const algo = identity<string>("hola");
const algo2 = identity2<string>("hola 2");

console.log(algo);
console.log(algo2);