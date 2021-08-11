import React from "react";
import ThemeExtender from "./ThemeExtender";

function Project() {
  return (
    <div>
      <ThemeExtender
        theme={{
          text: {
            medium: {
              size: "16px",
            },
          },
        }}
      >
        <Text>16px text</Text>
      </ThemeExtender>
    </div>
  );
}

export default Project;
