import Controller from '../controller';
import { checkSearchParams } from '../middleware/checks';

const { queryPlacesByName } = Controller;

export default [
  {
    path: '/api/v1/search',
    method: 'get',
    handler: [checkSearchParams, queryPlacesByName ],
  }
];
