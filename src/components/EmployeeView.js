import React, { useState, useEffect } from "react";
import Query from './Query'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function EmployeeDisplay() {
    const classes = useStyles();
    const [nameSearch, setNameSearch] = useState("")
    const [names, setNames] = useState()
    useEffect(() => {
        const apiCall = async (event) => {
            const apiCall = `https://randomuser.me/api/?results=100&nat=us`

            try {
                const response = await fetch(apiCall)
                const data = await response.json()
                // const newArray = []
                console.log(data)
                setNames(data.results)
            } catch (err) {
                console.log(err)
            }
        }
        apiCall()
    }, [])

   
    function formatDate(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate;
    }

    const handleNameChange = event => {
        console.log(event.target.value)
        setNameSearch(event.target.value)
    }
    useEffect(() => {
        console.log(nameSearch)
    })

    // if (names) {
    //     var dataGrid = [{ field: 'name.first', sort: 'asc' }]
    // }

    return (
        <>
            <Query
                handleNameChange={handleNameChange}
                nameSearch={nameSearch}
            />
            <div className="table">
                <TableContainer component={Paper}>
                    {/* <DataGrid
                        {...names}
                        sortModel={dataGrid}
                    /> */}
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Phone</TableCell>
                                <TableCell align="left">Email</TableCell>
                                <TableCell align="left">DOB</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {names ? names.map((name) => (
                                < TableRow key={name.index}>
                                    <TableCell>
                                        <img src={name.picture.thumbnail} alt={`${name.name.first} ${name.name.last}`} />
                                    </TableCell>
                                    <TableCell>
                                        {name.name.first} {name.name.last}
                                    </TableCell>
                                    <TableCell>
                                        {name.cell}
                                    </TableCell>
                                    <TableCell>
                                        {name.email}
                                    </TableCell>
                                    <TableCell>
                                        {formatDate(name.dob.date)}
                                    </TableCell>
                                </TableRow>
                            )) : ""}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}