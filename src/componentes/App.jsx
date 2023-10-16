import Food from "./Food";
import Foods from "../models/foods";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
  const [foods, setFoods] = useState(Foods)
  const handlerClick = () =>{
    setFoods([...foods])
  };
  return (
    <div className="container">
    <h1 className="mt-5 text-center">Menu</h1>

    <div className="text-right">
      <button type="button" className="btn btn-secondary rounded-circle mr-4 font-weight-bold" id="newBtnFood" data-toggle="modal" data-target="#formFoodModal" onClick={handlerClick}>
        +
      </button>
    </div>

    <section className="card-deck my-3 d-inline-flex w-100">
      
      {foods.map((food)=>{
        return <Food food={food} key={food.id}></Food>
      })}
    </section>
    </div>
    );
}

export default App;
