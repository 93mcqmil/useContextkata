//Contexten som lagrar alla studenter


import { createContext } from "react";
import uuid from 'react-uuid';

type Student = {
    name: string,
    age: number,
    id: string,
}

export const initialStudents: Student[] = [
    {
        id: uuid(),
        name: "Bosse",
        age: 34
    },
    {
        id: uuid(),
        name: "Stina",
        age: 46
    },
    {
        id: uuid(),
        name: "Kim",
        age: 26
    },

];
export const StudentContext = createContext([] as Student[]);
