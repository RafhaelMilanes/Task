import Button from "./Button";
import AddIcon from "../assets/icons/add.svg?react";
import Trash from "../assets/icons/trash.svg?react";
const Tasks = () => {
  return (
    <>
      <div className="w-full px-8 py-16">
        <div className="flex w-full justify-between">
          <div>
            <span className="text-xs font-semibold text-[#00ADB5]">
              Minhas Tarefas
            </span>
            <h2 className="text-xl font-semibold">Minhas tarefas</h2>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="">
              Limpar tarefa <Trash />
            </Button>

            <Button variant="primary">
              Nova tarefa <AddIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
