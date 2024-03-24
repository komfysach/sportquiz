/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {CategoryType} from 'typings/CategoryType';
import {PlayerDataType} from 'typings/PlayerDataType';
import {RankingsDataType} from 'typings/RankingsType';
import {H1, H2, H3} from '../../../components/Typography/Headings';
import Layout from '../../../components/UI/Layout';
import theme from '../../../constants/theme';
import {AppContext} from '../../../context/AppContext';
import {TrophyIcon} from 'react-native-heroicons/outline';
import {UserProgressType} from 'typings/UserProgressType';
import {getAllUserProgress} from '../../../actions/getAllUserProgress';
import {Text} from 'react-native-svg';

const RankingContainer = styled.View`
  flex: 1;
  padding: ${theme.spacing20};
  gap: ${theme.spacing20};
`;

const Heading = styled(H1)``;

const OverallHeading = styled(H2)``;

const RankingsWrapper = styled.View`
  gap: ${theme.spacing20};
`;

const Ranking = styled.View`
  background-color: white;
  padding: ${theme.spacing20};
  border-radius: ${theme.borderRadius20};
  background-color: ${theme.lightGreen};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RankingName = styled(H2)`
  color: ${theme.greenBlack};
`;

const Sports = styled.View`
  gap: ${theme.spacing10};
`;

const Image = styled.Image`
  width: 35px;
  height: 25px;
`;

const SportName = styled(H2)``;

const SportWrapper = styled.View`
  background-color: ${theme.lightGreen};
  padding: ${theme.spacing20};
  border-radius: ${theme.borderRadius20};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TotalPoints = styled(H3)`
  color: ${theme.greenBlack};
  font-family: ${theme.SpaceGrotesqueBold};
`;

const TotalWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${theme.spacing10};
`;

type PointsType = {player_id: number; points: number; sport_id: number};

export default function RankingsStack() {
  const [rankings, setRankings] = useState<RankingsDataType[] | null>(null);
  const [points, setPoints] = useState<PointsType[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const {players, sports} = useContext(AppContext);

  function rankingsCalculation(
    pointsData: PointsType[],
    playersData: PlayerDataType[],
    sportsData: CategoryType[],
  ): RankingsDataType[] {
    return pointsData.map(point => {
      const player = playersData.find(plyer => plyer.id === point.player_id);
      const sport = sportsData.find(sprt => sprt.sport_id === point.sport_id);

      const total_points = pointsData.reduce((total, total_point) => {
        return (
          total +
          (total_point.player_id === player?.id ? total_point.points : 0)
        );
      }, 0);

      return {
        id: player?.id || 0,
        name: player?.name || '',
        sport_points: [
          {
            sport_name: sport?.sport_name || '',
            points: point.points,
            sport_image: sport?.image || '',
          },
        ],
        total_points,
      };
    });
  }

  useEffect(() => {
    getAllUserProgress().then(res => {
      const pointsData = res?.map((userProgress: UserProgressType) => {
        return {
          player_id: userProgress.player_id,
          points: userProgress.points,
          sport_id: userProgress.sport_id,
        } as PointsType;
      });
      setPoints(pointsData);
    });
    if (points && players && sports) {
      setRankings(rankingsCalculation(points, players, sports));
    }
    console.log('rankings', rankings);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const maxPoints = rankings?.reduce((max, ranking) => {
    return max > ranking.total_points ? max : ranking.total_points;
  }, 0);

  return (
    <Layout>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <RankingContainer>
          <Heading>Rankings</Heading>
          <RankingsWrapper>
            <OverallHeading>Overall rankings:</OverallHeading>
            {rankings?.map((ranking, k) => (
              <Ranking key={k}>
                <TotalWrapper>
                  {ranking.total_points === maxPoints && (
                    <TrophyIcon size={20} color={theme.greenBlack} />
                  )}
                  <RankingName>{ranking.name}</RankingName>
                </TotalWrapper>
                <TotalPoints>{ranking.total_points}</TotalPoints>
              </Ranking>
            ))}
            {/* {rankings?.map((rank, o) => (
                  <Sports key={o}>
                    {rank.sport_points.map((sport, i) => (
                      <React.Fragment key={i}>
                        <SportWrapper>
                          <RankingName>{rank.name}</RankingName>
                          <TotalWrapper>
                            <TotalPoints>{sport.points}</TotalPoints>
                            <Image source={{uri: sport.sport_image}} />
                          </TotalWrapper>
                        </SportWrapper>
                      </React.Fragment>
                    ))}
                  </Sports>
                ))} */}
          </RankingsWrapper>
        </RankingContainer>
      )}
    </Layout>
  );
}
