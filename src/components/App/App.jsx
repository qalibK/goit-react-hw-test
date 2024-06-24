import { useEffect } from "react";
import Layout from "../Layout/Layout";
// import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import { fetchTasks } from "../../redux/tasksOps";

console.dir(fetchTasks);

export default function App() {
  useEffect(() => {}, []);

  return (
    <Layout>
      <h1>Homework 7</h1>
      <h2>HTTP requests with Redux</h2>
      <TaskList />
    </Layout>
  );
}
