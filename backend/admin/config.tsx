/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AdminConfig } from '@keystone-6/core/types';
//
// @ts-ignore
const CustomLogo = () => <h2>BT Bets</h2>;

export const components: AdminConfig['components'] = {
  Logo: CustomLogo,
};
