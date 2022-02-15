import { LightTheme1 } from './schemes/LightTheme1';
import { GreyGooseTheme } from './schemes/GreyGooseTheme';
import { PurpleFlowTheme } from './schemes/PurpleFlowTheme';
import { DarkTheme } from './schemes/DarkTheme';

const themeMap = {
  LightTheme1,
  GreyGooseTheme,
  PurpleFlowTheme,
  DarkTheme,
};

export function themeCreator(theme) {
  return themeMap[theme];
}
