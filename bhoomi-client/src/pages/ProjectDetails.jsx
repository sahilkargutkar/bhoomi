import styled from '@emotion/styled'
import { Grid, Paper } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductContainer from '../components/Layout/ProductContainer'
import { getSingleProject } from '../redux/actions/projectActions'
import "../components/css/ProjectDetails.css"


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    padding: '10px',
    border: "solid 2px black",
    textAlign: 'left',
    color: "#000",
    textDecoration: "none",
}));


const ProjectDetails = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    const { project } = useSelector(state => state.singleProject)



    useEffect(() => {
        dispatch(getSingleProject(id))
    }, [dispatch, id])

    const arr = ["Bhumipuja completed", "Foundation completed", "Cement Ordered", "Jelly Ordered", "Iron received",]

    return (
        <div className=''>
            <div className='projectDetails'>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6} >
                        <Item>

                            <div className='gridItem'>Project Id :{project.projectId}</div>
                            <div className='gridItem'>Project Name :{project.projectName}</div>
                            <div className='gridItem'>Project Manager : {project.projectManager}</div>
                            <div className='gridItem'>Start Date: {new Date(project.startDate).toLocaleDateString()}</div>
                        </Item>
                    </Grid>
                    <Grid item xs={6} >
                        <Item>

                            <div className='gridItem'>Site Address :{project.siteAddress}</div>
                            <div className='gridItem'>Railway Station :{project.railwayStation}</div>
                            <div className='gridItem'>Budget : {project.budget}</div>
                            <div className='gridItem'>End Date: {new Date(project.endDate).toLocaleDateString()}</div>
                        </Item>
                    </Grid>
                    <Grid item xs={6} >
                        <Item>

                            <div className='gridItem'>Supplier 1 :{project.SupplierName}</div>
                            <div className='gridItem'>Contact Person :{project.contactPerson}</div>
                            <div className='gridItem'>Phone : {project.phone}</div>
                            <div className='gridItem'>Email: {project.email}</div>
                        </Item>
                    </Grid>
                    <Grid item xs={6} >
                        <Item>
                            <div className="projectStatus">
                                <div className='gridItem'>
                                    Project Status :
                                </div>

                                <div> {arr.slice(0, 4).map(ele => {

                                    if (ele === project.projectStatus) {
                                        return <div className='gridItem' style={{ color: "black", fontWeight: "800", marginTop: "10px" }}>{ele}</div>
                                    } else {
                                        return <div className='gridItem'> {ele} <br /></div>
                                    }
                                })}</div>
                            </div>

                        </Item>
                    </Grid>
                </Grid>

            </div>

        </div>
    )
}

export default ProjectDetails