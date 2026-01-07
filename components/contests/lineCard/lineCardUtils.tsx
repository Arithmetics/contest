import { firstBy } from 'thenby';
import { ChoiceSelectionType, Line } from '../../../generated/graphql-types';

export function hasLineClosed(line: Line): boolean {
  if (!line.closingTime) {
    return false;
  }
  const lineClosed = Date.parse(line.closingTime);
  const now = Date.now();
  return lineClosed - now < 0 ? true : false;
}

export function lineHasWinner(line: Line): boolean {
  if (!line.choices || line.choices.length === 0) {
    return false;
  }

  return line.choices.some((c) => c.isWin);
}

export function formatAtsTotal(benchmark?: number | null): string {
  if (!benchmark) {
    return '(???)';
  }

  return `${benchmark} Points`;
}

export function formatATS(home: boolean, benchmark?: number | null): string {
  if (!benchmark) {
    return '(???)';
  }

  const xBenchmark = home ? benchmark * -1 : benchmark;

  if (xBenchmark < 0) {
    return `(${String(xBenchmark)})`;
  }
  return `(+${xBenchmark})`;
}

export function formatNbaPoints(benchmark?: number | null): string {
  if (!benchmark) {
    return '(???)';
  }

  return `${benchmark ?? 0} Points`;
}

export function formatLineDate(line: Line): string {
  if (!line.closingTime) {
    return 'No closing time set';
  }
  return new Date(line.closingTime).toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
  });
}

export function sortLines(linesToSort: Line[]): Line[] {
  return [...linesToSort].sort(
    firstBy<Line>((a, b) => {
      const aTime = a.closingTime ? new Date(a.closingTime).getTime() : 0;
      const bTime = b.closingTime ? new Date(b.closingTime).getTime() : 0;
      return aTime - bTime;
    }).thenBy<Line>((a, b) => {
      const aHasAwayHome =
        a.choices?.some(
          (c) =>
            c.selection === ChoiceSelectionType.Away || c.selection === ChoiceSelectionType.Home
        ) ?? false;
      const bHasAwayHome =
        b.choices?.some(
          (c) =>
            c.selection === ChoiceSelectionType.Away || c.selection === ChoiceSelectionType.Home
        ) ?? false;

      // Away/Home lines come first (return -1), Over/Under lines come second (return 1)
      if (aHasAwayHome && !bHasAwayHome) return -1;
      if (!aHasAwayHome && bHasAwayHome) return 1;
      return 0;
    })
  );
}
