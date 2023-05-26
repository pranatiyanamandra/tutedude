import './EarningsCard.css';
import React from 'react';
const EarningsCard = () => {
    return <>
        <div class="row referral">
            <div class="col-md-4 col-sm-6">
                Referral Earning
                <br />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee cost-text" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                </svg><b className='cost-text'> 2,500</b>
                
            </div>
            <div class="col-md-4 col-sm-6"
            >
                Total Referrals
                <br />
                <b className='cost-text'> 7</b>
                
            </div>

            <div class="col-md-4 col-sm-6"
            >
                Work Balance
                <br />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee cost-text" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                </svg><b className='cost-text'> 500</b>
                
            </div>
        </div>
       
        <div class="row">
            <div class="col-md-4 col-sm-6">
                
                <br />
            </div>
            <div class="col-md-4 col-sm-6"
            >
                
                <br />
            </div>

            <div class="col-md-4 col-sm-6"
            >
                
                <br />
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-sm-6">
                
                <br />
            </div>
            <div class="col-md-4 col-sm-6"
            >
                <button className='rounded-pill' style={{backgroundColor:"#800080",color:"white",borderColor:"#800080"}}>&nbsp;Withdraw Balance&nbsp; </button>
                <br />
            </div>

            <div class="col-md-4 col-sm-6"
            >
                
                <br />
            </div>
        </div>
    </>
}

export default EarningsCard;