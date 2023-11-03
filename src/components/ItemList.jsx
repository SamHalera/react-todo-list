import Item from "./Item";

const ItemList = ({ items, setItems }) => {
  return (
    <div className="item-list">
      {items.map((item, index) => {
        return (
          <Item
            key={item.name}
            item={item.name}
            index={index}
            items={items}
            setItems={setItems}
            //     // isChecked={isChecked}
            //     // setIsChecked={setIsChecked}
          />
        );
      })}
    </div>
  );
};
export default ItemList;
