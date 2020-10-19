import React from "react";
import Result from "./Result";
import * as SearchAPI from "./WorldBankAPI";

class Search extends React.Component {
   state = {
      query: "",
      result: [],
   };

   handleSearchInputChange = event => {
      const query = event.target.value;
      this.setState({ query });
      console.log(`Query: ${query}`);
      // SearchAPI.get(query.trim()).then((results) => {
      //    console.log(results);
      // })
   }

   resetInputField = () => {
      this.setState({ query: "" });
   }

   callSearchFunction = event => {
      event.preventDefault();
      console.log(`Submit query: ${this.state.query}`);
      this.search(this.state.query);
      this.resetInputField();
   }

   search = (searchQuery) => {
      SearchAPI.get(searchQuery.trim()).then((result) => {
         this.setState({ result });
         console.log(`State: ${JSON.stringify(this.state.result)}`);
      });
   
   }

   render() {
      const { query, result } = this.state;
      return (
         <div className="search">
            <form className="search-bar">
               <input
                  className="search-input"
                  type="search"
                  name="search"
                  value={query}
                  placeholder="Please enter country code"
                  onChange={this.handleSearchInputChange}
               />

               <input
                  className="search-btn"
                  onClick={this.callSearchFunction}
                  type="submit"
                  value="Search"
               />
            </form>

            <div className="result">
               {result.length > 0 && (
                  <Result result={ result } />
               )}
            </div>
         </div>

      );
   }
}

export default Search;