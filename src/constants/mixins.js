import { Dimensions } from 'react-native';

const dimensions =  Dimensions.get('screen');
export const WINDOW_WIDTH = dimensions.width;
export const WINDOW_HEIGHT = dimensions.height;
export const WIDTH_MARGIN  = dimensions.width * 0.85;
export const WIDTH_HUNDRED = '100%';
export const HEIGHT_HUNDRED = '100%';
export const ROW = 'row';
export const COLUMN = 'column';
export const SPACE_BETWEEN =  'space-between';
export const CENTER = 'center';
export const ABSOLUTE = 'absolute';
export const RELATIVE = 'relative';

