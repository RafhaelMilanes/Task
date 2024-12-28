import { useState } from "react";
import Button from "./Button";
import AddIcon from "../assets/icons/add.svg?react";
import Trash from "../assets/icons/trash.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import CloudSunIcon from "../assets/icons/cloud-sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import TasksSeparator from "./TasksSeparator";
import TASKS from "../data/tasks";
import Item from "./Item";
import { toast } from "sonner";
import AddTaskDialog from "./AddTaskDailog";

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [dialog, setDialog] = useState(false);

  const morningTasks = tasks.filter((task) => task.time === "morning");
  const afternoonTasks = tasks.filter((task) => task.time === "afternoon");
  const eveningTasks = tasks.filter((task) => task.time === "evening");

  const handleDeleteClick = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    toast.error("Tarefa removida com sucesso!");
  };

  const handleClose = () => {
    setDialog(false);
  };

  const handleCheckboxClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== taskId) return task;

      switch (task.status) {
        case "not_started":
          toast.warning("Tarefa iniciada com sucesso!");
          return { ...task, status: "in_progress" };
        case "in_progress":
          toast.success("Tarefa concluída com sucesso!");
          return { ...task, status: "done" };
        case "done":
          toast("Tarefa reiniciada!");
          return { ...task, status: "not_started" };
        default:
          return task;
      }
    });
    setTasks(newTasks);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    toast.success("Tarefa adicionada com sucesso!");
  };

  return (
    <div className="w-full px-8 py-16">
      <div className="flex w-full justify-between pb-6">
        <div>
          <span className="text-brands-primary text-xs font-semibold">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas tarefas</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="secondary">
            Limpar tarefa <Trash />
          </Button>

          <Button size="lg" onClick={() => setDialog(true)}>
            Nova tarefa <AddIcon />
          </Button>
        </div>
      </div>

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

      <AddTaskDialog
        isOpen={dialog}
        handleClose={handleClose}
        handleAddTask={handleAddTask}
      />
    </div>
  );
};

export default Tasks;
