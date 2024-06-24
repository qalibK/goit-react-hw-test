import Task from "../Task/Task";

export default function TaskList() {
  return (
    <ul>
      {[].map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
