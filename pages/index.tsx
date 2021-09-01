import React from 'react';
import type {NextPage} from "next";
import Layout from "../components/Layout";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "../components/Chart/Chart";
import Deposits from "../components/includes/Deposits";
import Orders from "../components/includes/Orders";
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";
import AssessmentIcon from '@material-ui/icons/Assessment';
import PageHeader from "../components/includes/pageHeader";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));
const Home: NextPage = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Layout>
            <Container maxWidth="xl" className={classes.container}>
                <PageHeader icon={<AssessmentIcon fontSize="large"/>} title="Page Title"
                            subTitle={"page description"}/>

                <Grid container spacing={3}>

                    {/* Chart */}
                    <Grid item xs={12} md={6} lg={6}>
                        <Paper className={fixedHeightPaper}>
                            <Chart/>
                        </Paper>
                    </Grid>
                    {/* Recent Deposits */}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper className={fixedHeightPaper} elevation={1}>
                            <Deposits/>
                        </Paper>
                    </Grid>
                    {/* Recent Orders */}
                    {/* Recent Deposits */}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <Deposits/>
                        </Paper>
                    </Grid>
                    {/* Recent Orders */}
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Orders/>
                        </Paper>
                    </Grid>

                    {/* Recent Orders */}
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Orders/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Home;
