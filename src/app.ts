const createNumber = (value:number):number => {
    return Math.floor( Math.random() * value  ) + 1
};

const setNumberList = (value:number, v:number , createNumber: (v:number) =>number):number[] => {
    const t:number[] = []
    for(let i = 0; i < value; i++){
        t.push(createNumber(v))
    }
    return t;
};

const setNumberList2 = (count:number, v:number, createNumber: (v:number) => number):number[] => {        
    return Array.from({length: count}, ( item ) => createNumber(v) )                // ha {} akkor muszáj a return pl.: function(item) =>{return createNumber(v)}
}

const numbers = setNumberList2(100, 5, createNumber)
console.log(numbers);


type Stat = Record<number, number>;         // Record használata
const statistic: Stat = {};

for( let v of numbers){
    if(v in statistic){
        statistic[v]! += 1;
    }else{
        statistic[v] = 1;
    }
}

console.log(statistic);

