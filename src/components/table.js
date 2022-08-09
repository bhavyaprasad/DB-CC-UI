import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import { Button } from "react-bootstrap";
import Link from "@mui/material/Link";
import "./styles.css";
import { fontFamily } from "@mui/joy/styles/styleFunctionSx";

const { SearchBar } = Search;

let nameFilter;
let priceFilter;
let stockFilter;
let originFilter;

const ClearButton = props => {
  const handleClick = () => {
    props.onSearch("");
    props.clearAllFilter();
  };
  return (
    <Button
      variant="secondary"
      onClick={handleClick}
      style={{
        fontSize: "16px",
        padding: "5px",
        margin: "10px",
        height: "40px"
      }}
    >
      Clear
    </Button>
  );
};

class Table extends React.Component {
  columns = [
    {
      dataField: "bond_id",
      text: "Bond Id",
      filter: textFilter({
        getFilter: filter => {
          nameFilter = filter;
        }
      })
    },
    {
      dataField: "issuer_name",
      text: "Issuer Name",
      filter: textFilter({
        getFilter: filter => {
          priceFilter = filter;
        }
      }),
      sort: true
    },
    {
      dataField: "trade_date",
      text: "Trade Date",
      filter: textFilter({
        getFilter: filter => {
          stockFilter = filter;
        }
      })
    },
    {
      dataField: "maturity_date",
      text: "Maturity Date",
      filter: textFilter({
        getFilter: filter => {
          originFilter = filter;
        }
      })
    },
    {
      dataField: "bond_type",
      text: "Bond Type",
      filter: textFilter({
        getFilter: filter => {
          originFilter = filter;
        }
      })
    },
    {
      dataField: "status",
      text: "Status",
      filter: textFilter({
        getFilter: filter => {
          originFilter = filter;
        }
      })
    },
    {
      dataField: "update",
      text: "Update",
      filter: textFilter({
        getFilter: filter => {
          originFilter = filter;
        }
      })
    }
  ];

  clearAllFilter() {
    nameFilter("");
    priceFilter("");
    originFilter("");
    stockFilter("");
  }

  products = [
    {
      bond_id: 1,
      issuer_name: "Item 1",
      trade_date: "abc-123",
      maturity_date: "xyz=123",
      bond_type: "daksh",
      status: "active",
      update: (
        <Link href="/form">
          <button>Update</button>
        </Link>
      )
    },
    {
      bond_id: 2,
      issuer_name: "Item 2",
      trade_date: "abc-123",
      maturity_date: "xyz=123",
      bond_type: "daksh",
      status: "inactive",
      update: (
        <Link href="/form">
          <button>Update</button>
        </Link>
      )
    },
    {
      bond_id: 3,
      issuer_name: "Item 3",
      trade_date: "abc-123",
      maturity_date: "xyz=123",
      bond_type: "daksh",
      status: "active",
      update: (
        <Link href="/form">
          <button>Update</button>
        </Link>
      )
    },
    {
      bond_id: 4,
      issuer_name: "Item 3",
      trade_date: "abc-123",
      maturity_date: "xyz=123",
      bond_type: "daksh",
      status: "active",
      update: (
        <Link href="/form">
          <button>Update</button>
        </Link>
      )
    },
    {
      bond_id: 5,
      issuer_name: "Item 3",
      trade_date: "abc-123",
      maturity_date: "xyz=123",
      bond_type: "daksh",
      status: "active",
      update: (
        <Link href="/form">
          <button>Update</button>
        </Link>
      )
    },
    {
      bond_id: 6,
      issuer_name: "Item 3",
      trade_date: "abc-123",
      maturity_date: "xyz=123",
      bond_type: "daksh",
      status: "active",
      update: (
        <Link href="/form">
          <button>Update</button>
        </Link>
      )
    }
  ];

  render() {
    return (
      <div className="header1">
        <h1>Securities</h1>
        <ToolkitProvider
          bootstrap4
          keyField="name"
          data={this.products}
          columns={this.columns}
          search
        >
          {props => (
            <div>
              <div className="Search1">
                <SearchBar
                  {...props.searchProps}
                  style={{ width: "400px", height: "40px" }}
                />

                <ClearButton
                  {...props.searchProps}
                  clearAllFilter={this.clearAllFilter}
                />
              </div>
              <div className="table1">
                <BootstrapTable
                  {...props.baseProps}
                  filter={filterFactory()}
                  noDataIndication="There is no solution"
                  striped
                  hover
                  condensed
                />
              </div>
            </div>
          )}
        </ToolkitProvider>
      </div>
    );
  }
}

export default Table;