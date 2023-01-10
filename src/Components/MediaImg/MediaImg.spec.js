import { render } from "@testing-library/react";
import { toHaveStyle, toHaveAttribute } from "@testing-library/jest-dom";
import MediaImg from "./MediaImg";

describe("@components/MediaImg", () => {
  it("Creating a basic MediaImg component", () => {
    //arrange
    const {getByRole} = render(
      <MediaImg alt="PlatziCoolImg" src="http://www.platziversossupercool.com/img"/>
    );
    //act
    const MediaImgTest = getByRole("img");
    //assert
    expect(MediaImgTest).toBeInTheDocument();
    expect(MediaImgTest).toHaveAttribute("src","http://www.platziversossupercool.com/img");
    expect(MediaImgTest).toHaveAttribute("alt","PlatziCoolImg");
  });
});
