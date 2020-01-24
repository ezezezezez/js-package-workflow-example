import { addParameters } from "@storybook/react";
import packageJson from "../package.json";

addParameters({
  options: {
    theme: {
      brandTitle: "React Css Spinners",
      brandUrl: packageJson.repository.url
    }
  }
});
