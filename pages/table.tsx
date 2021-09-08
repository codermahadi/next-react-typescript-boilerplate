import React from 'react';
import MUIDataTable from "mui-datatables";
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Paper} from "@material-ui/core";
import Layout from "../components/Layout";
import PageHeader from "../components/includes/pageHeader";

const data = [{
    title: 'Title',
    description: 'description',
    image: 'image',
    status: 'status'
}];
export default function TableView() {

    const columns = [
        {
            name: "title",
            label: "Title",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "description",
            label: "description",
            options: {
                filter: true,
                sort: true,
            }
        }, {
            name: "image",
            label: "image",
            options: {
                filter: true,
                sort: true,
            }
        }, {
            name: "status",
            label: "status",
            options: {
                filter: true,
                sort: true,
            }
        }
    ];

    const options = {
        filter: true,
        filterType: "dropdown",
        responsive: "vertical",
        tableBodyHeight: "500px",
        tableBodyMaxHeight: "500px"
    };

    return (
        <Layout>
            <PageHeader icon={<AssignmentIcon fontSize="large"/>} title="Course"
                        subTitle={"Course List"}/>

            <Paper>
                <MUIDataTable
                    title={"Categories"}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </Paper>
        </Layout>
    )
};
