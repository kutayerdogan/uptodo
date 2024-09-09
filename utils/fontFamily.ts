import { isIOS } from './platformUtils';
import { fontFamilies } from '../constants/fonts';

// Platforma uygun font ailesini döndürür
export const getFontFamily = (
  weight: 'normal' | 'medium' | 'bold' | 'light' | 'black' | 'thin'
) => {
  return fontFamilies.LATO[weight];
};
