import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService, withChildrenFunction, compose } from '../hoc-helper';

const renderName = ({ name }) => <span>{ name }</span>
const renderStarship = ({ name, model}) => <span>{ name } ({ model })</span>

const mapPersonMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetsMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipsMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
};


const PersonList = compose(
                    withSwapiService(mapPersonMethodToProps),
                    withData,
                    withChildrenFunction(renderName)
                  )(ItemList);

const PlanetList = compose(
                    withSwapiService(mapPlanetsMethodToProps),
                    withData,
                    withChildrenFunction(renderName)
                  )(ItemList);

const StarshipList = compose(
                      withSwapiService(mapStarshipsMethodToProps),
                      withData,
                      withChildrenFunction(renderStarship)
                    )(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
}