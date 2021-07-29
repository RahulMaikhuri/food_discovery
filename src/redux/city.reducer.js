import CityActionTypes from "./city.types";
import { getCityItems } from "./city.utils";
import CITY_DATA from "../component/city-component/cityData";

const INITIAL_STATE = {
    cityItems: [],
};

const cityReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CityActionTypes.GET_ITEM:
            return {
                ...state,
                cityItems: getCityItems(CITY_DATA, action.payload)
            };
        default:
            return state;    
    }
};

export default cityReducer;