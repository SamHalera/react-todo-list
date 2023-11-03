import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  const [isItemChecked, setIsChecked] = useState([]);
  return (
    <>
      <Header />
      <main>
        <ItemList
          items={items}
          setItems={setItems}
          // isChecked={isChecked}
          // setIsChecked={setIsChecked}
        />

        <Form
          items={items}
          setItems={setItems}
          value={value}
          setValue={setValue}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
