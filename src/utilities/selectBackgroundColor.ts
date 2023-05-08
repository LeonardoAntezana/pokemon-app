import { COLORS } from "../constants/Colors";

export const selectBackgroundColor = (types:string[]) => {
  switch(types[0]){
    case 'grass':
      return '#68d65f';
    case 'fire':
      return '#ff5959';
    case 'water':
      return '#78cca3';
    case 'bug':
      return '#d6c477';
    case 'poison':
      return '#d57be2';
    case 'ground':
      return '#b37f48';
    case 'rock':
    case 'steel':
      return '#958888';
    case 'electric':
      return '#e7fd2e';
    case 'fighting':
      return COLORS.dark;
    case 'ice':
      return '#19adff';
    case 'dark':
      return '#00375e';
    default:
      return '#fff'
  }
}