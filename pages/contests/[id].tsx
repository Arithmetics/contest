import Contest from '../../components/contests/Contest';

type ContestPageProps = {
  query: { id?: string };
};

export default function ContestPage({ query }: ContestPageProps): JSX.Element {
  return <Contest id={query.id} />;
}
