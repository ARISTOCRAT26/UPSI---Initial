 import React, { Component } from "react";
import "./Stylex.css";
import MUIDataTable from "mui-datatables";
import { CircularProgress, Typography } from "@mui/material";

export default class TableX extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      count: 1,
      rowsPerpage: 10,
      isLoading: false,
      data: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({
      ...this.state,
      data: this.getDateSrc().data,
      isLoading: false,
      count: this.getDateSrc().totalRecords
    });
  };

  //Example of the data that is return from my local API
  getDateSrc = () => {
    return {
      pageSize: 5,
      data: [
        {
          id: 4,
          name: "Role",
          picturePath: null,
          status: "Active",
          dateAdded: "13-09-2022",
          maintenances: []
        },
        {
          id: 2,
          name: "Designation",
          picturePath: null,
          status: "Active",
          dateAdded: "13-09-2022",
          maintenances: []
        },
        {
          id: 6,
          name: "Department",
          picturePath: null,
          status: "Active",
          dateAdded: "13-09-2022",
          maintenances: []
        },
        {
          id: 1,
          name: "User",
          picturePath: null,
          status: "Active",
          dateAdded: "13-09-2022",
          maintenances: []
        },
        {
            id: 3,
            name: "Form",
            picturePath: null,
            status: "Active",
            dateAdded: "13-09-2022",
            maintenances: []
          },
          {
            id: 5,
            name: "Password Policy",
            picturePath: null,
            status: "Active",
            dateAdded: "13-09-2022",
            maintenances: []
          },
          {
            id: 7,
            name: "Submissions",
            picturePath: null,
            status: "Active",
            dateAdded: "13-09-2022",
            maintenances: []
          },
          {
            id: 8,
            name: "Form-Maker",
            picturePath: null,
            status: "Active",
            dateAdded: "13-09-2022",
            maintenances: []
          }
      ],
      succeeded: true,
      errors: null,
      message: null
    };
  };

  changePage = (page) => {
    this.setState({ isLoading: true });
  };

  render() {
    const columns = [
      {
        name: "name",
        label: "Name",
        options: {
          filter: true,
          customBodyRenderLite: (dataIndex) => {
            return <span>{this.state.data[dataIndex].name}</span>;
          }
        }
      },
      {
        name: "status",
        label: "Status",
        options: {
          filter: true,
          customBodyRenderLite: (dataIndex) => {
            const state = this.state.data[dataIndex].status;
            if (state === "Active") {
              return (
                <div className="active">
                  <span>{state}</span>
                </div>
              );
            } else {
              return (
                <div className="inactive">
                  <span>{state}</span>
                </div>
              );
            }
          }
        }
      },
      {
        name: "dateAdded",
        label: "Date Added",
        options: {
          filter: true,
          customBodyRenderLite: (dataIndex) => {
            return <span>{this.state.data[dataIndex].dateAdded}</span>;
          }
        }
      }
    ];

    const { data, count, isLoading, rowsPerpage } = this.state;

    const options = {
      filter: false,
      filterType: "dropdown",
      responsive: "vertical",
      download: false,
      serverSide: true,
      print: false,
      count: count,
      rowsPerpage: rowsPerpage,
      rowsPerPageOptions: [5, 10, 25],
      selectableRowsHideCheckboxes: false,
      selectableRows: "none",
      selectableRowsHeader: false,
      search: false,
      onColumnSortChange: (changedColumn, direction) =>
        console.log("changedColumn: ", changedColumn, "direction: ", direction),
      onChangeRowsPerPage: (numberOfRows) =>
        console.log("numberOfRows: ", numberOfRows),
      onChangePage: (currentPage) => console.log("currentPage: ", currentPage),
      onTableChange: (action, tableState) => {
        console.log(action, tableState);

        switch (action) {
          case "changePage":
            this.changePage(tableState.page);
            break;
          default:
            console.log("action not handled.");
        }
      }
    };

    return (
      <div className="home">
        <MUIDataTable
          title={
            <Typography variant="h6">
              List of Menus
              {isLoading && (
                <CircularProgress
                  size={24}
                  style={{ marginLeft: 15, position: "relative", top: 4 }}
                />
              )}
            </Typography>
          }
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    );
  }
}