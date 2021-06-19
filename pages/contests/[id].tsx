import ContestUI from '../../components/contests/Contest';

type ContestPageProps = {
  query: { id?: string };
};

export default function ContestPage({ query }: ContestPageProps): JSX.Element {
  return <ContestUI id={query.id} />;
}
