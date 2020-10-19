import React from "react";
import "./App.css";
import Search from "./Search";

class SearchApp extends React.Component {

   render() {
      return (
         <div className="App">
            <header className="App-header">
               <h2>
                  World Bank Country API Search
               </h2>
               <Search />
            </header>
         </div>
      );
   }
}

export default SearchApp;
