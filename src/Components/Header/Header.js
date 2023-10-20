import React from 'react';
import '../Header/Header.css';

function Header() {
  return (
  <>
  {/* Outer Container start here */}
  <div className="HeaderOuter">
    {/* MaxWidth container  */}
    <div className="maxWidth-container">
{/* sections starts */}

{/* Section -1  */}

<div className="Section1">

    <div className="section1-Wrapper">
      <p>Vi feirer over <span style={{textDecoration: "underline"}}>2500</span> kursdeltakere! <strong>FÅ -25% RABATT PÅ ALLE HMS KURS</strong>&nbsp;ved å benytte lisenskode: <span style={{textDecoration: "underline"}}><strong>HMS2023</strong></span></p>
    </div>
</div>

{/* Section -2 */}
<div className="Section2">
  <div className="section2-Wrapper">
    <div className='empty-section'></div>
    <div className='btn-section'> 
    <button className='Btn'>KURSOVERSIKT</button>
    </div>
  </div>
</div>

{/* sections end */}
    </div>



  </div>

    {/* Outer Container end here */}
  </>
  )
}

export default Header