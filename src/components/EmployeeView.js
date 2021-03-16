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
  
export default function EmployeeView({ users, handleSort }) {
    const classes = useStyles();
    const formatDate = (date) => {
      const dateArray = date.split("-");
      const year = dateArray[0];
      const month = dateArray[1];
      const dayArray = dateArray[2].split("T");
      const day = dayArray[0];
      const formattedDate = [month, day, year].join("-");
      return formattedDate;
    };
  
    return (
      <div className="container">
        {users[0] !== undefined && users[0].name !== undefined ? (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell
                    align="right"
                    onClick={() => {
                      handleSort(users.name);
                    }}
                  >
                    Name
                  </TableCell>
                  <TableCell align="right">Date of Birth</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Phone Number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={user.login.uuid}>
                    <TableCell component="th" scope="row">
                      <img src={user.picture.thumbnail} alt="employee portrait" />
                    </TableCell>
                    <TableCell align="right">
                      <p>
                        {user.name.first} {user.name.last}
                      </p>
                    </TableCell>
                    <TableCell align="right">
                      <p>{formatDate(user.registered.date)}</p>
                    </TableCell>
                    <TableCell align="right">
                      <p>
                        <a href={"mailto:" + user.email}>{user.email}</a>
                      </p>
                    </TableCell>
                    <TableCell align="right">
                      <p>{user.phone}</p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <>Please try another user.</>
        )}
      </div>
    );
  }