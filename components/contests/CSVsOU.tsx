// import { Contest } from '../../generated/graphql-types';

type CSVsOUProps = {
  contestId?: string;
};

export default function CSVsOU({ contestId }: CSVsOUProps): JSX.Element {
  console.log(contestId);
  return <p>yo</p>;
}
