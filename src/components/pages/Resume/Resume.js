import React from 'react';
import './resume.css';

// export function setNavnone() {
// // document.getElementsByClassName('hi-container')[0].style.setProperty("display", "none");
// document.getElementsByClassName('resume')[0].style.setProperty("visibility", "hidden");
// };

// export function setNav() {
//   document.getElementsByClassName('resume')[0].style.setProperty("visibility", "visible");
// }

export default function Blog() {
  return (
    <div className='page-container'>
      <div className='resume-container'>
        <div className='sidebar'>
          <div className='technologies'>
          <h3>Core Technologies:</h3>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          </div>
          <br></br>
          <div className='Others'>
          <h3>Others:</h3>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          </div>

        </div>
        <div className='main-content'>
          <div className='resumeHeader'>Jack Theisen</div>
        </div>

      </div>
    </div>
  );
}
