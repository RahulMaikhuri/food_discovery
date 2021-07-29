export const getCityItems = (cityItems ,id) => {
    console.log("GET ID  : ", id)
    const itemarr = cityItems.filter((item, idx) => item.title === id);
    console.log("FINAL RESULT : ",itemarr)
    return itemarr;
}