import { AdminConfig } from '@keystone-6/core/types';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const CustomLogo = (): JSX.Element => <h2>BT Bets</h2>;

export const components: AdminConfig['components'] = {
  Logo: CustomLogo,
};
