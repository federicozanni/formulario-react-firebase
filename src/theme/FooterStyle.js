import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
      padding: theme.spacing(4),
      marginTop: 'auto',
      },
      
    }));

export const FooterStyle = () => {
    
  const classes = useStyles();

  return {
    classes,
  }

}