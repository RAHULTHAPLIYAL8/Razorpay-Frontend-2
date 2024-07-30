import React from 'react'
import "./Container.css"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import XIcon from '@mui/icons-material/X';
import PersonIcon from '@mui/icons-material/Person';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
const Container = () => {
  return (
    <div className='container'>
        <div style={{display:"flex",justifyContent:"space-between",position:"relative",left:"170px",width: "680px"}}><p>Insights </p><p style={{color:"blue"}}>Detail Insights</p></div>
        <div className="graphdata">
            Hello my name is Rahul Thapiyal
            <div className="linegraph"></div>
        </div>
        <div className="activebox">
            <div className="activity" style={{color:"grey"}}>
              <p ><span style={{color:"white"}}>Activity  </span>  (i) Feed 1 update a few second ago</p>
              <p style={{color:"blue"}}>show fees
                <span style={{position:"relative",top:"7px"}}><ArrowCircleDownIcon/></span>
              
              </p>
            </div>
            <div className="box-0 box-1">
                <div style={{width:"100px",height:"100px",textAlign:"center",padding:"23px"}}><p>23 July</p><p style={{color:"grey"}}>Tuesday</p>
                </div>
                <p style={{fontSize:"30px",color:"grey"}}>|</p>
                <p style={{width:"300px",height:"50px",textAlign:"center",color:"grey"}}><span style={{position:"relative",bottom:"-7px",color:"white"}}><PersonIcon/></span> contact created</p>
            </div>
            <div className="box-0 box-2">
            <div style={{width:"100px",height:"100px",textAlign:"center",padding:"23px"}}><p>9 July</p><p style={{color:"grey"}} >Tuesday</p>
                </div>
                <p style={{fontSize:"30px",color:"grey"}}>|</p>
                <p style={{width:"300px",height:"50px",textAlign:"center",color:"grey"}}><span style={{position:"relative",bottom:"-7px",color:"white"}}><XIcon/></span> 
                <span style={{color:"white"}}>$ 300.00 </span>contact created into the account</p>
            </div>
            <div className="box-0 box-3">
            <div style={{width:"100px",height:"100px",textAlign:"center",padding:"23px"}}><p>1 July</p><p style={{color:"grey"}}>Monday</p>
                </div>
                <p style={{fontSize:"30px",color:"grey"}}>|</p>
                <p style={{width:"300px",height:"50px",textAlign:"center",color:"grey"}}><span style={{position:"relative",bottom:"-7px",color:"white"}}><XIcon/></span>yout worth <span style={{color:"white"}}>$ 2,35,695 </span>created</p>
            </div>
            <div className="box-0 box-4">
            <div style={{width:"100px",height:"100px",textAlign:"center",padding:"23px"}}><p>24 July</p><p style={{color:"grey"}}>Monday</p>
                </div>
                <p style={{fontSize:"30px",color:"grey"}}>|</p>
                <p style={{width:"300px",height:"50px",textAlign:"center",color:"grey"}}><span style={{position:"relative",bottom:"-7px",color:"white"}}><XIcon/></span> contact created</p>
            </div>
            <div className='compbutton'>LOOK FOR OLDER ACTIVITIES <span style={{position:"relative",top:"7px",color:"white",backgroundColor:"gray"}}><XIcon/></span></div>
        </div>
    </div>
  )
}

export default Container