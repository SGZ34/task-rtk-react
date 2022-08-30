import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Layout } from "../layout";
import { TaskRow } from "../components";

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  const tasksPrint = () => {
    return tasks.map((task) => <TaskRow task={task} key={task.id} />);
  };
  return (
    <Layout>
      <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <Link to="/tasks/create" className="btn btn-success ">
          Create task
        </Link>
        <table className="table table-bordered table-striped mt-4">
          <thead className="bg-dark">
            <tr className="text-light">
              <th>ID</th>
              <th>NAME</th>
              <th>DESCRIPTION</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 ? (
              tasksPrint()
            ) : (
              <tr className="text-center">
                <td colSpan={4} className="text-center">
                  There isn't information
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
