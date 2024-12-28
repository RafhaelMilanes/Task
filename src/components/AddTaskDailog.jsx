import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import Input from "./Input";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import "./AddTaskDailog.css";
import IntupLabel from "./InputLabel";
import { v4 } from "uuid";
import { toast } from "sonner";

const AddTaskDialogo = ({ isOpen, handleClose, handleAddTask }) => {
  const [title, setTitle] = useState();
  const [time, setTime] = useState("morning");
  const [description, setDescription] = useState();
  const [error, setError] = useState([]);

  useEffect(() => {
    if (!isOpen) {
      setTitle(""), setTime("morning"), setDescription("");
    }
  }, [isOpen]);

  const nodeRef = useRef();

  const handleSaveClick = () => {
    const newError = [];

    if (!title.trim()) {
      newError.push({
        inputName: "title",
        message: "O título é obrigatório",
      });
    }

    if (!time.trim()) {
      newError.push({
        inputName: "time",
        message: "Esté campo é obrigatorio",
      });
    }

    if (!description.trim()) {
      newError.push({
        inputName: "description",
        message: "A descrição é obrigatoria",
      });
    }

    if (newError.length > 0) {
      setError(newError);
      return;
    }

    if (!title.trim() || !time.trim() || !description.trim()) {
      return toast.warning("Prencha todos os campos!");
    }
    handleAddTask({
      id: v4(),
      title: title,
      time: time,
      description: description,
      status: "not_started",
    });
    handleClose();
    console.log(title, time, description);
  };

  const titleError = error.find((error) => error.inputName === "title");
  const timeError = error.find((error) => error.inputName === "time");
  const descriptionError = error.find(
    (error) => error.inputName === "description",
  );

  return createPortal(
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
      unmountOnExit
    >
      <div
        ref={nodeRef}
        className="fixed bottom-0 left-0 right-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur-sm"
      >
        <div className="rounded-xl bg-white p-5 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-[#35383E]">Nova Tarefa</h2>
          <p className="mb-4 mt-1 text-xs opacity-30">
            Insira as informações abaixo
          </p>

          <div className="flex flex-col space-y-4">
            <Input
              id="title"
              label="Título"
              placeholder="Título da tarefa"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            {titleError && (
              <p className="text-left text-sm text-red-400">
                {titleError.message}
              </p>
            )}

            <div className="flex flex-col gap-1 text-start">
              <IntupLabel htmlfor="time" value={time}>
                Horário
              </IntupLabel>
              <select
                value={time}
                id="time"
                className="mb-4 rounded-lg border border-solid border-[#ECECEC] px-4 py-3 text-sm outline-[#00ADB5] placeholder:text-sm placeholder:text-[#9A9C9F]"
                onChange={(event) => setTime(event.target.value)}
              >
                <option value="morning">Manhã</option>
                <option value="afternoon">Tarde</option>
                <option value="evening">Noite</option>
              </select>
              {timeError && (
                <p className="text-left text-sm text-red-400">
                  {timeError.message}
                </p>
              )}
              <Input
                id="description"
                label="Descrição"
                placeholder="Descrição da tarefa"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            {descriptionError && (
              <p className="text-left text-sm text-red-400">
                {descriptionError.message}
              </p>
            )}

            <div className="flex gap-3">
              <Button size="" variant="" onClick={handleClose}>
                Cancelar
              </Button>
              <Button
                size="lg"
                variant="primary"
                onClick={() => {
                  handleSaveClick();
                }}
              >
                Salvar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.body,
  );
};

export default AddTaskDialogo;
