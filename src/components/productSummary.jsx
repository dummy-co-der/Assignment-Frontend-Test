import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { visuallyHidden } from "@mui/utils";
import { headCells, rows } from "../data/tableContent";
import Pagination from "@mui/material/Pagination";
import CustomDropdown from "@/utils/customDropdown";
import { Button, useMediaQuery } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { page, setPage, count, rowsPerPage } = props;
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const [selectedColumn, setSelectedColumn] = useState("");

  const handleColumnsToShow = (event, value) => {
    setSelectedColumn(value);
  };

  const handleChangePage = (event, value) => {
    setPage(value - 1);
  };
  const options = [
    { columnsToDisplay: "ALL COLUMNS" },
    ...headCells
      .filter(
        (headCell) =>
          headCell.id !== "id" &&
          headCell.id !== "shippingId" &&
          headCell.label.trim() !== ""
      )
      .map((headCell) => ({
        columnsToDisplay: headCell.label,
      })),
  ];
  const filteredOptions = options.filter(
    (option) => option.columnsToDisplay !== selectedColumn.columnsToDisplay
  );

  return (
    <>
      {isMediumScreen ? (
        <div className="lg:gap-4 md:gap-2 flex md:flex-row flex-col items-center m-4 pt-4">
          <Typography
            variant={isMediumScreen ? "h6" : "p"}
            id="tableTitle"
            component="div"
            className="font-bold flex-1 flex-shrink-1 flex-grow-1"
          >
            {isLargeScreen ? "Product Summary" : "Summary"}
          </Typography>
          <Typography className="font-bold text-md">Show</Typography>
          <div className="w-1/6">
            <CustomDropdown
              labelClassName="font-bold"
              id="columnsToDisplay"
              placeholder={
                selectedColumn
                  ? selectedColumn.columnsToDisplay
                  : "Select columns"
              }
              size="small"
              getOptionLabel={(option) => option?.columnsToDisplay}
              isOptionEqualToValue={(option, value) =>
                option?.columnsToDisplay === value?.columnsToDisplay
              }
              options={filteredOptions}
              onChange={handleColumnsToShow}
            />
          </div>
          <Button
            variant="contained"
            size="small"
            className="bg-blue-500 text-white rounded-md mt-1 text-xs"
          >
            DISPATCH SELECTED
          </Button>
          <Pagination
            count={Math.ceil(count / rowsPerPage)}
            page={page + 1}
            onChange={handleChangePage}
            shape="rounded"
            sx={{
              padding: 0,
              width: isLargeScreen ? "29%" : "50%",
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "#3B82F6",
                color: "white",
              },
            }}
          />
        </div>
      ) : (
        <div className="flex flex-col mb-4 pt-3 items-center">
          <Typography
            variant="h6"
            id="tableTitle"
            component="div"
            className="font-bold flex-1 flex-shrink-1 flex-grow-1"
          >
            Product Summary
          </Typography>
          <div className="flex flex-row items-center w-[70%] gap-2 mb-2">
            <Typography className="font-bold text-md">Show</Typography>
            <div className="w-full">
              <CustomDropdown
                labelClassName="font-bold"
                id="columnsToDisplay"
                placeholder={
                  selectedColumn
                    ? selectedColumn.columnsToDisplay
                    : "Select columns"
                }
                size="small"
                getOptionLabel={(option) => option?.columnsToDisplay}
                isOptionEqualToValue={(option, value) =>
                  option?.columnsToDisplay === value?.columnsToDisplay
                }
                options={filteredOptions}
                onChange={handleColumnsToShow}
              />
            </div>
          </div>
          <Button
            variant="contained"
            size="small"
            className="bg-blue-500 text-white rounded-md mt-1 text-xs mb-2"
          >
            DISPATCH SELECTED
          </Button>
          <Pagination
            count={Math.ceil(count / rowsPerPage)}
            page={page + 1}
            onChange={handleChangePage}
            shape="rounded"
            sx={{ width: "100%" }}
          />
        </div>
      )}
    </>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const ProductSummary = () => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const isMediumScreen = useMediaQuery("(min-width: 768px)");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const isSelected = (id) => selected.indexOf(id) !== -1;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );
  const [selectedColumns, setSelectedColumns] = useState(["ALL COLUMNS"]);

  const handleColumnsToShow = (event, value) => {
    setSelectedColumns(value.columnsToDisplay);
  };

  return (
    <Box className="w-full mt-8">
      <Paper className="mb-2 w-full rounded-xl shadow-lg">
        <EnhancedTableToolbar
          numSelected={selected.length}
          page={page}
          setPage={setPage}
          count={rows.length}
          rowsPerPage={rowsPerPage}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.id}
                    </TableCell>
                    <TableCell align="left">{row.shippingId}</TableCell>
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="left">{row.status}</TableCell>
                    <TableCell align="left">{row.customer}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.country}</TableCell>
                    <TableCell align="left">{row.shipping}</TableCell>
                    <TableCell align="left">{row.source}</TableCell>
                    <TableCell align="left">{row.orderType}</TableCell>
                    <TableCell align="left">
                      <FontAwesomeIcon icon={faEdit} />
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            marginLeft: isMediumScreen ? "" : "-8px",
            marginRight: isMediumScreen ? "" : "-8px",
          }}
        />
      </Paper>
    </Box>
  );
};

export default ProductSummary;
