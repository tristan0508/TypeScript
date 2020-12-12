enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Tristan',
    age: 29,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};


let favorite: string[];

console.log(person.name);

for (const hobby of person.hobbies)
{
    console.log(hobby.toUpperCase());
}