import { useState } from "react";

const CreateTask = ({
  name,
  title,
  inputValue,
  setInputValue,
  error,
  onSubmit,
  textAreaValue,
}) => {
  const [isOptions, setIsOptions] = useState(false);
  const input = document.querySelector(".input-task");

  return (
    <form
      onSubmit={(event) => {
        onSubmit(event, input, inputValue);
      }}
      className="form-create-to-do"
    >
      {name && <p className="">Add a new tasks</p>}

      {error === true && (
        <span className="danger">You should add a new task!</span>
      )}

      <div className="task-inputs-container">
        {/* listen to any change for the input value. If so the state value is updated */}

        <input
          className="input-task"
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          type="text"
          name="name"
          id="name"
          placeholder="add a task"
        />

        <input type="submit" name="submit" id="submit" value="Add" />
      </div>
    </form>
  );
};

export default CreateTask;
