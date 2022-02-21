import * as React from 'react';

const MECtContext = React.createContext({
  mmcJSON: {} as any,
  setMMCJSON: (data: any) => {
    /**/
  },
});
export default MECtContext;
