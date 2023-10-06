import "./App.css";
import { useEffect, useState } from "react";

const apiBaseUrl = "https://nodevk.azurewebsites.net/api/v1/";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(apiBaseUrl + "/task")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log("Data", data);
        setTasks(data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      <h2>Home................!!!!!</h2>
      {tasks &&
        tasks.map((task, index) => {
          return <h3 key={index}>{task.title}</h3>;
        })}
    </div>
  );
}

export default App;
