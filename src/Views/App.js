import React, { useEffect, useState } from "react";

import "./App.css";

//Components
import ItemContainer from "../Components/ItemContainer";
import Loader from "../Components/Loader";
import Select from "../Components/Select";
import Footer from "../Components/Footer";
import Error from "../Components/Error";

import { getItems, getCategories } from "../api/apiManager";

function App() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getItems()
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(true);
        setIsLoading(false);
      });
    getCategories().then((res) => {
      setCategories(res.data);
    });
  }, []);

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //filter by categories
  const filteredItems = items.filter((item) => {
    return item.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div className="body">
      <div className="header">
        <Select
          name="categories"
          value={selectedCategory}
          options={categories}
          onChange={handleSelectChange}
        />
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="items-wrapper">
            {error ? <Error text="Error" /> : ""}
            {filteredItems.map((item) => (
              <ItemContainer
                className="item"
                key={item.id}
                itemTitle={item.title}
                itemPrice={item.price}
                itemImage={item.image}
              />
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
