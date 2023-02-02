const PageHeader = ({ children }) => {
  return (
    <div className='col-md-4'>
      <div className='mb-3 p-3'>
        <h1 className='fs-2 fw-bold border-bottom border-link-light pb-2'>{children}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
