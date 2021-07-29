import CityActionTypes from "./city.types";

export const getItem = (id) => ({
    type: CityActionTypes.GET_ITEM,
    payload: id,
  });