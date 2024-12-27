import { Toaster, toast } from "sonner";
import Sidebar from "./components/SideBar";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="flex gap-9">
      <Toaster
        toastOptions={{
          style: {
            color: "",
          },
        }}
      />
      <Toaster
        richColors
        toastOptions={{
          style: {
            color: "#002C2E",
          },
        }}
      />
      ;
      <Sidebar />
      <Tasks />
    </div>
  );
}

export default App;
