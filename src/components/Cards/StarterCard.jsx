import UserAvater from './../../assets/jr-korpa-9XngoIpxcEo-unsplash.jpg';

const StarterCard = ({ name, profile, id }) => {
  return (
    <div className='col-6 col-lg-4'>
      <div className='border rounded bg-light shadow-sm mb-3 px-4 pt-4'>
        <div className='d-flex flex-column mb-3 align-items-center border-bottom'>
          <img
            src={UserAvater}
            alt=''
            className='rounded-circle'
            width={96}
            height={96}
          />
          <div className='d-flex flex-column align-items-center'>
            <h2 className='fs-5 p-0 fw-bold mt-2'>{name}</h2>
            <h3 className='small p-0 fw-bold'>{profile}</h3>
          </div>
        </div>
        <div className='d-flex justify-content-between pb-3'>
          <div>
            <i className='bi bi-rocket-takeoff-fill me-3'></i>
            <span className='fw-bold'>5</span>
          </div>
          <div>
            <i className='bi bi-lightning-charge-fill me-3'></i>
            <span className='fw-bold'>5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarterCard;
