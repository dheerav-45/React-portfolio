import React from 'react'
import './MyWork.css'
import theme_patten from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'
import project1_img from '../../assets/project_1.png'
import project2_img from '../../assets/project_2.svg'
import project3_img from '../../assets/project_3.png'
import project4_img from '../../assets/project_4.png'
import project5_img from '../../assets/project_3.svg'


const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme_patten} alt="" />
        </div>
        <div className="mywork-container">
            {/* {mywork_data.map((work,index)=>{
                return <a href="https://dheerav-45.github.io/CrunchyrollClone/"><img key={index} src={work.w_img} alt="" /></a>
            })} */}
            <a href="https://dheerav-45.github.io/CrunchyrollClone/"><img src={project1_img} alt="" /></a>
            <a href=""><img src={project2_img} alt="" /></a>
            <a href="https://github.com/dheerav-45/SplitWise-Clone-Django"><img src={project3_img} alt="" /></a>
            <a href="https://thinkbuildgrow.pythonanywhere.com/"><img src={project4_img} alt="" /></a>
            <a href=""><img src={project5_img} alt="" /></a>
            
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
      
    </div>
  )
}

export default MyWork
