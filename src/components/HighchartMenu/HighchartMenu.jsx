import React, {useContext, useState} from 'react';
import HighchartContext from "../../context/HighchartContext";
import { cn } from "@bem-react/classname";
import './HighchartMenu.css';

const HighchartMenu = ({ cls }) => {
  const {month, setMonth, monthsList, year, setYear, yearList} = useContext(HighchartContext);
  const [visibleMonths, setVisibleMonths] = useState(false);
  const [visibleYears, setVisibleYears] = useState(false);
  const changeVisibleYears = () => setVisibleYears((visible) => !visible);
  const changeVisibleMonths = () => setVisibleMonths((visible) => !visible);
  const listCss = cn('List');
  const iconCss = cn('material-icons');
  return (
    <div className={cls('MenuBox')}>
      <ul className={cls('List')}>
        <li onClick={changeVisibleMonths} className={listCss('Item')}>
          <span className={listCss('Caption')}>
            {month}
            <i className={iconCss({}, [listCss('Icon')])}>
              {visibleMonths ? 'arrow_drop_up' : 'arrow_drop_down'}
            </i>
          </span>
        </li>
        {visibleMonths && monthsList.filter((item) => item !== month).map((mon) => (
          <li
            className={listCss('Item')}
            key={mon}
            onClick={() => {
              setMonth(mon);
              setVisibleMonths(false);
            }}>
            <span className={listCss('Caption')}>
              {mon}
            </span>
          </li>
        ))}
      </ul>
      <ul className={cls('List')}>
        <li onClick={changeVisibleYears} className={listCss('Item')}>
          <span className={listCss('Caption')}>
            {year}
            <i className={iconCss({}, [listCss('Icon')])}>
              {visibleYears ? 'arrow_drop_up' : 'arrow_drop_down'}
            </i>
          </span>
        </li>
        {visibleYears && yearList.filter((item) => item !== year).map((year) => (
          <li
            className={listCss('Item')}
            key={year}
            onClick={() => {
              setYear(year);
              setVisibleYears(false);
            }}>
            <span className={listCss('Caption')}>
              {year}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )

};

export default HighchartMenu;
