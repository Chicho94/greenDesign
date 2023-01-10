import { render } from "@testing-library/react";
import { toHaveClass, toHaveStyle } from '@testing-library/jest-dom';
import Text from "./Text";

describe('@components/Text', ()=>{
  it("Creating a basic Text",()=>{
    // arrange
    const { getByRole } = render(
      <Text component="h1">Platzi aventura con RIck and Morti</Text>
    );
    // act
    const textTest = getByRole("heading",{ name: /Platzi aventura con RIck and Morti/i});
    // assert
    expect(textTest).toBeDefined();
  });

});