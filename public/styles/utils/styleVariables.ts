type Colors = {
  gunmetalDark: string;
  gunmetalLight: string;
  cadetGray: string;
  nonPhotoBlue: string;
  white: string;
  indianRed: string;
  persianRed: string;
  action: string;
};

type Margins = {
  mobile: string;
  web: string;
};

type Paddings = {
  mobile: string;
  web: string;
};

type StyleVariables = {
  fontFamily: string;
  mediaBreakpoint: string;
  colors: Colors;
  margins: Margins;
  paddings: Paddings;
};

const styleVariables: StyleVariables = {
  fontFamily: `'Trebuchet MS', sans-serif`,
  mediaBreakpoint: '641px',
  colors: {
    gunmetalDark: '#1E262A',
    gunmetalLight: '#2A353C',
    cadetGray: '#7C95A2',
    nonPhotoBlue: '#A0D2DB',
    white: '#FFFFFF',
    indianRed: '#C25B59',
    persianRed: '#CB3D3B',
    action: '#2D82DE',
  },
  margins: {
    mobile: '70px 10px 0',
    web: '100px 70px 0',
  },
  paddings: {
    mobile: '50px',
    web: '0 10%',
  },
};

export { styleVariables };
