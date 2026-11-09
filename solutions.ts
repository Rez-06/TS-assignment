function multiplyValue(value:number,multiplier?:number):number{
    if(multiplier===undefined){
        return value*2;

    }
    if(multiplier===0){
        return 0;
    }
    return value*multiplier;


}

// console.log(multiplyValue(10))
// console.log(multiplyValue(10,5))
// console.log(multiplyValue(7,0))

function processInput(value:string | number | boolean): string | number{
    if(typeof value ==="string"){
        return value.toLowerCase().trim();

    }
    else if(typeof value === "number"){
        return value*10;

    }

    else{
        if(value)return "Active";
        else return "Inactive";
    }
}
// console.log(processInput("  TypeScript  "))
// console.log(processInput(7))
// console.log(processInput(true))
// console.log(processInput(false))

function formatCoordinate([latitude, longitude, locationName]:readonly [number,number,string]):string{
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));


function concatenateArrays<T>(...arrays:T[][]):T[]{
    let result:T[]=[]
    for (const arr of arrays){
        result=result.concat(arr);
    }
    return result;
}

// console.log(concatenateArrays(["a", "b"], ["c", "d"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));

interface Course{
    title:string,
    students:number,
    isPublished:boolean
}

function getPopularCourses(arr:Course[],minStudents:number):Course[]{
    return arr.filter(course=>
        course.isPublished===true &&
        course.students>=minStudents
    );
}

// const courses: Course[] = [
//     { title: "TypeScript Mastery", students: 120, isPublished: true },
//     { title: "Draft Course", students: 200, isPublished: false },
//     { title: "Basic HTML", students: 45, isPublished: true },
//     { title: "Next.js Pro", students: 85, isPublished: true }
// ];

// console.log(getPopularCourses(courses, 80));

function pluckValues<T,K extends keyof T>(items:T[],Key:K):T[K][]{
    return items.map(item=>item[Key]);

}

// Sample Input:
// const users = [
//   { id: 1, name: "Rakib", role: "Admin" },
//   { id: 2, name: "Sadia", role: "Editor" },
//   { id: 3, name: "Tariq", role: "Subscriber" }
// ];

// console.log(pluckValues(users, "name"));
// console.log(pluckValues(users, "id"));

class Employee{
    protected name: string;
    private baseSalary: number;
    constructor(name:string,baseSalary:number){
        this.name=name;
        this.baseSalary=baseSalary;
    }

    getDetails():string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee{
    private department:string;
    constructor(name: string, baseSalary: number, department: string){
        super(name, baseSalary);
        this.department=department;
    }
    getRoleInfo():string{
        return `Manager of ${this.department}: ${this.name}`
    }
}

// // Sample Input:
// const manager = new Manager("Alice", 50000, "Engineering");
// console.log(manager.getDetails());
// console.log(manager.getRoleInfo());

function validateAgeAsync(age: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        } else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
}

// // Sample Input 1
// console.log(await validateAgeAsync(20));

// // Sample Input 2
// try {
//     console.log(await validateAgeAsync(15));
// } catch (error) {
//     console.log(error);
// }
