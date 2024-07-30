import React from 'react'
import "./slidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import PaymentIcon from '@mui/icons-material/Payment';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SellIcon from '@mui/icons-material/Sell';
import NearMeIcon from '@mui/icons-material/NearMe';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import SummarizeIcon from '@mui/icons-material/Summarize';
import razorpayLogo from './razorpay.png';


const slidebar = () => {
    return (
        <div className="slidbar">
            <p>
              <img src={razorpayLogo} style={{ width: '20vh', height: '5vh', backgroundColor: 'white' }} alt="Razorpay Icon" />
            </p>
            <p><span style={{position:"relative",top:"6px",right:"5px"}}><HomeIcon/></span>Home</p>
            <p><span style={{position:"relative",top:"6px",right:"5px"}}><PaymentIcon/></span>Payouts</p>
            <p><span style={{position:"relative",top:"6px",right:"5px"}}><EventNoteIcon/></span>Account Statement</p>
            <p><span style={{position:"relative",top:"6px",right:"5px"}}><ContactPageIcon/></span>Contact</p>
            <hr style={{color:"grey"}} />
            <p><span style={{position:"relative",top:"6px",right:"5px"}}><CurrencyRupeeIcon/></span>
              Loans <button  className="button" style={{backgroundColor: "#60ff60",
    width: "55px",
    height: "20px"}}><span style={{position:"relative",bottom:"13px",right:"10px",color:"white"}}>New</span></button>
            </p>
            <div>
            <span style={{position:"relative",top:"6px",right:"5px",color:"grey"}}><CardGiftcardIcon/></span> Vendor Payments 
              <p>
              <button  className="button" style={{backgroundColor: "#60ff60",
    width: "55px",
    height: "20px"}}><span style={{position:"relative",bottom:"10px",right:"5px",color:"white"}}>New</span></button>
                <span style={{ color: "rgb(94, 94, 255)"}}>Invoice approvals == </span>
              </p>
            </div>
            <p><span style={{position:"relative",top:"6px",right:"5px"}}><SellIcon/></span>Tax Payments</p>
            <p><span style={{position:"relative",top:"6px",right:"5px"}}><NearMeIcon/></span>Payout links</p>
            <p><span style={{position:"relative",top:"6px",right:"5px"}}><MarkAsUnreadIcon/></span>Payrolls</p>
            <p><span style={{position:"relative",top:"6px",right:"5px"}}><SummarizeIcon/></span>Reports</p>
        </div>

      
    )
}

export default slidebar