import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Button, Menu, MenuItem } from '@material-ui/core';
import Enzyme, { shallow } from 'enzyme';
import { ActionDropdownMenu, MenuItemShape } from './action-dropdown-menu';

Enzyme.configure({ adapter: new Adapter() });

describe('ActionDropdownMenu', () => {
  it('should render without breaking', () => {
    const component = shallow(
      <ActionDropdownMenu menuItems={[{ link: '' } as MenuItemShape]} initialValue={{ link: '' } as MenuItemShape} />
    );

    expect(component).toHaveLength(1);
  });

  it('should render 2 buttons', () => {
    const component = shallow(
      <ActionDropdownMenu menuItems={[{ link: '' } as MenuItemShape]} initialValue={{ link: '' } as MenuItemShape} />
    );

    expect(component.find(Button)).toHaveLength(2);
  });

  it('should render first button with link', () => {
    const component = shallow(
      <ActionDropdownMenu
        menuItems={[{ link: 'some-link' } as MenuItemShape]}
        initialValue={{ link: 'some-link' } as MenuItemShape}
      />
    );

    expect(component.find(Button).first().prop('href')).toEqual('some-link');
  });

  it('should initially hide the dropdown menu', () => {
    const comp = shallow(
      <ActionDropdownMenu menuItems={[{ link: '' } as MenuItemShape]} initialValue={{ link: '' } as MenuItemShape} />
    );

    const { open } = comp.find(Menu).props();

    expect(open).toBeFalsy();
  });

  it('should show the dropdown menu when button clicked', () => {
    const comp = shallow(
      <ActionDropdownMenu menuItems={[{ link: '' } as MenuItemShape]} initialValue={{ link: '' } as MenuItemShape} />
    );

    comp.find(Button).at(1).prop('onClick')!({ currentTarget: { id: 'some-id' } } as React.MouseEvent<
      HTMLButtonElement,
      MouseEvent
    >);
    const { open } = comp.find(Menu).props();

    expect(open).toBeTruthy();
  });

  it('should render menu item', () => {
    const comp = shallow(
      <ActionDropdownMenu
        menuItems={[{ link: 'link-1', text: 'some-text' } as MenuItemShape]}
        initialValue={{ link: '' } as MenuItemShape}
      />
    );

    comp.find(Button).at(1).prop('onClick')!({ currentTarget: { id: 'some-id' } } as React.MouseEvent<
      HTMLButtonElement,
      MouseEvent
    >);

    expect(comp.find(MenuItem)).toHaveLength(1);
    expect(comp.find(MenuItem).text()).toEqual('some-text');
  });

  it('should render multiple menu items', () => {
    const comp = shallow(
      <ActionDropdownMenu
        menuItems={[
          { link: 'link-1' } as MenuItemShape,
          { link: 'link-2' } as MenuItemShape,
          { link: 'link-3' } as MenuItemShape,
        ]}
        initialValue={{ link: '' } as MenuItemShape}
      />
    );

    comp.find(Button).at(1).prop('onClick')!({ currentTarget: { id: 'some-id' } } as React.MouseEvent<
      HTMLButtonElement,
      MouseEvent
    >);

    expect(comp.find(MenuItem)).toHaveLength(3);
  });

  it('should change link, text and close menu when menu item clicked', () => {
    const comp = shallow(
      <ActionDropdownMenu
        menuItems={[
          { id: '1', link: 'link-1', text: 'some-text1' },
          { id: '2', link: 'link-2', text: 'some-text2' },
          { id: '3', link: 'link-3', text: 'some-text3' },
        ]}
        initialValue={{ link: '' } as MenuItemShape}
      />
    );

    comp
      .find(Button)
      .at(1)
      .simulate('click', [{ currentTarget: {} }]);

    comp.find(Menu).dive().find(MenuItem).at(1).simulate('click');

    expect(comp.find(Button).first().prop('href')).toEqual('link-2');
    expect(comp.find(Button).first().text()).toEqual('some-text2');
    expect(comp.find(Menu).prop('open')).toBeFalsy();
  });

  it('should render action button based on initial value', () => {
    const comp = shallow(
      <ActionDropdownMenu
        menuItems={[{ link: '' } as MenuItemShape]}
        initialValue={{ id: '1', link: 'some-link', text: 'some-text' }}
      />
    );

    expect(comp.find(Button).first().prop('href')).toEqual('some-link');
    expect(comp.find(Button).first().text()).toEqual('some-text');
  });
});
