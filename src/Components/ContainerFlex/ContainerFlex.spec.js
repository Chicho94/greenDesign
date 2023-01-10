import { render } from "@testing-library/react";
import { toHaveClass, toHaveStyle } from '@testing-library/jest-dom';
import ContainerFlex from "./ContainerFlex";

describe('@components/ContainerFlex', ()=>{
  it("Creating a basic ContainerFlex",()=>{
    // arrange
    const { getByRole } = render(
      <ContainerFlex role="banner"/>
    );
    // act
    const ContainerFlexTest = getByRole("banner");
    // assert
    expect(ContainerFlexTest).toBeDefined();
  });

  it("Creating a ContainerFlex with className",()=>{
    // arrange
    const { getByRole } = render(
      <ContainerFlex className="foo" role="banner"/>
    );
    // act
    const ContainerFlexTestClassName = getByRole("banner");
    // assert
    expect(ContainerFlexTestClassName).toHaveClass("foo");
  });

  it("Creating a ContainerFlex with styles",()=>{
    // arrange
    const { getByRole } = render(
      <ContainerFlex 
       width="100px"
       height="50px"
       bgColor="red"
       flexDirection="column-reverse"
       alignContent="center"
       alignItems="flex-start"
       justifyContent="flex-end"
       gap="5px"
       role="banner"/>
    );
    // act
    const ContainerFlexTestStyles = getByRole("banner");
    // assert
    expect(ContainerFlexTestStyles).toHaveStyle(`width: 100px`);
    expect(ContainerFlexTestStyles).toHaveStyle(`height: 50px`);
    expect(ContainerFlexTestStyles).toHaveStyle(`background-color: red`);
    expect(ContainerFlexTestStyles).toHaveStyle(`flex-direction: column-reverse`);
    expect(ContainerFlexTestStyles).toHaveStyle(`align-content: center`);
    expect(ContainerFlexTestStyles).toHaveStyle(`align-items: flex-start`);
    expect(ContainerFlexTestStyles).toHaveStyle(`justify-content: flex-end`);
    expect(ContainerFlexTestStyles).toHaveStyle(`gap: 5px`);
  });
});