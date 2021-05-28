import React from "react";

import { Button } from "./Button";

export default {
    title: "Control/Button",
    argTypes: {
        text: { control: "text" },
        backgroundColor: { control: "color" },
        isDisabled: { control: "boolean" },
        size: {
            control: { type: "select", options: ["small", "medium", "large"] },
        },
        type: {
            control: { type: "select", options: ["filled", "outline"] },
        },
        variant: {
            control: { type: "select", options: ["oval", "rectangular"] },
        },
    },
};
export const outlineSmallButton = (args) => (
    <Button {...args} onClick={() => {}} />
);
outlineSmallButton.args = {
    text: "hola",
    size: "small",
    type: "outline",
};