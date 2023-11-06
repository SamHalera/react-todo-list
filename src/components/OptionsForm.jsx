const OptionsForm = ({ items, setItems, index }) => {
  return (
    <form className="options-container">
      <div className="input-label">
        <label htmlFor="notes">Notes</label>
        <textarea
          name="notes"
          id="notes"
          cols="30"
          rows="10"
          // value={textAreaValue}
          placeholder="Notes"
        ></textarea>
      </div>
      <div className="input-label">
        <label htmlFor="due-date">Due date</label>
        <input type="date" id="due-date" name="due-date" />
      </div>

      <div className="btn-groups">
        {/* delete item on click */}
        <i
          onClick={() => {
            const cloneItems = [...items];
            cloneItems.splice(index, 1);
            setItems(cloneItems);
          }}
          className="color-primary far fa-trash-alt"
        ></i>
        <input type="submit" name="submit" id="submit" value="Add" />
      </div>
    </form>
  );
};
export default OptionsForm;
