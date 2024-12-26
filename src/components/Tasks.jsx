import Button from "./Button";
import AddIcon from "../assets/icons/add.svg?react";
import Trash from "../assets/icons/trash.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import CloudSunIcon from "../assets/icons/cloud-sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import TasksSeparator from "./TasksSeparator";
const Tasks = () => {
  return (
    <>
      <div className="w-full px-8 py-16">
        <div className="flex w-full justify-between pb-6">
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

        {/* LISTA DE TAREFAS */}

        <div className="rounded-xl bg-white p-6">
          <div className="flex flex-col">
            <TasksSeparator>
              <SunIcon /> Manhã
            </TasksSeparator>

            <div className="my-6 space-y-3">
              {" "}
              <TasksSeparator>
                <CloudSunIcon /> Tarde
              </TasksSeparator>
            </div>

            <TasksSeparator>
              <MoonIcon /> Noite
            </TasksSeparator>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
