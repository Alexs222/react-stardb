import React from 'react';
import ItemDetails, { Record } from '../item-details';

import { withSwapiService } from '../hoc-helper/';


const StarshipDetails = (props) => {

  // const { getStarship, getStarshipImage } = swapiService;

  return (
    <ItemDetails {...props}>
    
    <Record field='model' label='Model' />
    <Record field='length' label='Length' />
    <Record field='costInCredits' label='cost' />

  </ItemDetails>
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
};


export default withSwapiService(mapMethodsToProps)(StarshipDetails);

