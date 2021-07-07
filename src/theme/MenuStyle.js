import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  menuContainer: {
      flex: '1',
      height: '91vh'
      },
      
    }));

export const MenuStyle = () => {
    
  const classes = useStyles();

  return {
    classes,
  }

}