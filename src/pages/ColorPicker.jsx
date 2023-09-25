import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import { Header } from '../components';


// To change the color of the pencil
const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
};


const ColorPicker = () => {
  return (

    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg:white rounded-3xl'>

      <Header category="App" title="Color Picker" darkey = {true}/>

      <div className='text-center'>

        <div id="preview" />

        <div className='flex justify-center items-center gap-20 flex-wrap'>
          
          {/* First Box */}
          <div>
            
            <p className="text-2xl font-semibold mt-2 mb-4">
              Inline Palete
            </p>

            <ColorPickerComponent 
              id="inline-plalete"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}

              // Calling the function
              change = {change}
            />
          
          </div>

          {/* Second Box */}
          <div>
            
            <p className="text-2xl font-semibold mt-2 mb-4">
              Inline Picker
            </p>

            <ColorPickerComponent 
              id="inline-plalete"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}

              // Calling the function
              change = {change}
            />
          
          </div>
        
        </div>

      </div>
    </div>
  )
}

export default ColorPicker