import SidebarButton from "./SideBarButton";

const Sidebar = () => {
  return (
    <>
      <div className="h-screen w-64 bg-white text-xl">
        <div className="px-8 py-6">
          <h1 className="mb-4 font-semibold text-[#00ADB5]">Task Manager</h1>
          <p className="max-w-96 text-xs">
            Um simples
            <span className="text-[#00ADB5]"> organizador de tarefas</span>.
          </p>
        </div>

        <div className="flex flex-col gap-2 p-2 text-base">
          <SidebarButton>Início</SidebarButton>
          <SidebarButton>Minhas Tarefas</SidebarButton>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
