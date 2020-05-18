import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete } = props;
  


  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.brand}</h3> 
      <p>{keg.name}</p>
      <p>{keg.price}</p>
      <p>{keg.alcohol}</p>
      <p>{keg.description}</p>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={()=> onClickingDelete(keg.id) }>Delete Keg</button>
      <button onClick={ props.onClickingDecrement }>Sell Pint</button>
      <p>Pint Count: {keg.count}</p>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDecrement: PropTypes.func
};

export default KegDetail;