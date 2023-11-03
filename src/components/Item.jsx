const Item = ({ item, index, items, setItems }) => {
  return (
    <div className="item">
      <input
        onChange={(event) => {
          //   setIsChecked(event.target.checked);
          const cloneItems = [...items];
          cloneItems[index].isChecked = event.target.checked;
          setItems(cloneItems);
        }}
        type="checkbox"
        name="item"
        id={`item-${index}`}
      />

      <label
        className={items[index].isChecked ? "line-through" : ""}
        htmlFor={`item-${index}`}
      >
        {item}
      </label>
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
