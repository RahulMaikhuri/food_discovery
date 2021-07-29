import React from "react";
import { withRouter } from "react-router-dom";
import "./city-item.styles.scss";
import { getItem } from "../../redux/city.actions";
import { connect } from "react-redux";
import { size } from "lodash"

const CityItem = ({ title, imageUrl,linkUrl, history, match, location, getItem}) => {
  return (
  <div className={`${size} collection-preview`}
  style={{
    paddingInline:'10px'
  }} onClick = {() => {getItem(title); history.push(`${match.url}${linkUrl}`)}}
  >
    <h4 className="title">{title.toUpperCase()}</h4>
    <img className= "image" style={{
            header:'230px',width:'250px'
          }} src={imageUrl}/>
  </div>
  )
  };
  
  const mapDispatchToProps = (dispatch) => ({
    getItem: (title) => dispatch(getItem(title)),
  });

export default withRouter(connect(null, mapDispatchToProps)(CityItem));