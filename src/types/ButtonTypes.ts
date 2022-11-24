import { TPaletteSubMap } from '../components/ColorScheme';

export type TContainerProps = {
  width: number;
  height: number;
  color: TPaletteSubMap;
  selected: boolean;
};

export type TRouteProps = {
  key: string;
  name: string;
  params: undefined;
};

export type TSideMenuProps = {
  width: number;
  height: number;
  title: string;
  route: string;
  navKey: string;
  navigation: any;
};

export type TTextProps = {
  selected: string;
};