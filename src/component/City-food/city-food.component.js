import React from "react";
import { useSelector } from "react-redux";

const cityFood = () => {
    const {cityItems} = useSelector((state) => state.city);
    console.log("MY STATE : ",cityItems[0].title);
    return (
        <div className="city-preview">
       { 
       cityItems
          .map((item,id) => (
      //        <CityFoodJoint key = {item.id} item = {item.items} />
            item.foodJoints.map((city,id) => (
                <div>
                <h4>{city.name}</h4>
                <img src = {city.imgUrl}/>
                </div>
            ))      
            ))}
        </div>
      );

}

export default cityFood;