import React from "react";

class Result extends React.Component {
   render() {
      const result = this.props.result;
      console.log(result[0]);
      return (
         <div className="result">
            {result.map(data => (
               data.hasOwnProperty("message") ? (
                  <div className="result-error" key={ data.message[0].id }>
                     <p>Error: { data.message[0].value }</p>
                  </div>
               ) : (
                  <div className="result-data" key={ data.id }>
                     <p>Country: { data.name }</p>
                     <p>Region: { data.region.value }</p>
                     <p>Capital City: { data.capitalCity }</p>
                     <p>Longitude: { data.longitude }</p>
                     <p>Latitude: { data.latitude }</p>
                  </div>
               )
            ))}
         </div>
      );
   }
}

export default Result;