import React from 'react';
import { shallow } from 'enzyme';

import ProfileBreadcrumbs from './ProfileBreadcrumbs';

describe('The test of ProfileBreadcrumbs component', () => {
  it('ProfileBreadcrumbs was rendered', () => {
    const rendered = shallow(
      <ProfileBreadcrumbs />,
    );

    expect(rendered).toMatchSnapshot();
  });
});