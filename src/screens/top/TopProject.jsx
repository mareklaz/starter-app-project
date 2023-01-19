import React from 'react';
import SectionHeader from '../../components/Header/SectionHeader';
import MainContainer from '../../components/MainContainer/MainContainer';

const TopProject = () => {
  return (
    <MainContainer>
      <SectionHeader className='project-image text-center py-5 my-3 text-white bg-color-primary rounded shadow-sm'>
        <h1>Nuestro TOP 10</h1>
      </SectionHeader>
    </MainContainer>
  );
};

export default TopProject;
