import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFruit, clearCart, selectAll } from "../../features/fruits/fruitsSlice";
import "../../App.css";

const HomeItem = () => {
  const dispatch = useDispatch();
  const { fruites, selectedFruits } = useSelector(state => state.fruits);

  return (
    <div className="app">
      <h2 className="title">Meyvə Seçmə Tətbiqi</h2>

      <div className="container">
        <div className="card-section">
          <div className="section-title">Meyvə Kartları</div>
          <div className="button-group">
            <button onClick={() => dispatch(selectAll())}>Select All</button>
            <button onClick={() => dispatch(clearCart())}>Delete All</button>
          </div>
          {fruites.map(fruit => (
            <div
              key={fruit.id}
              onClick={() => dispatch(addFruit(fruit))}
              className={`fruit-card ${selectedFruits.find(f => f.id === fruit.id) ? "selected" : ""}`}
            >
              {fruit.name}
            </div>
          ))}
        </div>

        <div className="selected-section">
          <div className="section-title">Seçilmiş Meyvələr</div>
          {selectedFruits.length > 0 ? (
            selectedFruits.map((fruit) => (
              <div key={fruit.id} className="selected-fruit">
                {fruit.name}
              </div>
            ))
          ) : (
            <p>Heç bir meyvə seçilməyib.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
