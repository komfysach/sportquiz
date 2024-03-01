export const quizzes = [
  {
    id: 1,
    sport: 'Football',
    levels: [
      {
        level: 'Simple - These are just tap ins',
        sections: [
          {
            section: 1,
            questions: [
              {
                question:
                  'What country won the 2020 / 2021 European Championship?',
                answers: [
                  {id: 1, answer: 'Italy', isCorrect: true, points: 10},
                  {
                    id: 2,
                    answer: 'The Netherlands',
                    isCorrect: false,
                    points: 0,
                  },
                  {id: 3, answer: 'Spain', isCorrect: false, points: 0},
                ],
              },
            ],
          },
          {
            section: 2,
            questions: [
              {
                question:
                  'What club team is commonly known as the ‘Red Devils’?',
                answers: [
                  {
                    id: 1,
                    answer: 'Manchester United',
                    isCorrect: true,
                    points: 10,
                  },
                  {id: 2, answer: 'Liverpool FC', isCorrect: false, points: 0},
                  {id: 3, answer: 'Chelsea FC', isCorrect: false, points: 0},
                ],
              },
            ],
          },
          {
            section: 3,
            questions: [
              {
                question: 'What is the name of the top division in Italy?',
                answers: [
                  {id: 1, answer: 'Serie A', isCorrect: true, points: 10},
                  {id: 2, answer: 'Serie B', isCorrect: false, points: 0},
                  {id: 3, answer: 'Coppa Italia', isCorrect: false, points: 0},
                ],
              },
            ],
          },
          {
            section: 4,
            questions: [
              {
                question:
                  'What award is given to the year’s best footballer by French news magazine France Football?',
                answers: [
                  {
                    id: 1,
                    answer: 'The Ballon d’Or',
                    isCorrect: true,
                    points: 10,
                  },
                  {
                    id: 2,
                    answer: 'FIFA World Player of the Year',
                    isCorrect: false,
                    points: 0,
                  },
                  {
                    id: 3,
                    answer: "UEFA Men's Player of the Year Award",
                    isCorrect: false,
                    points: 0,
                  },
                ],
              },
            ],
          },
          {
            section: 5,
            questions: [
              {
                question: 'Name two clubs Cristiano Ronaldo has played for?',
                answers: [
                  {
                    id: 1,
                    answer: 'Sporting Lisbon, Manchester United',
                    isCorrect: true,
                    points: 10,
                  },
                  {
                    id: 2,
                    answer: 'Real Madrid, Barcelona',
                    isCorrect: false,
                    points: 0,
                  },
                  {
                    id: 3,
                    answer: 'Juventus, AC Milan',
                    isCorrect: false,
                    points: 0,
                  },
                ],
              },
            ],
          },
          {
            section: 6,
            questions: [
              {
                question:
                  'How big are the two boxes that make up the penalty area?',
                answers: [
                  {
                    id: 1,
                    answer: '6 and 18 yards',
                    isCorrect: true,
                    points: 10,
                  },
                  {
                    id: 2,
                    answer: '10 and 20 yards',
                    isCorrect: false,
                    points: 0,
                  },
                  {
                    id: 3,
                    answer: '8 and 16 yards',
                    isCorrect: false,
                    points: 0,
                  },
                ],
              },
            ],
          },
          {
            section: 7,
            questions: [
              {
                question:
                  'True or False: A wall must be 12 yards back from the ball when a free kick is to be taken?',
                answers: [
                  {
                    id: 1,
                    answer: 'False - It’s only 10 yards',
                    isCorrect: true,
                    points: 10,
                  },
                  {id: 2, answer: 'True', isCorrect: false, points: 0},
                ],
              },
            ],
          },
          {
            section: 8,
            questions: [
              {
                question:
                  'What is the name given to the game between Barcelona and Real Madrid?',
                answers: [
                  {id: 1, answer: 'El Clasico', isCorrect: true, points: 10},
                  {
                    id: 2,
                    answer: 'Derby della Madonnina',
                    isCorrect: false,
                    points: 0,
                  },
                  {id: 3, answer: 'The Old Firm', isCorrect: false, points: 0},
                ],
              },
            ],
          },
          {
            section: 9,
            questions: [
              {
                question: 'What are the two main colors of AC Milan?',
                answers: [
                  {id: 1, answer: 'Red & Black', isCorrect: true, points: 10},
                  {id: 2, answer: 'Blue & White', isCorrect: false, points: 0},
                  {
                    id: 3,
                    answer: 'Yellow & Black',
                    isCorrect: false,
                    points: 0,
                  },
                ],
              },
            ],
          },
          {
            section: 10,
            questions: [
              {
                question: 'In what country do Boca Juniors play?',
                answers: [
                  {id: 1, answer: 'Argentina', isCorrect: true, points: 10},
                  {id: 2, answer: 'Brazil', isCorrect: false, points: 0},
                  {id: 3, answer: 'Uruguay', isCorrect: false, points: 0},
                ],
              },
            ],
          },
        ],
      },
      {
        level: 'Intermediate - Easier than hitting it top corner',
        sections: [
          {
            section: 1,
            questions: [
              {
                question:
                  'What Argentinian masterminded Leeds United’s return to the Premier League in 2020?',
                answers: [
                  {
                    id: 1,
                    answer: 'Marcelo Bielsa',
                    isCorrect: true,
                    points: 10,
                  },
                  {id: 2, answer: 'Diego Simeone', isCorrect: false, points: 0},
                  {
                    id: 3,
                    answer: 'Mauricio Pochettino',
                    isCorrect: false,
                    points: 0,
                  },
                ],
              },
            ],
          },
          {
            section: 2,
            questions: [
              {
                question:
                  'Which of these players has NEVER broken the world transfer record - Kylian Mbappé, Kaká, Luís Figo, Hernán Crespo?',
                answers: [
                  {id: 1, answer: 'Kylian Mbappé', isCorrect: true, points: 10},
                  {id: 2, answer: 'Kaká', isCorrect: false, points: 0},
                  {id: 3, answer: 'Luís Figo', isCorrect: false, points: 0},
                ],
              },
            ],
          },
          {
            section: 3,
            questions: [
              {
                question:
                  'What Italian legend spent his full career with his hometown club and is the 2nd highest scorer in Serie A history?',
                answers: [
                  {
                    id: 1,
                    answer: 'Francesco Totti',
                    isCorrect: true,
                    points: 10,
                  },
                  {id: 2, answer: 'Paolo Maldini', isCorrect: false, points: 0},
                  {
                    id: 3,
                    answer: 'Alessandro Del Piero',
                    isCorrect: false,
                    points: 0,
                  },
                ],
              },
            ],
          },
          {
            section: 4,
            questions: [
              {
                question:
                  'Who is the most recent country to win the World Cup while hosting the tournament?',
                answers: [
                  {id: 1, answer: 'France - 1998', isCorrect: true, points: 10},
                  {
                    id: 2,
                    answer: 'Germany - 2006',
                    isCorrect: false,
                    points: 0,
                  },
                  {id: 3, answer: 'Brazil - 2014', isCorrect: false, points: 0},
                ],
              },
            ],
          },
          {
            section: 5,
            questions: [
              {
                question:
                  'What South African club shares its name with an English indie rock band?',
                answers: [
                  {
                    id: 1,
                    answer:
                      'Kaizer Chiefs (The band spells it Kaiser but got the name from the team)',
                    isCorrect: true,
                    points: 10,
                  },
                  {
                    id: 2,
                    answer: 'Orlando Pirates',
                    isCorrect: false,
                    points: 0,
                  },
                  {
                    id: 3,
                    answer: 'Mamelodi Sundowns',
                    isCorrect: false,
                    points: 0,
                  },
                ],
              },
            ],
          },
          {
            section: 6,
            questions: [
              {
                question:
                  'What company owns a team in both the German and Austrian Bundesligas?',
                answers: [
                  {id: 1, answer: 'Red Bull', isCorrect: true, points: 10},
                  {id: 2, answer: 'Puma', isCorrect: false, points: 0},
                  {id: 3, answer: 'Adidas', isCorrect: false, points: 0},
                ],
              },
            ],
          },
          {
            section: 7,
            questions: [
              {
                question: 'What animal appears on the Valencia logo?',
                answers: [
                  {id: 1, answer: 'A bat', isCorrect: true, points: 10},
                  {id: 2, answer: 'A lion', isCorrect: false, points: 0},
                  {id: 3, answer: 'An eagle', isCorrect: false, points: 0},
                ],
              },
            ],
          },
          {
            section: 8,
            questions: [
              {
                question:
                  'True or False: A goalkeeper is only allowed to hold the ball for 6 seconds?',
                answers: [
                  {id: 1, answer: 'True', isCorrect: false, points: 0},
                  {id: 2, answer: 'False', isCorrect: true, points: 10},
                ],
              },
            ],
          },
          {
            section: 9,
            questions: [
              {
                question: 'Who is the most expensive goalkeeper of all-time?',
                answers: [
                  {
                    id: 1,
                    answer: 'Kepa Arrizabalaga',
                    isCorrect: true,
                    points: 10,
                  },
                  {
                    id: 2,
                    answer: 'Alisson Becker',
                    isCorrect: false,
                    points: 0,
                  },
                  {id: 3, answer: 'Ederson', isCorrect: false, points: 0},
                ],
              },
            ],
          },
          {
            section: 10,
            questions: [
              {
                question: 'Who is the latest defender to win the Ballon d’Or?',
                answers: [
                  {
                    id: 1,
                    answer: 'Fabio Cannavaro',
                    isCorrect: true,
                    points: 10,
                  },
                  {id: 2, answer: 'Sergio Ramos', isCorrect: false, points: 0},
                  {
                    id: 3,
                    answer: 'Virgil van Dijk',
                    isCorrect: false,
                    points: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        level: 'Advanced - Like trying to get past Maldini',
        sections: [
          {
            section: 1,
            questions: [
              {
                question: 'What club has won the most Ligue 1 titles?',
                answers: [
                  {id: 1, answer: 'St. Etienne', isCorrect: true, points: 10},
                  {
                    id: 2,
                    answer: 'Paris Saint-Germain',
                    isCorrect: false,
                    points: 0,
                  },
                  {
                    id: 3,
                    answer: 'Olympique de Marseille',
                    isCorrect: false,
                    points: 0,
                  },
                ],
              },
            ],
          },
          {
            section: 2,
            questions: [
              {
                question:
                  'Who holds the record for most goals in one World Cup?',
                answers: [
                  {id: 1, answer: 'Just Fontaine', isCorrect: true, points: 10},
                  {id: 2, answer: 'Pele', isCorrect: false, points: 0},
                  {
                    id: 3,
                    answer: 'Miroslav Klose',
                    isCorrect: false,
                    points: 0,
                  },
                ],
              },
            ],
          },
          {
            section: 3,
            questions: [
              {
                question:
                  'What number did Cristiano Ronaldo wear for Sporting Lisbon?',
                answers: [
                  {id: 1, answer: '28', isCorrect: true, points: 10},
                  {id: 2, answer: '7', isCorrect: false, points: 0},
                  {id: 3, answer: '10', isCorrect: false, points: 0},
                ],
              },
            ],
          },
          {
            section: 4,
            questions: [
              {
                question:
                  'Who was named the Premier League Overseas Player of the Decade at the Premier League 10 Seasons Awards in 2003?',
                answers: [
                  {id: 1, answer: 'Eric Cantona', isCorrect: true, points: 10},
                  {id: 2, answer: 'Thierry Henry', isCorrect: false, points: 0},
                  {id: 3, answer: 'Didier Drogba', isCorrect: false, points: 0},
                ],
              },
            ],
          },
          {
            section: 5,
            questions: [
              {
                question: 'What is the longest winning streak in NBA history?',
                answers: [
                  {
                    id: 1,
                    answer: '33 games by the 1971/72 Lakers',
                    isCorrect: true,
                    points: 10,
                  },
                  {
                    id: 2,
                    answer: '22 games by the 2007/08 Rockets',
                    isCorrect: false,
                    points: 0,
                  },
                  {
                    id: 3,
                    answer: '28 games by the 2012/13 Heat',
                    isCorrect: false,
                    points: 0,
                  },
                ],
              },
            ],
          },
          {
            section: 6,
            questions: [
              {
                question:
                  'What was the name of the iconic 2002 Fifa World Cup ball?',
                answers: [
                  {
                    id: 1,
                    answer: 'Adidas Fevernova',
                    isCorrect: true,
                    points: 10,
                  },
                  {
                    id: 2,
                    answer: 'Nike Total 90 Aerow',
                    isCorrect: false,
                    points: 0,
                  },
                  {id: 3, answer: 'Puma King', isCorrect: false, points: 0},
                ],
              },
            ],
          },
          {
            section: 7,
            questions: [
              {
                question: 'What club has won the most domestic titles?',
                answers: [
                  {
                    id: 1,
                    answer: 'Rangers FC - 55 Scottish titles',
                    isCorrect: true,
                    points: 10,
                  },
                  {
                    id: 2,
                    answer: 'Celtic FC - 52 Scottish titles',
                    isCorrect: false,
                    points: 0,
                  },
                  {
                    id: 3,
                    answer: 'Manchester United - 20 English titles',
                    isCorrect: false,
                    points: 0,
                  },
                ],
              },
            ],
          },
          {
            section: 8,
            questions: [
              {
                question:
                  'Darren Bent once scored after the ball ricocheted off what object?',
                answers: [
                  {id: 1, answer: 'A beach ball', isCorrect: true, points: 10},
                  {id: 2, answer: 'A drone', isCorrect: false, points: 0},
                  {id: 3, answer: 'A seagull', isCorrect: false, points: 0},
                ],
              },
            ],
          },
          {
            section: 9,
            questions: [
              {
                question:
                  'What country has appeared in the most World Cup’s (16) without ever winning the tournament?',
                answers: [
                  {id: 1, answer: 'Mexico', isCorrect: true, points: 10},
                  {id: 2, answer: 'Netherlands', isCorrect: false, points: 0},
                  {id: 3, answer: 'England', isCorrect: false, points: 0},
                ],
              },
            ],
          },
          {
            section: 10,
            questions: [
              {
                question:
                  'Who is the only player to score at five different World Cups?',
                answers: [
                  {id: 1, answer: 'Marta', isCorrect: true, points: 10},
                  {id: 2, answer: 'Pelé', isCorrect: false, points: 0},
                  {
                    id: 3,
                    answer: 'Christine Sinclair',
                    isCorrect: false,
                    points: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        level: 'Impossible - Harder than a last minute penalty',
        sections: [
          {
            section: 1,
            questions: [
              {
                question:
                  'When did yellow and red cards make their debut in a football match?',
                answers: [
                  {
                    id: 1,
                    answer: 'The 1970 World Cup',
                    isCorrect: true,
                    points: 10,
                  },
                  {
                    id: 2,
                    answer: 'The 1966 World Cup',
                    isCorrect: false,
                    points: 0,
                  },
                  {
                    id: 3,
                    answer: 'The 1974 World Cup',
                    isCorrect: false,
                    points: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
