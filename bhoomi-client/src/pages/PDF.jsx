import { CssBaseline, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Pdf from "react-to-pdf";
import { styled } from '@mui/material/styles';
import "../components/css/PDF.css"
import Paper from '@mui/material/Paper';
import { getAllProjects } from '../redux/actions/projectActions';
import { submitFile } from '../redux/actions/fileActions';
import axios from 'axios';

const ref = React.createRef();

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.common.black,
        borderBottom: theme.palette.common.black
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));


const PDF = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const dispatch = useDispatch()

    const { loading, projects } = useSelector(state => state.allProjects)

    useEffect(() => {

        dispatch(getAllProjects())

    }, [dispatch])


    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append(`file`, file);
        formData.append("filename", file.name);

        const { data } = await axios.post("/api/v1/sendAttachment", formData);
    }

    const uploadFile = (e) => {
        debugger;
        const newfile = e.target.files[0];
        setFile(newfile)
        setFileName(e.target.files[0].name);
    };



    return (
        <div>
            <div className="">
                <u style={{ fontWeight: "bold", display: "flex", justifyContent: "center" }} >Project Details</u>
            </div>
            <div className='allProjects'>
                <div className='pdfReport'>
                    <div>
                        <div ref={ref}>
                            <div>    </div>
                            <div className='tableCOntainer' >
                                <TableContainer   >
                                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                                        <TableHead sx={{ borderBottom: 1, borderColor: "blue" }}>
                                            <TableRow  >
                                                <StyledTableCell>Project Id </StyledTableCell>
                                                <StyledTableCell >Project Name</StyledTableCell>
                                                <StyledTableCell >Budget ₹crore</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {projects?.map((ele) => (
                                                <TableRow
                                                    key={ele.projectId}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {ele.projectId}
                                                    </TableCell>
                                                    <TableCell >{ele.projectName}</TableCell>
                                                    <TableCell >{ele.budget}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="allButtons">
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
                <input type="file" onChange={uploadFile} />
                <button onClick={submitHandler}>Save to backend</button>
            </div>
        </div>

    )
}

export default PDF