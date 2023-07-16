import gql from 'graphql-tag';

export const CREATE_NBA_CONTEST_MUTATION = gql`
  mutation CreateNbaContest(
    $contestName: String
    $overSelection: ChoiceCreateInput!
    $underSelection: ChoiceCreateInput!
    $closingTime: DateTime
    $atlantaHawksBenchmark: Float
    $bostonCelticsBenchmark: Float
    $brooklynNetsBenchmark: Float
    $charlotteHornetsBenchmark: Float
    $chicagoBullsBenchmark: Float
    $clevelandCavaliersBenchmark: Float
    $dallasMavericksBenchmark: Float
    $denverNuggetsBenchmark: Float
    $detroitPistonsBenchmark: Float
    $goldenStateWarriorsBenchmark: Float
    $houstonRocketsBenchmark: Float
    $indianaPacersBenchmark: Float
    $lAClippersBenchmark: Float
    $losAngelesLakersBenchmark: Float
    $memphisGrizzliesBenchmark: Float
    $miamiHeatBenchmark: Float
    $milwaukeeBucksBenchmark: Float
    $minnesotaTimberwolvesBenchmark: Float
    $newOrleansPelicansBenchmark: Float
    $newYorkKnicksBenchmark: Float
    $oklahomaCityThunderBenchmark: Float
    $orlandoMagicBenchmark: Float
    $philadelphia76ersBenchmark: Float
    $phoenixSunsBenchmark: Float
    $portlandTrailBlazersBenchmark: Float
    $sacramentoKingsBenchmark: Float
    $sanAntonioSpursBenchmark: Float
    $torontoRaptorsBenchmark: Float
    $utahJazzBenchmark: Float
    $washingtonWizardsBenchmark: Float
  ) {
    createContest(
      data: {
        name: $contestName
        description: "Pick over or under season win totals for NBA"
        status: OPEN
        entryFee: 25
        contestType: NBA_OVER_UNDER
        ruleSet: { create: { maxBets: 10, maxSuperBets: 5, superBetPointCount: 2 } }
        lines: {
          create: [
            {
              title: "Atlanta Hawks"
              benchmark: $atlantaHawksBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl94tln643791650imcmdfk267i" } }
            }
            {
              title: "Boston Celtics"
              benchmark: $bostonCelticsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl93pvrt13248480imc1pk7nvkd" } }
            }
            {
              title: "Brooklyn Nets"
              benchmark: $brooklynNetsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl93px1783261880imcxrq7oh6v" } }
            }
            {
              title: "Charlotte Hornets"
              benchmark: $charlotteHornetsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl93puudp3240950imc405ceklf" } }
            }
            {
              title: "Chicago Bulls"
              benchmark: $chicagoBullsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl94to6nd3809910imck5mxxfsp" } }
            }
            {
              title: "Cleveland Cavaliers"
              benchmark: $clevelandCavaliersBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl94tn9ju3801870imcdof9nvm3" } }
            }
            {
              title: "Dallas Mavericks"
              benchmark: $dallasMavericksBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl94tkf3w3769030imcpl0wtgdz" } }
            }
            {
              title: "Denver Nuggets"
              benchmark: $denverNuggetsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl94tjwm53763670imc9xbdby5h" } }
            }
            {
              title: "Detroit Pistons"
              benchmark: $detroitPistonsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl93ptyxq3232910imcoyv0kdyp" } }
            }
            {
              title: "Golden State Warriors"
              benchmark: $goldenStateWarriorsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl93pwshp3259200imcfkh7kz71" } }
            }
            {
              title: "Houston Rockets"
              benchmark: $houstonRocketsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl93prni23215700imcuqz79t17" } }
            }
            {
              title: "Indiana Pacers"
              benchmark: $indianaPacersBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl93pscxg3222190imco1gey96u" } }
            }
            {
              title: "LA Clippers"
              benchmark: $lAClippersBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl93pwk0h3256520imcafo73r4k" } }
            }
            {
              title: "Los Angeles Lakers"
              benchmark: $losAngelesLakersBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl94tl4ij3786540imcvwf12een" } }
            }
            {
              title: "Memphis Grizzlies"
              benchmark: $memphisGrizzliesBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl94tk5pl3766350imcfl1nuq3z" } }
            }
            {
              title: "Miami Heat"
              benchmark: $miamiHeatBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl94tksr23771710imc7uw9o7nj" } }
            }
            {
              title: "Milwaukee Bucks"
              benchmark: $milwaukeeBucksBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl93pw1y43251160imc6rbkysij" } }
            }
            {
              title: "Minnesota Timberwolves"
              benchmark: $minnesotaTimberwolvesBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl94tm82x3794330imc8hgttvpg" } }
            }
            {
              title: "New Orleans Pelicans"
              benchmark: $newOrleansPelicansBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl94tnyfv3807230imcjao003ly" } }
            }
            {
              title: "New York Knicks"
              benchmark: $newYorkKnicksBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl94tofsa3812590imc2d04yql7" } }
            }
            {
              title: "Oklahoma City Thunder"
              benchmark: $oklahomaCityThunderBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl93pspm63224870imcejeut5ia" } }
            }
            {
              title: "Orlando Magic"
              benchmark: $orlandoMagicBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl93psyw93227550imcmmdt7s9c" } }
            }
            {
              title: "Philadelphia 76ers"
              benchmark: $philadelphia76ersBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl94tjhgy3715400imc5jig7w16" } }
            }
            {
              title: "Phoenix Suns"
              benchmark: $phoenixSunsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl93pwbg33253840imc9hs2lwuq" } }
            }
            {
              title: "Portland Trail Blazers"
              benchmark: $portlandTrailBlazersBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl93pv6o43243630imc9pcloz9u" } }
            }
            {
              title: "Sacramento Kings"
              benchmark: $sacramentoKingsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl93pua0n3235590imcnt5au3kz" } }
            }
            {
              title: "San Antonio Spurs"
              benchmark: $sanAntonioSpursBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl93ps3sz3219510imcr7sn4pd6" } }
            }
            {
              title: "Toronto Raptors"
              benchmark: $torontoRaptorsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl94tnlpi3804550imcn9hqbfot" } }
            }
            {
              title: "Utah Jazz"
              benchmark: $utahJazzBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl93ptl4o3230230imcic3598k2" } }
            }
            {
              title: "Washington Wizards"
              benchmark: $washingtonWizardsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "cl93pulfn3238270imctt5o7rh1" } }
            }
          ]
        }
      }
    ) {
      id
    }
  }
`;
