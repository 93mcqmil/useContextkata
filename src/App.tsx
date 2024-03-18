import { StudentContext } from "./Components/StudentContext";
import StudentList from "./Components/StudentList";
import { initialStudents } from "./Components/StudentContext";

import "./App.css";

function App() {
  return (
    <StudentContext.Provider value={initialStudents}>
      <h1>Student Context Demo Stuff</h1>
      <StudentList />
    </StudentContext.Provider>
  );
}

export default App;
