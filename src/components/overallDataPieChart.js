import React from "react";
import { Chart } from "react-google-charts";


 function OverallDataPieChart(props) {
    const data = [
        ["Value", "Number"],
        ["Correct", props.correct],
        ["Incorrect", props.incorrect],
        
      ];
      const options = {
        title: props.title,
        slices: {
            0: { color: "#198754" },
            1: { color: "#dc3545" },
          },
      };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
      
      
    />
    
  );
}

export default OverallDataPieChart