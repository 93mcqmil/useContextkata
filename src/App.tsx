import { StudentContext } from "./Components/Student/StudentContext";
import StudentList from "./Components/Student/StudentList";
import { initialStudents } from "./Components/Student/StudentContext";
import { initialTeachers } from "./Components/Teacher/TeacherContext";
import { TeacherContext } from "./Components/Teacher/TeacherContext";

import "./App.css";
import TeacherList from "./Components/Teacher/TeacherList";

function App() {
  return (
    <StudentContext.Provider value={initialStudents}>
      <h1>Student Context Demo Stuff</h1>
      <StudentList />
      <TeacherContext.Provider value={initialTeachers}>
        <h1>Teacher Context Demo</h1>
        <TeacherList />
      </TeacherContext.Provider>
    </StudentContext.Provider>
  );
}

export default App;
