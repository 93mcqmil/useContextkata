//Contexten som lagrar alla studenter


import { createContext } from "react";
import uuid from 'react-uuid';

type Student = {
    name: string,
    age: number,
    id: string,
    school: string,
    city: string,
}

export const initialStudents: Student[] = [
    {
        id: uuid(),
        name: "Bosse",
        age: 34,
        school: "Lunds Universitet",
        city: "Lund",
    },
    {
        id: uuid(),
        name: "Stina",
        age: 46,
        school: "Chalmers",
        city: "Gothenburg",
    },
    {
        id: uuid(),
        name: "Kim",
        age: 26,
        school: "Borås Högskola",
        city: "Borås",
    },

];
export const StudentContext = createContext([] as Student[]);

