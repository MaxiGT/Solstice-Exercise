import React from 'react';
import { shallow } from 'enzyme';
import Searchbar from './Searchbar';
import { spy } from 'sinon';

describe('Searchbar', () => {

  const initialValue = '';
  const onChangeMock = spy();
  const newValue = 'Harry';

  const bar = shallow(
    <Searchbar
      onChange={onChangeMock}
      value={initialValue}
    />
  );

  it('Should render properly', () => {
    expect(bar.find('input').length).toBe(1);
    expect(bar.find('button').length).toBe(2);
    expect(bar.instance().props.value).toBe(initialValue);
  });

  it('Should response to input change', () => {
    expect(bar.instance().props.value).toBe(initialValue);
    
    bar.find('#primary-button').simulate('click');
    expect(onChangeMock.called).toBe(true);
    expect(onChangeMock.calledWith(initialValue)).toBe(true);

    bar.setProps({ value: newValue });
    expect(bar.instance().props.value).toBe(newValue);

    bar.find('#primary-button').simulate('click');
    expect(onChangeMock.called).toBe(true);
  });

})