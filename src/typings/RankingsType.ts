export type RankingsDataType = {
  id: number;
  name: string;
  sport_points: {
    sport_name: string;
    points: number;
    sport_image: string;
  }[];
  total_points: number;
};

export type PointsType = {
  player_id: number;
  points: number;
  sport_id: number;
};
