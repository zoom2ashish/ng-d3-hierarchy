import { DataModel } from './models';

export const data: DataModel = {
  name: 'LB 1',
  type: 'Type1',
  children: [
    {
      name: 'VS 1',
      type: 'Type2',
      children: [
        { name: 'SP 1', type: 'Type3' }
      ]
    },
    {
      name: 'VS 2'
    }
  ]
};
