import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

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