import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('RestaurantForm', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  function renderInput() {
    return render((
      <RestaurantForm
        name=""
        category=""
        address=""
        onChange={handleChange}
        onClick={handleClick}
      />
    ));
  }

  it('renders restaurant inputs', () => {
    const { getByPlaceholderText, getByText } = renderInput();

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();

    expect(getByText(/등록/)).not.toBeNull();
  });

  it('adds restaurant infromation', () => {
    const { getByText } = renderInput();

    fireEvent.click(getByText(/등록/));

    expect(handleClick).toBeCalled();
  });
});