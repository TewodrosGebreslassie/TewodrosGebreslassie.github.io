
/* 
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
//Person, doubleNums, doubleAges, filterEven, filterOver10, findEvenAge, findEvenNum 

export function filterRange(arr: number[], a: number, b: number): number[] {
    return arr.filter((num) => num >= a && num <= b);
    return [];
}


type SurnameUser = {
    name: string;
    surname: string;
    id: number;
}

type FullNameUser = {
    fullName: string;
    id: number;
}   


export function map2fullName(users: SurnameUser[]): FullNameUser[] {
    let result: { fullName: string, id: number }[] = [];
  
    for (const user of users) {
      const fullName = `${user.name} ${user.surname}`;
      result.push({ fullName, id: user.id });
    }
  
    return result;
  }
}

export function filterEvenNumbers(arr: number[]): number[] {
    return arr.filter((num) => num % 2 === 0);
  }
  



  type Person = {
    name: string;
    age: number;
  };
  
  export function filterAgeGreaterThan10(people: Person[]): Person[] {
    return people.filter((person) => person.age > 10);
  }
  
  export function findEvenNumber(arr: number[]): number | undefined {
    return arr.find((num) => num % 2 === 0);
  }
  
  export function includeEvenNumber(arr: number[], target: number): boolean {
    return arr.includes(target);
  }
  
  export function findAgeGreaterThan10(people: Person[]): Person | undefined {
    return people.find((person) => person.age > 10);
  }
  
  export function includeAgeGreaterThan10(people: Person[], targetAge: number): boolean {
    return people.some((person) => person.age > targetAge);
  }