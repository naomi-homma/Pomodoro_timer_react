//View担当：設定されている各時間を表示するcomponents
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

//入力された値を受け取って表示するだけ
//入力された値を保持(セット)しているのはUserInputContainer

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    borderRight:'2px solid #ccc',
  },
  body: {
    fontSize: 14,
    borderRight:'2px solid #aaa',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableContainer = styled(TableContainer)`
    max-width: 400px;
    margin: 0 auto;
`;

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('作業時間', 25),
  createData('休憩時間', 5),
  createData('長休憩時間', 20),
  createData('長休憩までの作業時間', 4)
];

const useStyles = makeStyles({
  table: {
    maxWidth: 400,
  },
});

const InputTimeDesplay = () => {
  const classes = useStyles();
  return (
    <StyledTableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>設定</StyledTableCell>
            <StyledTableCell align="right">時間(分)&nbsp;/&nbsp;回数</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}


export default InputTimeDesplay;