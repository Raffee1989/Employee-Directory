import React, { Component } from "react";
import API from "../utils/API";
import Searchbar from "./SearchBar";
import EmployeeTable from "./EmployeeTable";


export default class Main extends Component {
  state = {
    order: "descend",
    employees: [{}],
    filteredEmployees: [{}],
  };

  componentDidMount() {
    API.getEmployees()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  searchChanges = event =>{
      console.log(event.target.value)
      const filter = event.target.value;
      const filteredList = this.state.employees.filter(item => {
          let value = Object.values(item)
          .join("")
          .toLowerCase();
          return value.indexOf(filter.toLowerCase()) !== -1
      });
      this.setState({filteredList: filteredList});
  }


  render(){
      return(
          <>
          <Searchbar searchChanges={this.searchChanges}/>
          <EmployeeTable employees={this.state.filteredEmployees}/>
          </>
      )
  }
}


