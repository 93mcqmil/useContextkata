// Komponent för att visa alla lärare
import { TeacherContext } from "./TeacherContext";
import { useContext } from "react";
import "./TeacherList.css";

const TeacherList = () => {
  const teachers = useContext(TeacherContext);

  return (
    <div>
      <h2>TeacherList</h2>
      <ul>
        {teachers.map((t) => {
          return (
            <li key={t.id}>
              Name: {t.name}, Age: {t.age}, Experience: {t.experience}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TeacherList;
