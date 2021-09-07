import React, {useState} from 'react'
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button, CircularProgress, Grid, makeStyles, Paper, Theme, Typography, Divider} from '@material-ui/core';
import {Form, Formik} from "formik";
import * as Yup from "yup";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PageHeader from "../components/includes/pageHeader";
import FormikControl from "../components/controls/FormikControl";
import statusValues from "../utils/status";
import {Status} from "../types/EnumTypes";
import {Course} from "../types/Course";
import Layout from "../components/Layout";
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';

const useStyles = makeStyles((theme: Theme) => ({
    pageContent: {
        padding: theme.spacing(3),
    },

}));
export default function Create() {

    const classes = useStyles();
    const [userAvatar, setUserAvatar] = useState<any>('');
    const [iconImage, setIconImage] = useState<any>(null);

    // const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     let reader = new FileReader();
    //     setIconImage(e.target.files[0]);
    //     reader.onloadend = () => {
    //         setUserAvatar(reader.result);
    //     };
    //     reader.readAsDataURL(e.target.files[0]);
    // };

    const initialValues: Course = {
        id: 0,
        userId: 0,
        categoryId: 0,
        title: "",
        previewVideoUrl: '',
        totalClasses: 0,
        sellingPrice: 0,
        regularPrice: 0,
        discount: 0,
        courseDuration: 0,
        description: '',
        totalTopics: 0,
        totalQuizes: 0,
        thumbnail: '',
        titleSlug: '',
        whatYouLearn: '',
        status: Status.ACTIVE,
        updatedAt: ''
    };
    const validationSchema = Yup.object({
        title: Yup.string().max(150).min(2).required("Required Title *"),
        position: Yup.number().positive().required("Required position *"),
        status: Yup.string().required(),
    });

    const onSubmit = async (values: Course, {setSubmitting, resetForm}: any) => {

        await setSubmitting(false);
        await resetForm(initialValues);
    };


    return (
        <Layout>
            <PageHeader icon={<FormatAlignCenterIcon fontSize="large"/>} title="Form Example"
                        subTitle={"Material form with formik"}/>


            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover/>
            <Paper className={classes.pageContent}>
                <Typography component={'p'} variant="h5">
                    Form Example
                </Typography>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {({values, touched, errors, handleChange, isSubmitting, isValid}) => (
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <FormikControl
                                        control="input"
                                        type="text"
                                        name='title'
                                        label="Enter Title"
                                        value={values.title}
                                        handleChange={handleChange}
                                        id="title"/>

                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <FormikControl
                                                control="input"
                                                type="number"
                                                name='regularPrice'
                                                label="Enter Regular Price"
                                                value={values.regularPrice}
                                                handleChange={handleChange}
                                                id="regularPrice"/>

                                            <FormikControl
                                                control="input"
                                                type="number"
                                                name='sellingPrice'
                                                label="Enter Selling Price"
                                                value={values.sellingPrice}
                                                handleChange={handleChange}
                                                id="sellingPrice"/>
                                        </Grid>

                                        <Grid item xs={6}>

                                            <FormikControl
                                                control="input"
                                                type="number"
                                                name='discount'
                                                label="Enter Discount"
                                                value={values.discount}
                                                handleChange={handleChange}
                                                id="discount"/>

                                            <FormikControl
                                                control="input"
                                                type="number"
                                                name='courseDuration'
                                                label="Enter Course Duration"
                                                value={values.courseDuration}
                                                handleChange={handleChange}
                                                id="courseDuration"/>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={6}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <FormikControl
                                                control="input"
                                                type="number"
                                                name='regularPrice'
                                                label="Enter Regular Price"
                                                value={values.regularPrice}
                                                handleChange={handleChange}
                                                id="regularPrice"/>

                                            <FormikControl
                                                control="input"
                                                type="number"
                                                name='sellingPrice'
                                                label="Enter Selling Price"
                                                value={values.sellingPrice}
                                                handleChange={handleChange}
                                                id="sellingPrice"/>
                                        </Grid>

                                        <Grid item xs={6}>

                                            <FormikControl
                                                control="input"
                                                type="number"
                                                name='discount'
                                                label="Enter Discount"
                                                value={values.discount}
                                                handleChange={handleChange}
                                                id="discount"/>

                                            <FormikControl
                                                control="input"
                                                type="number"
                                                name='courseDuration'
                                                label="Enter Course Duration"
                                                value={values.courseDuration}
                                                handleChange={handleChange}
                                                id="courseDuration"/>
                                        </Grid>
                                    </Grid>

                                    <FormikControl
                                        control="select"
                                        name='status'
                                        label="Enter Status"
                                        options={statusValues}
                                        value={values.status}
                                        handleChange={handleChange}
                                        id="position"/>

                                </Grid>

                                <Grid item xs={6}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="secondary"
                                        disabled={isSubmitting || !isValid}
                                        startIcon={isSubmitting ? <CircularProgress disableShrink/> :
                                            <CloudUploadIcon/>}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                    </Button>
                                </Grid>

                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Layout>
    )
}
