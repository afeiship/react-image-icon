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
        width="32"
        height={32}
        src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg"
      />
      <ReactImageIcon
        disabled
        src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg"
      />
    </Container>
  );
};
