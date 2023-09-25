import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (

    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>

      <Header category="Page" title="Customers" />

      <GridComponent

        dataSource={customersData}
        
        // only display first few items in default first page
        allowPaging

        // Click any column to sort the table
        allowSorting

        // to add Delete
        toolbar={['Delete']}

        // allow us to edit things
        editSettings = {{allowDeleting: true,
        allowEditing: true}}

        width = "auto "
      >

        <ColumnsDirective>

          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        
        </ColumnsDirective>

        {/* Add page number at the bottom */}
        <Inject services = {[Page, Toolbar, Selection, Edit, Sort, Filter ]} />
      
      </GridComponent>


    </div>
  )
}

export default Customers