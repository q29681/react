import React from 'react';
import './NavigationTab.css';

function NavigationTab(){
    const [tabIndex, setTabIndex] = React.useState(0)
    const tabs =['Tab1', 'Tab2', 'Tab3'];
   return <>
   <div className ='wrapperrr'>
    {tabs.map((tab, index) => {
        const isActive = index === tabIndex;
        return (
          <div 
            className={'tab ${isActive ? "isActive" : ""}'}
            onClick ={() => {
                setTabIndex(index);
            }}>
            {tab}
          </div>);
    })}
   </div> </>
}

export default NavigationTab; 