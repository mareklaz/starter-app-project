const CardContainer = ({ children }) => {
  return (
    <div className='col-md-8'>
      <div className='row'>{children}</div>
    </div>
  );
};

export default CardContainer;
