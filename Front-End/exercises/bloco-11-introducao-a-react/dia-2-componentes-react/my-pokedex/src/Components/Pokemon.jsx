import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { data: {name,id,type,image, averageWeight: {value, measurementUnit}} } = this.props;
        return (
            <div key = {id} className = 'pokemon-div'>
                <h1>{name}</h1>
                <h2>Tipo: {type}</h2>
                <h2>Peso: {value}{measurementUnit}</h2>
                <img src={image} alt="" />
            </div>
        );
    }
}

Pokemon.propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
        value: PropTypes.number,
      }),
      image: PropTypes.string,
    }).isRequired,
  };

export default Pokemon;