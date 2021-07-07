import React from 'react';
import { Link, Typography, Container, CssBaseline} from '@material-ui/core';
import { FooterStyle } from '../theme/FooterStyle';


export default function Footer() {

    const { classes } = FooterStyle();

    return (
    <footer className={classes.footer}>
        <Container maxWidth="sm">
        <CssBaseline />
        <Typography variant="body2" color="textSecondary" align="center">
                &copy; {new Date().getFullYear()} Copyright⠀
            <Link className="link" color="inherit" href="https://www.wispro.co/">
            Wispro
            </Link>
        </Typography>
        </Container>
    </footer>
    );
}