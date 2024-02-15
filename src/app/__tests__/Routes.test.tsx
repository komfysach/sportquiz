import {render} from '@testing-library/react-native';
import {getTabBarIcon} from '../Routes'; // assuming you've exported the function

import {it, expect} from '@jest/globals';

describe('getTabBarIcon', () => {
  it('returns the correct icon for the home route', () => {
    const {getByTestId} = render(<>{getTabBarIcon('home', true)}</>);
    const icon = getByTestId('home-icon-solid');
    expect(icon).toBeDefined();
  });

  it('returns the correct icon for the rankings route', () => {
    const {getByTestId} = render(<>{getTabBarIcon('rankings', true)}</>);
    const icon = getByTestId('trophy-icon-solid');
    expect(icon).toBeDefined();
  });
});
