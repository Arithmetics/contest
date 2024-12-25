import gql from 'graphql-tag';

export const CREATE_ATS_LINE_MUTATION = gql`
  mutation CreateATSLine(
    $contestId: ID!
    $title: String!
    $benchmark: Float!
    $closingTime: DateTime!
  ) {
    createLine(
      data: {
        contest: { connect: { id: $contestId } }
        title: $title
        benchmark: $benchmark
        closingTime: $closingTime
        choices: {
          create: [
            { selection: AWAY, points: 1, title: "Away" }
            { selection: HOME, points: 1, title: "Home" }
          ]
        }
      }
    ) {
      id
      title
      benchmark
    }
  }
`;

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

export const CREATE_NFL_CONTEST_MUTATION = gql`
  mutation CreateNFLContest(
    $contestName: String
    $overSelection: ChoiceCreateInput!
    $underSelection: ChoiceCreateInput!
    $closingTime: DateTime
    $arizonaCardinalsBenchmark: Float
    $atlantaFalconsBenchmark: Float
    $baltimoreRavensBenchmark: Float
    $buffaloBillsBenchmark: Float
    $carolinaPanthersBenchmark: Float
    $chicagoBearsBenchmark: Float
    $cincinnatiBengalsBenchmark: Float
    $clevelandBrownsBenchmark: Float
    $dallasCowboysBenchmark: Float
    $denverBroncosBenchmark: Float
    $detroitLionsBenchmark: Float
    $greenBayPackersBenchmark: Float
    $houstonTexansBenchmark: Float
    $indianapolisColtsBenchmark: Float
    $jacksonvilleJaguarsBenchmark: Float
    $kansasCityChiefsBenchmark: Float
    $lasVegasRaidersBenchmark: Float
    $losAngelesChargersBenchmark: Float
    $losAngelesRamsBenchmark: Float
    $miamiDolphinsBenchmark: Float
    $minnesotaVikingsBenchmark: Float
    $newEnglandPatriotsBenchmark: Float
    $newOrleansSaintsBenchmark: Float
    $newYorkGiantsBenchmark: Float
    $newYorkJetsBenchmark: Float
    $philadelphiaEaglesBenchmark: Float
    $pittsburghSteelersBenchmark: Float
    $sanFrancisco49ersBenchmark: Float
    $seattleSeahawksBenchmark: Float
    $tampaBayBuccaneersBenchmark: Float
    $tennesseeTitansBenchmark: Float
    $washingtonCommandersBenchmark: Float
  ) {
    createContest(
      data: {
        name: $contestName
        description: "Pick over or under season win totals for NFL"
        status: OPEN
        entryFee: 25
        contestType: NBA_OVER_UNDER
        ruleSet: { create: { maxBets: 10, maxSuperBets: 5, superBetPointCount: 2 } }
        lines: {
          create: [
            {
              title: "Arizona Cardinals"
              benchmark: $arizonaCardinalsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4swnp2364813q16iiosh1c" } }
            }
            {
              title: "Atlanta Falcons"
              benchmark: $atlantaFalconsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4zxc53588813q166z3wze4" } }
            }
            {
              title: "Baltimore Ravens"
              benchmark: $baltimoreRavensBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4it4z1148113q1qgkqwis9" } }
            }
            {
              title: "Buffalo Bills"
              benchmark: $buffaloBillsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4k4f21283013q1wozaksk6" } }
            }
            {
              title: "Carolina Panthers"
              benchmark: $carolinaPanthersBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4v4uh2946013q1iqzttxty" } }
            }
            {
              title: "Chicago Bears"
              benchmark: $chicagoBearsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4u41t2800013q13fp5q44t" } }
            }
            {
              title: "Cincinnati Bengals"
              benchmark: $cincinnatiBengalsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4zlgq3541113q1hxeksh44" } }
            }
            {
              title: "Cleveland Browns"
              benchmark: $clevelandBrownsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4resn2085913q14ug526na" } }
            }
            {
              title: "Dallas Cowboys"
              benchmark: $dallasCowboysBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4se8o2317113q11clcqs3q" } }
            }
            {
              title: "Denver Broncos"
              benchmark: $denverBroncosBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckrf3fgcq3773813q1jeydsg6i" } }
            }
            {
              title: "Detroit Lions"
              benchmark: $detroitLionsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4w17m3004613q1gfq96g97" } }
            }
            {
              title: "Green Bay Packers"
              benchmark: $greenBayPackersBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4gpn8888513q1y0fbipvz" } }
            }
            {
              title: "Houston Texans"
              benchmark: $houstonTexansBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckrf3ejpu3726113q1e2hm3h6s" } }
            }
            {
              title: "Indianapolis Colts"
              benchmark: $indianapolisColtsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4s2vu2269413q196vxhvoi" } }
            }
            {
              title: "Jacksonville Jaguars"
              benchmark: $jacksonvilleJaguarsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckrf3hsgp4012313q1tuxh5jr2" } }
            }
            {
              title: "Kansas City Chiefs"
              benchmark: $kansasCityChiefsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckrf3hff53964613q1jj5ifz8r" } }
            }
            {
              title: "Las Vegas Raiders"
              benchmark: $lasVegasRaidersBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4yx9p3445713q152xtqngx" } }
            }
            {
              title: "Los Angeles Chargers"
              benchmark: $losAngelesChargersBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4rrf12162613q1l67t9m11" } }
            }
            {
              title: "Los Angeles Rams"
              benchmark: $losAngelesRamsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4hoa91013213q11tanue27" } }
            }
            {
              title: "Miami Dolphins"
              benchmark: $miamiDolphinsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4tccg2704613q1gip4firz" } }
            }
            {
              title: "Minnesota Vikings"
              benchmark: $minnesotaVikingsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4tmhp2752313q1x8xgc8xo" } }
            }
            {
              title: "New England Patriots"
              benchmark: $newEnglandPatriotsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4qqaq2038213q1y07h02ct" } }
            }
            {
              title: "New Orleans Saints"
              benchmark: $newOrleansSaintsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckrf3gmbe3869213q1urif9iu9" } }
            }
            {
              title: "New York Giants"
              benchmark: $newYorkGiantsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4ujdk2848913q107eokhib" } }
            }
            {
              title: "New York Jets"
              benchmark: $newYorkJetsBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckrf3h1zm3916913q1hntxo0s7" } }
            }
            {
              title: "Philadelphia Eagles"
              benchmark: $philadelphiaEaglesBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4utls2898113q1nkf0xqw6" } }
            }
            {
              title: "Pittsburgh Steelers"
              benchmark: $pittsburghSteelersBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckrf3gbg13821513q16vjxsmhf" } }
            }
            {
              title: "San Francisco 49ers"
              benchmark: $sanFrancisco49ersBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4l4sh1368413q1n858od9s" } }
            }
            {
              title: "Seattle Seahawks"
              benchmark: $seattleSeahawksBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4qd161990513q1h40fpel8" } }
            }
            {
              title: "Tampa Bay Buccaneers"
              benchmark: $tampaBayBuccaneersBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4x9e93057713q1w1es8euj" } }
            }
            {
              title: "Tennessee Titans"
              benchmark: $tennesseeTitansBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckre4zb933493413q18cdiu54w" } }
            }
            {
              title: "Washington Commanders"
              benchmark: $washingtonCommandersBenchmark
              closingTime: $closingTime
              choices: { create: [$overSelection, $underSelection] }
              image: { connect: { id: "ckrf3e6ji3678413q1u9ffp1ho" } }
            }
          ]
        }
      }
    ) {
      id
    }
  }
`;
