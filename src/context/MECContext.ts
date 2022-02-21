import * as React from 'react';

const MECtContext = React.createContext({
  mecJSON: {} as any,
  setMECJSON: (data: any) => {
    /**/
  },
});
export default MECtContext;
