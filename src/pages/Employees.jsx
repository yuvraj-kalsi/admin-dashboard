import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  return (

    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>

      <Header category="Page" title="Employees" />

      <GridComponent

        dataSource={employeesData}
        
        // only display first few items in default first page
        allowPaging

        // Click any column to sort the table
        allowSorting

        // to add Search
        toolbar={['Search']}

        width = "auto "
      >

        <ColumnsDirective>

          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        
        </ColumnsDirective>

        {/* Add page number at the bottom */}
        <Inject services = {[Page, Search, Toolbar ]} />
      
      </GridComponent>


    </div>
  )
}

export default Employees
