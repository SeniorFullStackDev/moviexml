import * as React from 'react';

const MECContext = React.createContext({
  mecJSON: {} as any,
  setMECJSON: (data: any) => {
    /**/
  },
});
export default MECContext;
