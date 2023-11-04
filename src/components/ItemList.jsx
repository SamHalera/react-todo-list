//This component is no longer used but not deleted for the exemple...
import Item from "./Item";
const ItemList = ({ items, setItems }) => {
  return (
    <div className="item-list">
      {items.map((item, index) => {
        return (
          <Item
            key={item.name + index}
            item={item.name}
            index={index}
            items={items}
            setItems={setItems}
          />
        );
      })}
    </div>
  );
};
export default ItemList;
