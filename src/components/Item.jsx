const Item = ({ item, index, items, setItems }) => {
  return (
    <div className="item">
      {/* We listen to the checkbox and mark as done item if the box is checked */}
      <input
        onChange={(event) => {
          const cloneItems = [...items];
          cloneItems[index].isChecked = event.target.checked;
          setItems(cloneItems);
        }}
        type="checkbox"
        name="item"
        id={`item-${index}`}
      />

      {/* if the task is marked as done we add a class to the label for underline effect */}
      <label
        className={items[index].isChecked ? "line-through" : ""}
        htmlFor={`item-${index}`}
      >
        {item}
      </label>

      {/* delete item on click */}
      <i
        onClick={() => {
          const cloneItems = [...items];
          cloneItems.splice(index, 1);
          setItems(cloneItems);
        }}
        className="color-primary far fa-trash-alt"
      ></i>
    </div>
  );
};
export default Item;
