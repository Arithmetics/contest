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

            title: "Atlanta Hawks"
            benchmark: $atlantaHawksBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Boston Celtics"
            benchmark: $bostonCelticsBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Brooklyn Nets"
            benchmark: $brooklynNetsBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Charlotte Hornets"
            benchmark: $charlotteHornetsBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Chicago Bulls"
            benchmark: $chicagoBullsBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Cleveland Cavaliers"
            benchmark: $clevelandCavaliersBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Dallas Mavericks"
            benchmark: $dallasMavericksBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Denver Nuggets"
            benchmark: $denverNuggetsBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Detroit Pistons"
            benchmark: $detroitPistonsBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Golden State Warriors"
            benchmark: $goldenStateWarriorsBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Houston Rockets"
            benchmark: $houstonRocketsBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Indiana Pacers"
            benchmark: $indianaPacersBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "LA Clippers"
            benchmark: $lAClippersBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Los Angeles Lakers"
            benchmark: $losAngelesLakersBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Memphis Grizzlies"
            benchmark: $memphisGrizzliesBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Miami Heat"
            benchmark: $miamiHeatBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Milwaukee Bucks"
            benchmark: $milwaukeeBucksBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Minnesota Timberwolves"
            benchmark: $minnesotaTimberwolvesBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "New Orleans Pelicans"
            benchmark: $newOrleansPelicansBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "New York Knicks"
            benchmark: $newYorkKnicksBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Oklahoma City Thunder"
            benchmark: $oklahomaCityThunderBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Orlando Magic"
            benchmark: $orlandoMagicBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Philadelphia 76ers"
            benchmark: $philadelphia76ersBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Phoenix Suns"
            benchmark: $phoenixSunsBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Portland Trail Blazers"
            benchmark: $portlandTrailBlazersBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Sacramento Kings"
            benchmark: $sacramentoKingsBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "San Antonio Spurs"
            benchmark: $sanAntonioSpursBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Toronto Raptors"
            benchmark: $torontoRaptorsBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Utah Jazz"
            benchmark: $utahJazzBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

    }{

            title: "Washington Wizards"
            benchmark: $washingtonWizardsBenchmark
            closingTime: $closingTime
            choices: { create: [$overSelection, $underSelection] }
            image: { connect: { id: "" } }

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
