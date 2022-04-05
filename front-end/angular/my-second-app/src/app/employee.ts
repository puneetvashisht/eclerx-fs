// export class Employee{
//     constructor(public id: number, public name: string, public salary?: number){
        
//     }
// }

export interface Employee{
    id: number,
    name: string,
    salary? : string
}

class Manager implements Employee{
    constructor(public id: number, public name: string){
        
    }

    approveLeaves(){
        console.log("approve leave by " + this.name);
        
    }
}

// let e : Employee = {
//     id: 34,
//     name: "Ravi",
//     salary: "34343"
// }