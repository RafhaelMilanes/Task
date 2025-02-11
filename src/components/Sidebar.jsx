import HomeIcon from "../assets/icons/home.svg?react";
import TaskIcon from "../assets/icons/tasks.svg?react";
import SidebarButton from "./SideBarButton";

const Sidebar = () => {
  return (
    <>
      <div className="h-screen w-64 bg-white text-xl">
        <div className="px-8 py-6">
          <h1 className="mb-4 font-semibold text-brand-primary">
            Task Manager
          </h1>
          <p className="max-w-96 text-xs">
            Um simples
            <span className="text-brand-primary"> organizador de tarefas</span>.
          </p>
        </div>

        <div className="flex flex-col gap-2 p-2 text-xs">
          <SidebarButton>
            {" "}
            <HomeIcon />
            Início
          </SidebarButton>
          <SidebarButton>
            <TaskIcon />
            Minhas Tarefas
          </SidebarButton>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
