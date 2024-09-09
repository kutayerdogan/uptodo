import { isIOS } from '../utils/platformUtils';

// Tüm Lato font ailelerini tanımlar
export const fontFamilies = {
  LATO: {
    normal: isIOS() ? 'Lato-Regular' : 'LatoRegular',
    medium: isIOS() ? 'Lato-Medium' : 'LatoMedium',
    bold: isIOS() ? 'Lato-Bold' : 'LatoBold',
    light: isIOS() ? 'Lato-Light' : 'LatoLight',
    black: isIOS() ? 'Lato-Black' : 'LatoBlack',
    thin: isIOS() ? 'Lato-Thin' : 'LatoThin',
  },
};
