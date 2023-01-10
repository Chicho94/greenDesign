import { render } from "@testing-library/react";
import { toHaveClass, toHaveStyle } from '@testing-library/jest-dom';
import Button from "./index";

describe("@components/Button", () => {
  it("Given a normal component call it should render component",  () => {
    // arrange
    const { getByRole } = render(
      <Button type="button"/>
    );
    // act
    const buttonTest = getByRole("button");
    // assert
    expect(buttonTest).toBeDefined();
  });
  
  it("Given className sent it should be combined with className of the component",  () => {
    // arrange
    const { getByRole } = render(
      <Button type="button" className="foo"/>
    );
    // act
    const buttonClassTest = getByRole("button");
    // assert
    expect(buttonClassTest).toHaveClass("foo");
  });

  it("Given the Button, when the props provide difference attribute then the component will take those style",  () => {
  // arrange
  const { getByRole } = render(
    <Button role="button" width={'100px'}/> 
  );

  // act
  const ButtonStyleTest = getByRole('button');
  
  // assert    
  expect(ButtonStyleTest).toBeDefined();
  expect(ButtonStyleTest).toHaveStyle(`width: 100px`);
  });
  
});