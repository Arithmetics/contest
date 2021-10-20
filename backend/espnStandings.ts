import got from 'got';

type EspnStat = {
  name: string;
  value: number;
};

type EspnRecordItem = {
  stats: EspnStat[];
};

type EspnTeam = {
  team: {
    location: string;
    name: string;
    record: {
      items: EspnRecordItem[];
    };
  };
};

type ExportEspnStanding = {
  teamName: string;
  gamesPlayed: number;
  wins: number;
};

export default async function fetchEspnStandings(url: string): Promise<ExportEspnStanding[]> {
  const response = await got(url, {});

  const data = JSON.parse(response.body);

  const teams = data.sports[0].leagues[0].teams;

  const exportStandings: ExportEspnStanding[] = [];

  teams.forEach((espnTeam: EspnTeam) => {
    const teamName = `${espnTeam.team.location} ${espnTeam.team.name ?? 'Football Team'}`;
    const wins = espnTeam.team.record.items[0].stats.find((s) => s.name === 'wins')?.value || 0;
    const losses = espnTeam.team.record.items[0].stats.find((s) => s.name === 'losses')?.value || 0;
    const ties = espnTeam.team.record.items[0].stats.find((s) => s.name === 'ties')?.value || 0;
    const gamesPlayed = wins + losses + ties;
    exportStandings.push({
      teamName,
      gamesPlayed,
      wins,
    });
  });
  return exportStandings;
}
