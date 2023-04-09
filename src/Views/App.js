import React, { useEffect, useState } from "react";
import "./App.css";
//Components
import ItemContainer from "../Components/ItemContainer";
import Loader from "../Components/Loader";
import Select from "../Components/Select";
import Footer from "../Components/Footer";
import Error from "../Components/Error";
//redux
import { useSelector, useDispatch } from "react-redux";
import { getItems, getCategories } from "../redux/actions";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.products.loading);

  const categories = useSelector((state) => state.products.categories);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    dispatch(getItems());
    dispatch(getCategories());
  }, [dispatch]);

  //save category selected value
  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  //filter by categories
  const filteredItems = products.items.filter((item) => {
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
      {products.error ? (
        <Error text="Error network" />
      ) : (
        <div className="container">
          <div className="items-wrapper">
            {loading ? (
              <Loader />
            ) : (
              filteredItems.map((item) => {
                return (
                  <ItemContainer
                    className="item"
                    key={item.id}
                    itemTitle={item.title}
                    itemPrice={item.price}
                    itemImage={item.image}
                  />
                );
              })
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
