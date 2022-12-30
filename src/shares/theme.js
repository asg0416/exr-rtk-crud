import { lighten } from "polished";

const theme = {
  palette: {
    white: "#ffffff",
    blue: "#0984e3",
    gray: "#636e72",
    gray80: lighten(0.1, "#636e72"),
    gray60: lighten(0.15, "#636e72"),
    gray40: lighten(0.2, "#636e72"),
    gray20: lighten(0.3, "#636e72"),
    lightGray: lighten(0.43, "#636e72"),
    black: "#2d3436",
    black80: lighten(0.1, "#2d3436"),
    black60: lighten(0.15, "#2d3436"),
    black40: lighten(0.2, "#2d3436"),
    black20: lighten(0.3, "#2d3436"),
    lightBlack: lighten(0.43, "#2d3436"),
    pink: "#e84393",
    orange: "orange",
    green: "#55efc4",
    red: "#d63031",
  },
};

export default theme;
