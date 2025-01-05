import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
import ButtonDelete from "../ButtonDelete";
import Button from "../Button";
import TrashIcon from "../../assets/icons/trash.svg?react";
import IntupLabel from "../InputLabel";
import Input from "../Input";

const TaskDetailsPage = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState();
  const navigate = useNavigate();

  const handleBackClik = () => {
    navigate(-1);
  };

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
    <div className="flex">
      <Sidebar />
      <div className="w-full px-8 py-16">
        <div className="flex w-full items-end justify-between">
          <div>
            <div
              onClick={handleBackClik}
              className="mb-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-brand-primary"
            >
              <p className="text-white">{"<"}</p>
            </div>
            <div>
              <div className="flex items-center gap-1 text-xs">
                <span
                  className="cursor-pointer text-brand-text-gray"
                  onClick={handleBackClik}
                >
                  Minhas tarefas
                </span>
                <p>{">"}</p>
                <span className="font-semibold text-brand-primary">
                  {task?.title}
                </span>
              </div>
            </div>

            <h1 className="mt-1 text-xl font-semibold">{task?.title}</h1>
          </div>

          <ButtonDelete variant="" className="flex h-fit self-end">
            <TrashIcon /> Deletar tarefa
          </ButtonDelete>
        </div>
        <div className="mt-6 space-y-6 rounded-xl bg-brand-white p-6">
          <div className="">
            <IntupLabel>Titulo</IntupLabel>
            <Input value={task?.title} />
          </div>

          <div className="">
            <IntupLabel>Horário</IntupLabel>
            <Input value={task?.time} />
          </div>

          <div className="">
            <IntupLabel>Descrição</IntupLabel>
            <Input value={task?.description} />
          </div>

          <div className="flex w-full justify-end gap-3">
            <Button size="" variant="">
              Cancelar
            </Button>
            <Button size="lg" variant="primary">
              Salvar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsPage;
