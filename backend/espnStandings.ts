import got from 'got';

type EspnStat = {
  name: string;
  value: number;
};

type EspnTeam = {
  team: {
    location: string;
    name: string;
  };
  stats: EspnStat[];
};

type ExportEspnStanding = {
  teamName: string;
  gamesPlayed: number;
  wins: number;
};

export default async function fetchEspnStandings(url: string): Promise<ExportEspnStanding[]> {
  const response = await got(url, {});

  const data = JSON.parse(response.body);

  // const teams = data.sports[0].leagues[0].teams;
  const teams0 = data.children[0].standings.entries;
  const teams1 = data.children[1].standings.entries;

  const teams = [...teams0, ...teams1];

  const exportStandings: ExportEspnStanding[] = [];

  teams.forEach((espnTeam: EspnTeam) => {
    const teamName = `${espnTeam.team.location} ${espnTeam.team.name ?? 'Football Team'}`;
    const wins = espnTeam.stats.find((s) => s.name === 'wins')?.value || 0;
    const losses = espnTeam.stats.find((s) => s.name === 'losses')?.value || 0;
    const ties = espnTeam.stats.find((s) => s.name === 'ties')?.value || 0;
    const gamesPlayed = wins + losses + ties;
    exportStandings.push({
      teamName,
      gamesPlayed,
      wins,
    });
  });
  return exportStandings;
}
