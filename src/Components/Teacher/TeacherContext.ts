// Contexten som lagrar alla lärare

import { createContext } from "react";
import uuid from 'react-uuid'

type Teacher = {
    name: string,
    age: number,
    experience: number | string,
    id: string,


}

export const initialTeachers: Teacher[] = [
    {
        id: uuid(),
        name: "Albert Stenberg",
        age: 38,
        experience: 10 + "years"

    },
    {
        id: uuid(),
        name: "Niklas Mårdby",
        age: 44,
        experience: 30 + "years"

    },
    {
        id: uuid(),
        name: "Johan Karlsson",
        age: 49,
        experience: 5 + "years"

    },
]
export const TeacherContext = createContext([] as Teacher[]);