import * as React from 'react';

const MMCContext = React.createContext({
  mmcJSON: {} as any,
  setMMCJSON: (data: any) => {
    /**/
  },
});
export default MMCContext;
