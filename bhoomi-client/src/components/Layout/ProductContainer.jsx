import styled from '@emotion/styled';
import { Grid, Paper } from '@mui/material'
import React from 'react'

const ProductContainer = (props) => {


    const Item = styled(Paper)(({ theme }) => ({
        // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        // ...theme.typography.body2,
        // padding: theme.spacing(1),
        border: "solid 2px black",
        textAlign: 'left',
        // color: theme.palette.text.secondary,
        textDecoration: "none",
    }));


    return (
        <div>
            <Grid item xs={6} key={props.projectId}>
                <Item>
                    <div >Project Id :{props.projectId}</div>
                    <div >Project Name :{props.projectName}</div>
                    <div>Budget : {props.budget}</div>
                    <div>End Date: {new Date(props.endDate).toLocaleDateString()}</div>
                </Item>
            </Grid>

        </div>
    )
}

export default ProductContainer