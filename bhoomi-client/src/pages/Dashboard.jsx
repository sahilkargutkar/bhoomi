import { Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React from 'react'
import "../components/css/Dashboard.css"
import ButtonModal from '../components/Layout/ButtonModal'
import { useEffect } from 'react';
import { createProject, getAllProjects } from '../redux/actions/projectActions';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    border: "solid 2px black",
    textAlign: 'left',
    color: theme.palette.text.secondary,
    textDecoration: "none",
}));



const Dashboard = () => {
    const { loading, projects } = useSelector(state => state.allProjects)
    const [projectName, setProjectName] = useState("")
    const [projectManager, setProjectManager] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [siteAddress, setSiteAddress] = useState("")
    const [railwayStation, setRailwayStation] = useState("")
    const [budget, setBudget] = useState("")
    const [supplierName, setSupplierName] = useState("")
    const [contactPerson, setContactPerson] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [projectStatus, setProjectStatus] = useState("")

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getAllProjects())

    }, [dispatch])



    const newProject = (e) => {
        e.preventDefault();
        const body = {
            projectName,
            projectManager,
            startDate,
            endDate,
            siteAddress,
            railwayStation,
            budget,
            SupplierName: supplierName,
            contactPerson, phone, email, projectStatus
        }


        console.log("body", body)


        dispatch(createProject(body))



    }


    return (
        <div>
            <div className='gridContainer'>
                <div className='buttonContainerModal'>
                    <ButtonModal name="Create a Project" >
                        <form onSubmit={newProject}>
                            <div className='childrenInModal'>
                                <label>Project Name </label>
                                <input type="text" onChange={e => setProjectName(e.target.value)} />
                            </div>
                            <div className='childrenInModal'>
                                <label>Project Manager </label>
                                <input type="text" onChange={e => setProjectManager(e.target.value)} />
                            </div>
                            <div className='childrenInModal'>
                                <label>Start Date </label>
                                <input type="date" onChange={e => setStartDate(e.target.value)} />
                            </div>
                            <div className='childrenInModal'>
                                <label>Site Address </label>
                                <input type="text" onChange={e => setSiteAddress(e.target.value)} />
                            </div>
                            <div className='childrenInModal'>
                                <label>Railway Station </label>
                                <input type="text" onChange={e => setRailwayStation(e.target.value)} />
                            </div>
                            <div className='childrenInModal'>
                                <label>Budget </label>
                                <input type="text" onChange={e => setBudget(e.target.value)} />
                            </div>
                            <div className='childrenInModal'>
                                <label>End Date </label>
                                <input type="date" onChange={e => setEndDate(e.target.value)} />
                            </div>
                            <div className='childrenInModal'>
                                <label> Supplier Name</label>
                                <input type="text" onChange={e => setSupplierName(e.target.value)} />
                            </div>
                            <div className='childrenInModal'>
                                <label>Contact Person</label>
                                <input type="text" onChange={e => setContactPerson(e.target.value)} />
                            </div>
                            <div className='childrenInModal'>
                                <label>phone</label>
                                <input type="text" onChange={e => setPhone(e.target.value)} />
                            </div>
                            <div className='childrenInModal'>
                                <label>Email</label>
                                <input type="email" onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className='childrenInModal'>
                                <label>Project Status</label>
                                <select value={projectStatus} onChange={e => setProjectStatus(e.target.value)}>
                                    <option value="Bhumipuja completed">Bhumipuja completed</option>
                                    <option value="Foundation completed">Foundation completed</option>
                                    <option value="Cement Ordered">Cement Ordered</option>
                                    <option value="Jelly Ordered">Jelly Ordered</option>
                                </select>
                            </div>
                            <button type="submit" >Submit</button>
                        </form>
                    </ButtonModal>
                </div>
            </div>
            <div className='containerModal'>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {projects?.map((data) => (
                        <>

                            <Grid item xs={6} key={data.projectId}>
                                <Link to={`/project/${data.projectId}`} className="linkClass">
                                    <Item>
                                        <div className='gridItem'>Project Id :{data.projectId}</div>
                                        <div className='gridItem'>Project Name :{data.projectName}</div>
                                        <div className='gridItem'>Budget : {data.budget}</div>
                                        <div className='gridItem'>End Date: {new Date(data.endDate).toLocaleDateString()}</div>
                                    </Item>
                                </Link>
                            </Grid>

                        </>
                    ))} </Grid>
            </div>


        </div >
    )
}

export default Dashboard