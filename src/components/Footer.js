import React from 'react';
import { makeStyles, Link, Typography, Container, CssBaseline} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(4),
        marginTop: 'auto',
        },
      }));

export default function Footer() {
    
const classes = useStyles();


    return (
    <footer className={classes.footer}>
        <Container maxWidth="sm">
        <CssBaseline />
        <Typography variant="body2" color="textSecondary"   align="center">
             &copy;  {new Date().getFullYear()} Copyright{' '}
            <Link color="inherit" href="https://www.wispro.co/">
            Wispro
            </Link>
        </Typography>
        </Container>
    </footer>
    );
}