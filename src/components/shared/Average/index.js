import React from 'react';
import { AirbnbRating } from 'react-native-elements';
import PropTypes from 'prop-types';
import * as Colors from 'constants/colors';

function Average ({ rating }) {
  return (
      <AirbnbRating 
        showRating={false} 
        selectedColor={Colors.STAR_SELECTED}
        size={15}
        defaultRating={rating}
        isDisabled={true}
        starContainerStyle={{ alignSelf: "flex-start" }} 
      />
  );
}

Average.propTypes = {
  rating: PropTypes.number
}

Average.defaultProps = {
  rating: 1
}
export default Average;

