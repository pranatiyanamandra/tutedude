import EarningsCard from './EarningsCard';
import './HomePage.css';
const HomePage = () => {
  return <>


    <div className='row'>
      <div className='col'>&nbsp;</div>
    </div>

    <div class="row">
      <div class="col-md-1 col-sm-1 ">

      </div>
      <div class="col-md-7 col-sm-5 ">
        <div class="card w-75" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
          <div class="card-body ">
            <EarningsCard></EarningsCard>
          </div>
        </div>
        <br />
      </div>
      <div class="col-md-4 col-sm-7"
      >
        <b style={{ color: '#800080', fontSize: "28px" }}>Your Referral Code</b>
        <div class="card w-75">
          <div class="card-body" style={{border:"1px solid",borderImage:"linear-gradient(45deg, purple, orange) 1",borderRadius:"25%"}}>
            &nbsp;
            <p class="card-text referral-text">E D C H 5 4</p>
            &nbsp;
          </div>
        </div>
        <br />
      </div>
    </div>

  </>


}

export default HomePage;