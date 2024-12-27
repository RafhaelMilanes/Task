import Button from "./Button";
import AddIcon from "../assets/icons/add.svg?react";
import Trash from "../assets/icons/trash.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import CloudSunIcon from "../assets/icons/cloud-sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import TasksSeparator from "./TasksSeparator";
import { useState } from "react";
import TASKS from "../data/tasks";
import Item from "./Item";

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS);

  const morningTasks = tasks.filter((tasks) => tasks.time === "morning");
  const afternoonTasks = tasks.filter((tasks) => tasks.time === "afternoon");
  const eveningTasks = tasks.filter((tasks) => tasks.time === "evening");

  const handleDeleteClick = (taskId) => {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  };

  const handleCheckboxClick = (taskId) => {
    console.log("Clicou!");
    let newTasks = tasks.map((task) => {
      if (task.id != taskId) {
        return task;
      }

      // essa trafefa vai ser atualizada
      if (task.status === "not_started") {
        return { ...task, status: "in_progress" };
      }
      if (task.status === "in_progress") {
        return { ...task, status: "done" };
      }
      if (task.status === "done") {
        return { ...task, status: "not_started" };
      }
      return { ...task, status: "done" };
    });
    setTasks(newTasks);
  };

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
            <div className="space-y-3">
              <TasksSeparator>
                <SunIcon /> Manhã
              </TasksSeparator>
              {morningTasks.map((item) => (
                <Item
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  status={item.status}
                  handleCheckboxClick={handleCheckboxClick}
                  handleDeleteClick={handleDeleteClick}
                />
              ))}
            </div>

            <div>
              <div className="my-6 space-y-3">
                <TasksSeparator>
                  <CloudSunIcon /> Tarde
                </TasksSeparator>
                {afternoonTasks.map((item) => (
                  <Item
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    status={item.status}
                    handleCheckboxClick={handleCheckboxClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <TasksSeparator>
                <MoonIcon /> Noite
              </TasksSeparator>
              {eveningTasks.map((item) => (
                <Item
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  status={item.status}
                  handleCheckboxClick={handleCheckboxClick}
                  handleDeleteClick={handleDeleteClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
