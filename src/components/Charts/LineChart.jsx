import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

// x axis: dates and y axis: numbers

const LineChart = () => {

  const { currentMode } = useStateContext();

  return (

    // This displays empty chart
    <ChartComponent
      id = "line-chart"
      height= "420px"
      primaryXAxis = {LinePrimaryXAxis}
      primaryYAxis = {LinePrimaryYAxis}

      // for hovering
      tooltip = {{enable: true}}

      // background = {currentMode === 'Dark' ? '#33373E' : '#fff'}
    >

      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      
      <SeriesCollectionDirective>
        
        {/* Fetching the data */}
        {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      
      </SeriesCollectionDirective>
    
    </ChartComponent>


  )
}

export default LineChart