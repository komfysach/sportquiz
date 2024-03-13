import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {getPlayers} from '../../actions/getPlayers';
import {H1} from '../../components/Typography/Headings';
import Layout from '../../components/UI/Layout';

const RankingContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

const Heading = styled(H1)`
  font-size: 30px;
  color: white;
`;

export default function RankingsStack() {
  const [rankings, setRankings] = React.useState([]);
  useEffect(() => {
    getPlayers().then(res => console.log(res));
  }, []);
  return (
    <Layout>
      <RankingContainer>
        <Heading>Rankings:</Heading>
      </RankingContainer>
    </Layout>
  );
}
