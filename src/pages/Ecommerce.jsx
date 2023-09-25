import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {

  const { currentColor, activeMenu } = useStateContext()

  return (

    // mt-12 for taking it away from nav-bar
    <div className='mt-12'>

      <div className='flex flex-wrap lg:flex-nowrap justify-center'>

        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
        h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3
        bg-hero-pattern bg-no-repeat bg-cover bg-center'>

          {/* Earnings Tags */}
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400 mr-40'>Earnings</p>
              <p className='text-2xl dark:text-black'>$63,48,78</p>
            </div>
          </div>

          {/* Button under the Earnings */}
          <div className='mt-6'>
            <Button
              // These are props to be sent
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        {/* Four small patches with small icons */}
        <div className='flex m-3 flex-wrap justify-center
        gap-1 items-center '>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>

              <button
                type='button'
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg
                }}
                className="text-2xl opacity-0.9
                rounded-full p-4
                hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>



      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>

            <p className='font-semibold text-xl'>
              Revenue Updates
            </p>

            <div className='flex items-center gap-4'>
              <p className='flex items-center 
                  gap-2 text-gray-600 hover:drop-shadow-xl'>

                <span>
                  <GoDotFill />
                </span>

                <span>
                  Expense
                </span>

              </p>

              <p className='flex items-center 
                  gap-2 text-green-400 hover:drop-shadow-xl'>

                <span>
                  <GoDotFill />
                </span>

                <span>
                  Budget
                </span>

              </p>
            </div>
          </div>


          <div className='mt-10 flex gap-10 flex-wrap justify-center'>

            {/* For Left Side of Revenue */}
            <div className='border-r-1 border-color m-4 pr-10'>

              {/* Budget Amount */}
              <div>

                <p>
                  <span className='text-3xl font-semibold'>$93,348</span>
                  <span className='p-1.5 hover:drop-shadow-xl
                      cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>
                    23%
                  </span>

                </p>

                <p className='text-gray-500 mt-1'>
                  Budget
                </p>

              </div>

              {/* Expense Amount */}
              <div className='mt-8'>

                <p>
                  <span className='text-3xl font-semibold'>$48,348</span>
                </p>

                <p className='text-gray-500 mt-1'>
                  Expense
                </p>

              </div>

              {/* Line Chart on the left */}
              <div className='mt-5'>

                <SparkLine
                  currentColor={currentColor}

                  id="line-sparkLine"

                  type="Line"

                  height="80px"

                  width="250px"

                  data={SparklineAreaData}

                  color={currentColor}
                />

              </div>

              {/* Download button */}
              <div className='mt-10'>

                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />

              </div>

            </div>

            {/* For Right side of revenue */}
            <div>
              <Stacked
                width="320px"
                height="360px"
              />
            </div>
          </div>
        </div>
                
        {/* For two other parts */}
        <div>
          
          {/* For Bar-Graph */}
          <div
            className=" rounded-2xl md:w-400 p-4 m-3"
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex justify-between items-center ">

              <p className="font-semibold text-white text-2xl">Earnings</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">$63,448.78</p>
                <p className="text-gray-200">Monthly revenue</p>
              </div>

            </div>

            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>

          </div>

          {/* For Pie-Charts */}
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            
            <div>
              <p className="text-2xl font-semibold ">$43,246</p>
              <p className="text-gray-400">Yearly sales</p>
            
            </div>
            
            <div className="w-40">
              
              <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
            
            </div>

          </div>

        </div>


      </div>

    </div>
  )
}

export default Ecommerce