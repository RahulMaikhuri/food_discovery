import React, { useState} from "react";
import CITY_DATA from "./cityData";
import CityItem from "../city-tem/cityItem.component";
import "./city.styles.scss";

const City = () => {

    const [sections, setSections] = useState(CITY_DATA);

    const [statusCity, setStatusCity] = useState(false);

    return (
          <div className="city-menu" style={{
            display:'flex'
          }}>
            {sections.map(({ id, ...otherSectionProps }) => (
              <CityItem key={id} {...otherSectionProps} />
            ))}
          </div>
      );
    
};

export default City;