import React, { useContext } from 'react';
import useGetMosData from "../../services/useGetMosData";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import Loader from 'react-loader-spinner';
import convertData from "../../lib/convertData";
import './Highchart.css';
import HighchartContext from "../../context/HighchartContext";

const Highchart = ({ cls }) => {
  const { month, year } = useContext(HighchartContext);
  const { isLoading, isError, data } = useGetMosData();
  let highChartData;
  if (data) {
    highChartData = convertData(data, month, year);
  }
   return (
    <div className={cls('Container')}>
      {isLoading && <div className={cls('Loader')}><Loader type={"Circles"} color={"#8884d8"}/></div>}
      {isError && <div>An error occurred, please refresh the page</div>}
      {highChartData && (
        <BarChart
          width={900}
          height={500}
          data={highChartData}
          margin={{
            top: 40, right: 30, left: 20, bottom: 5,
          }}
        >
          <XAxis dataKey={"name"} tick={{fontSize: '14px'}}>
          </XAxis>
          <YAxis label={{ value: "тыс. руб.", position: "top", dy: -10}}/>
          <Tooltip />
          <Bar dataKey="amount" stackId="a" fill="#8884d8" />
        </BarChart>
      )}
    </div>
  )
};

export default Highchart;
