import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import Item from "./components/Item";

function App() {
  //Create a state for dynamic elements :
  //lists of task items, input value, possible errors
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  //create an array that contains all the possible tasks marked as done
  const itemsChecked = items.filter((item, index) => {
    if (item.isChecked === true) {
      return item;
    }
  });

  console.log(itemsChecked);

  //render the HTML elements into the DOM
  return (
    <>
      {/* static component */}
      <Header />

      <main>
        <Form
          items={items}
          setItems={setItems}
          value={value}
          setValue={setValue}
          error={error}
          setError={setError}
        />

        {/* Display all the items that are not marked as done ==> items.isChecked is false */}
        <div className="item-list">
          {items.map((item, index) => {
            if (!item.isChecked) {
              return (
                <Item
                  key={item.name + index}
                  item={item.name}
                  index={index}
                  items={items}
                  setItems={setItems}
                />
              );
            } else {
              return null;
            }
          })}
        </div>

        {/* Display all the items that are marked as done ==> items.isChecked is true */}
        {itemsChecked.length > 0 && (
          <div className="items-done">
            <h2>Tasks done</h2>
            {itemsChecked.map((item, index) => {
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
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
