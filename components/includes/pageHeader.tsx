import React, {FC} from 'react';
import {Paper, Card, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#333'
    },
    pageHeader: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        display: 'flex',
    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(2),
    },
    pageTitle: {
        paddingLeft: theme.spacing(4),
        '& .MuiTypography-subtitle2': {
            opacity: '0.6'
        }
    }
}));

type PageHeaderProps = {
    title: string,
    subTitle: string,
    icon: any
}

const PageHeader: FC<any> = ({title, subTitle, icon}: PageHeaderProps) => {

    const classes = useStyles();
    return (
        <Paper elevation={0}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon} elevation={0}>
                    {icon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography variant="h6" component="div">{title}</Typography>
                    <Typography variant="subtitle2" component="div">{subTitle}</Typography>
                </div>
            </div>
        </Paper>
    )
};
export default PageHeader;
