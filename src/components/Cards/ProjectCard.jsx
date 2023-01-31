import moment from 'moment';

const ProjectCard = ({
  name,
  type,
  projectCreator,
  description,
  startDate,
  endDate,
  status,
}) => {
  return (
    <div className='col-12'>
      <div className='border rounded bg-light shadow-sm mb-3 px-4 py-3'>
        <div className='d-flex py-3  justify-content-between mb-3 align-items-center border-bottom pb-2'>
          <div className='d-flex justify-content-between align-items-center'>
            <i
              type='button'
              className='bi bi-heart-fill me-2'
              onClick={() => console.log('Like')}
            ></i>
            <h2 className='fs-5 mb-0 fw-bold'>{name}</h2>
            <span className='badge small bg-dark ms-2'>{type}</span>
          </div>
          <h2 className='fs-5 mb-0 fw-bold'>{projectCreator}</h2>
        </div>
        <div className='d-flex py-3 justify-content-between border-bottom'>
          <p className='line-clamp'>{description}</p>
        </div>
        <div className='d-flex py-3 justify-content-between aling-items-center mb-2 border-bottom'>
          <span className='small fw-bold'>
            Inicio: {moment(startDate).format('DD-MM-YYYY')}
          </span>
          <span className='small fw-bold'>Estado: {status}</span>
          <span className='small fw-bold'>
            Finaliza: {moment(startDate).format('DD-MM-YYYY')}
          </span>
        </div>
        <div className='col-12 d-flex flex-column align-items-center border-bottom py-4'>
          <h2 className='fs-5 mb-2 fw-bold'>Colaboradores</h2>
          <div className='d-flex flex-row'>
            <button className='d-flex badge text-bg-color-yellow border border-dark shadow-sm align-items-center m-1'>
              <i className='bi bi-person-fill-check fs-5 me-2'></i>
              <span className=''>Pepeito</span>
            </button>
            <button className='d-flex badge text-bg-color-blue border border-dark shadow-sm align-items-center m-1'>
              <i className='bi bi-person-fill-check fs-5 me-2'></i>
              <span className=''>Nahum</span>
            </button>
            <button className='d-flex badge text-bg-color-red border border-dark shadow-sm align-items-center m-1'>
              <i className='bi bi-person-fill-check fs-5 me-2'></i>
              <span className=''>Marek</span>
            </button>
            <button className='d-flex badge text-bg-color-dark border border-dark shadow-sm align-items-center m-1'>
              <i className='bi bi-person-fill-up fs-5 me-2'></i>
              <span className=''>Frontend</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
