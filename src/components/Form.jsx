const Form = ({ items, setItems, value, setValue, error, setError }) => {
  return (
    <form
      onSubmit={(event) => {
        // prevent submit action to refresh the browser
        event.preventDefault();

        //check if the input has been filled. if empty we modify the error state and display an error message
        if (document.querySelector(".input-task").value === "") {
          setError(true);
        } else {
          //if no error we set to false the error state
          setError(false);

          //clone the items array state
          const cloneItems = [...items];

          //add a new task object to the items array cloned
          cloneItems.push({
            name: value,
            isChecked: false,
          });

          //update the items array cloned
          setItems(cloneItems);

          //reset the input form
          document.querySelector("form").reset();
        }
      }}
      className="form-create-to-do"
    >
      <h2>Add a new task</h2>
      {error === true && (
        <span className="danger">You should add a new task!</span>
      )}

      <div className="inputs-container">
        {/* listen to any change for the input value. If so the state value is updated */}
        <input
          className="input-task"
          onChange={(event) => {
            setValue(event.target.value);
          }}
          type="text"
          name="text"
          id="text"
          placeholder="new task"
        />
        <input type="submit" name="submit" id="submit" value="Add task" />
      </div>
    </form>
  );
};
export default Form;
