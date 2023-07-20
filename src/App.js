import logo from "./logo.svg";
import "./App.css";
import Student from "./components/Student";
import students from "./models/students";
import { useState } from "react";

function App() {
  console.log(students);
  const [studentList, setStudents] = useState(students);

  return (
    <div className="App">
      {studentList.map((item) => {
        return (
          <Student
            key={item.name}
            name={item.name}
            bio={item.bio}
            scores={item.scores}
          />
        );
      })}
    </div>
  );
}

export default App;
