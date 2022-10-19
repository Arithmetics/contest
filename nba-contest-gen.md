{
    "closingTime": "2022-10-18T23:00:00Z",
    "overSelection": {
                    "selection": "OVER",
                    "isWin": false
    },
    "underSelection": {
                    "selection": "UNDER",
                    "isWin": false
                  }
  }

mutation(
    $overSelection: ChoiceCreateInput!
    $underSelection: ChoiceCreateInput!
    $closingTime: DateTime
  ) {
    createContest(
      data: {
        name: "2022 NBA Over Under"
        description: "Pick over or under season win totals for NBA"
        status: OPEN
        entryFee: 25
        contestType: NBA_OVER_UNDER
        ruleSet: {
          create: { maxBets: 10, maxSuperBets: 5, superBetPointCount: 2 }
        }
        lines: {
          create: [
            {
              title: "Boston Celtics"
              benchmark: 53.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Milwaukee Bucks"
              benchmark: 52.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Phoenix Suns"
              benchmark: 52.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Los Angeles Clippers"
              benchmark: 52.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Golden State Warriors"
              benchmark: 51.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Philadelphia 76ers"
              benchmark: 50.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Brooklyn Nets"
              benchmark: 50.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Denver Nuggets"
              benchmark: 49.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Memphis Grizzlies"
              benchmark: 48.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Dallas Mavericks"
              benchmark: 48.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Miami Heat"
              benchmark: 48.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Minnesota Timberwolves"
              benchmark: 48.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Cleveland Cavaliers"
              benchmark: 47.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Atlanta Hawks"
              benchmark: 45.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Los Angeles Lakers"
              benchmark: 45.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Toronto Raptors"
              benchmark: 45.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "New Orleans Pelicans"
              benchmark: 44.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Chicago Bulls"
              benchmark: 41.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Portland Trail Blazers"
              benchmark: 39.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "New York Knicks"
              benchmark: 38.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Charlotte Hornets"
              benchmark: 36.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Washington Wizards"
              benchmark: 35.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Sacramento Kings"
              benchmark: 33.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Detroit Pistons"
              benchmark: 29.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Orlando Magic"
              benchmark: 26.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Utah Jazz"
              benchmark: 24.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Oklahoma City Thunder"
              benchmark: 23.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Indiana Pacers"
              benchmark: 23.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "Houston Rockets"
              benchmark: 23.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
            {
              title: "San Antonio Spurs"
              benchmark: 22.5
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
            }
          ]
        }
      }
    ) {
      id
      ruleSet {
        maxBets
        maxSuperBets
        superBetPointCount
      }
      lines {
        id
        title
        choices {
          id
          selection
          isWin
        }
      }
    }
  }
  