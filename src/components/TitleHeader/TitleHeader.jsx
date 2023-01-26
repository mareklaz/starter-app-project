const TitleHeader = ({ children }) => {
  return (
    <div className='p-4 mb-3 bg-dark text-light rounded fw-bold border border-1 shadow-sm d-flex justify-content-center align-items-center '>
      <span className='fs-4'>{children}</span>
    </div>
  );
};

export default TitleHeader;
