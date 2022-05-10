import * as React from 'react';

const FilesContext = React.createContext({
  filesJSON: {} as any,
  setFilesJSON: (data: any) => {
    /**/
  },
});
export default FilesContext;
