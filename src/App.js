import React, {useState} from 'react';
import { cn } from "@bem-react/classname";
import './App.css';
import Highchart from "./components/Highchart/Highchart";
import HighchartMenu from "./components/HighchartMenu/HighchartMenu";
import HighchartContext from "./context/HighchartContext";

function App() {
  const highchartCss = cn('Highchart');
  const yearList = ['Все время', 2017, 2018, 2019];
  const [year, setYear] = useState(yearList[0]);
  const monthsList = ['Все месяцы', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const [month, setMonth] = useState(monthsList[0]);
  return (
    <HighchartContext.Provider value={{ month, year, setYear, setMonth, monthsList, yearList }}>
      <div className={highchartCss()}>
        <Highchart cls={highchartCss} />
        <HighchartMenu cls={highchartCss} />
      </div>
    </HighchartContext.Provider>
  );
}

export default App;
