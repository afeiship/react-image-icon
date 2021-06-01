import React from 'react';
import ReactImageIcon from '../../src/main';
import styled from 'styled-components';
import '../../src/components/style.scss';

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
`;

export default (props: any) => {
  return (
    <Container>
      <ReactImageIcon
        size={32}
        value="https://tva1.sinaimg.cn/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg"
      />
      <ReactImageIcon
        value={{
          normal: 'https://mat1.gtimg.com/v/comment/images/avatar_default.9d95c455.jpg',
          hover: 'https://tva1.sinaimg.cn/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg'
        }}
      />
    </Container>
  );
};
