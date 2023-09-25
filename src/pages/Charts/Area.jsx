import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries, DateTime, Legend, } from '@syncfusion/ej2-react-charts';

import { Header } from '../../components';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

// x axis: dates and y axis: numbers

const Area = () => {

  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg
    rounded-3xl'>

      <Header category="Area" title="Inflation Rate in Percentage" darkey = {true}/>

      {/* This displays empty chart */}
      <ChartComponent
        id="area-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}

        // for hovering
        tooltip={{ enable: true }}

      // background = {currentMode === 'Dark' ? '#33373E' : '#fff'}
      >

        <Inject services={[SplineAreaSeries, DateTime, Legend]} />

        <SeriesCollectionDirective>

          {/* Fetching the data */}
          {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}

        </SeriesCollectionDirective>

      </ChartComponent>

    </div>

  )
}

export default Area