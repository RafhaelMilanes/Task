import { createPortal } from "react-dom";
import Input from "./Input";
import Button from "./Button";

const AddTaskDialogo = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed bottom-0 left-0 right-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur-sm">
      <div className="rounded-xl bg-white p-5 text-center shadow-sm">
        <h2 className="text-xl font-semibold text-[#35383E]"> Nova Tarefa</h2>
        <p className="mb-4 mt-1 text-xs opacity-30">
          Insira as informações abaixo
        </p>

        <div className="flex flex-col space-y-4">
          <Input id="title" label="Título" placeholder="Título da tarefa" />
          <Input id="time" placeholder="Horário" />
          <Input id="description" placeholder="Descrição da tarefa" />
          <div className="flex gap-3">
            <Button size="" variant="" onClick={handleClose}>
              Cancelar
            </Button>
            <Button size="lg" variant="primary">
              {" "}
              Salvar
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default AddTaskDialogo;
