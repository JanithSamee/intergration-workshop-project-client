// Button.jsx

import React from "react";
import PropTypes from "prop-types";
import { Button as MantineButton } from "@mantine/core";
import classes from "../styles/pages/HeroTitle.module.css";

const GradientButton = ({ children, ...props }) => {
    return (
        <MantineButton
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            {...props}
        >
            {children}
        </MantineButton>
    );
};

GradientButton.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GradientButton;
