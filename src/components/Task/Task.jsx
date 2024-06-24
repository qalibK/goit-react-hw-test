export default function Task({ task }) {
  return (
    <div>
      <p>{task.text}</p>
      <button>Delete</button>
    </div>
  );
}
