import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../../features";

export const TaskRow = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = (task) => {
    if (confirm(`¿Are you sure to delete task "${task.name}"?`)) {
      dispatch(deleteTask(task));
    }
  };
  return (
    <tr>
      <td>{task.id}</td>
      <td>{task.name}</td>
      <td>{task.description}</td>
      <td>
        <Link
          className="btn btn-outline-warning mx-2"
          to={`/tasks/edit/${task.id}`}
        >
          Edit
        </Link>
        <button
          className="btn btn-outline-danger"
          onClick={() => handleDelete(task)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
