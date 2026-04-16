// To create tsconfig.json -> npx tsc --init

function greet(person: string) : string{
    return `Hello, ${person} welcome to meet us`
}

const username: string = "Sonu Yadav"

console.log(greet(username))