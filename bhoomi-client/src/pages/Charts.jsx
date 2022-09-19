import React, { useEffect, useState } from 'react'
import { Line } from "react-chartjs-2"
import { useDispatch, useSelector } from 'react-redux'
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from "chart.js"
import { getAllProjects } from '../redux/actions/projectActions'
import "../components/css/Charts.css"

ChartJS.register(Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement)




const Charts = () => {
    const dispatch = useDispatch()
    const { projects } = useSelector(state => state.allProjects)

    useEffect(() => {
        dispatch(getAllProjects())
    }, [dispatch])

    const data = {
        labels: projects?.map(data => data.projectId)
        , datasets: [
            {
                label: "Budget",
                data: projects?.map(data => data.budget),
                backgroundColor: "yellow",
                borderColor: "red",
                borderWidth: 2,
            }
        ]
    }




    return (
        <div className='charts'>


            <div style={{ width: "700px" }}>
                <Line data={data} />
            </div>


        </div>
    )
}

export default Charts