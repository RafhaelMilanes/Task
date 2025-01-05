import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TaskDetailsPage = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState();

  useEffect(() => {
    const fetchTasks = async () => {
      // pegando os dados da api
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "GET",
      });
      const data = await response.json();
      setTask(data);
    };
    fetchTasks();
  }, [taskId]);

  return (
    <div>
      <h1>{task?.title}</h1>;
    </div>
  );
};

export default TaskDetailsPage;
