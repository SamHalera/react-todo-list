const Form = ({ items, setItems, value, setValue }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const cloneItems = [...items];
        // console.log({
        //   item: value,
        //   isChecked: false,
        // });
        cloneItems.push({
          name: value,
          isChecked: false,
        });
        setItems(cloneItems);
      }}
      className="form-create-to-do"
    >
      <div className="inputs-container">
        <input
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
