"use client";

import {
  createTheme,
  TextField,
  AutocompleteRenderInputParams,
  AutocompleteGetTagProps,
  AutocompleteRenderOptionState,
  Chip,
  MenuItem,
  Checkbox,
} from "@mui/material";
import {
  Close,
  Check,
  HorizontalRule,
  TripOriginSharp,
  RadioButtonUncheckedSharp,
  KeyboardArrowDown,
  KeyboardArrowRight,
} from "@mui/icons-material";

import Color from "./tokens/colors.json";
import Spacings from "./tokens/spacings.json";

declare module "@mui/material/styles" {
  interface Palette {
    transparent: Palette["primary"];
    bodyText: Palette["primary"];
    black: Palette["primary"];
    disabled: Palette["primary"];
    pending: Palette["primary"];
    neutral: Palette["primary"];
    orange: Palette["primary"];
    pink: Palette["primary"];
    white: Palette["primary"];
  }

  interface PaletteOptions {
    transparent: PaletteOptions["primary"];
    bodyText: PaletteOptions["primary"];
    black: PaletteOptions["primary"];
    disabled: PaletteOptions["primary"];
    pending: PaletteOptions["primary"];
    neutral: PaletteOptions["primary"];
    orange: PaletteOptions["primary"];
    pink: PaletteOptions["primary"];
    white: PaletteOptions["primary"];
  }
  interface PaletteColor {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
    lighter: string;
    darker: string;
    tint: string;
    tintLight: string;
    tintDark: string;
  }

  interface SimplePaletteColorOptions {
    main: string;
    light?: string;
    dark?: string;
    contrastText?: string;
    lighter?: string;
    darker?: string;
    tint?: string;
    tintLight?: string;
    tintDark?: string;
  }

  interface BreakpointOverrides {
    xxl: true;
  }

  interface TypographyVariants {
    display1: React.CSSProperties;
    display2: React.CSSProperties;
    text1: React.CSSProperties;
    text1Bold: React.CSSProperties;
    text2: React.CSSProperties;
    text2Bold: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    display1?: React.CSSProperties;
    display2?: React.CSSProperties;
    text1?: React.CSSProperties;
    text1Bold?: React.CSSProperties;
    text2?: React.CSSProperties;
    text2Bold?: React.CSSProperties;
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    disabled: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    pending: true;
    neutral: true;
    disabled: true;
    orange: true;
  }
  interface ChipPropsSizeOverrides {
    large: true;
  }

  interface ChipClasses {
    sizeLarge: string;
    sizeMedium: string;
    sizeSmall: string;
  }

  interface ChipPropsVariantOverrides {
    iconSuffix: true;
  }
}

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    flat: true;
    filledHeader: true;
    headerDivider: true;
    footerDivider: true;
    headerAndFooterDivider: true;
    flatAndFooterDivider: true;
    filledHeaderAndFooterDivider: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display1: true;
    display2: true;
    text1: true;
    text1Bold: true;
    text2: true;
    text2Bold: true;

    h5: false;
    h6: false;
    body1: false;
    body2: false;
    subtitle1: false;
    subtitle2: false;
    caption: false;
    overline: false;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsSizeOverrides {
    mediumIconSmall: true;
    smallIconMedium: true;
  }

  interface IconButtonPropsColorOverrides {
    neutralDark: true;
    neutralLight: true;
  }
}

const theme = createTheme({
  palette: {
    action: {
      disabledBackground: Color.grey,
      disabled: Color.black["50"],
    },
    primary: {
      main: Color.green["50"],
      light: Color.green["25"],
      lighter: Color.green["25"],
      dark: Color.green["75"],
      darker: Color.green["100"],
      tint: Color.green["50"] + "1A",
      tintLight: Color.green["50"] + "0D",
      tintDark: Color.green["50"] + "33",
      contrastText: Color.green["100"],
    },
    secondary: {
      main: Color.sand["50"],
      light: Color.sand["30"],
      lighter: Color.sand["25"],
      dark: Color.sand["75"],
      darker: Color.sand["100"],
      tint: Color.sand["75"] + "1A",
      tintLight: Color.sand["75"] + "0D",
      tintDark: Color.sand["75"] + "33",
      contrastText: Color.black["100"],
    },
    error: {
      main: Color.red["50"],
      light: Color.red["25"],
      lighter: Color.red["25"],
      dark: Color.red["75"],
      darker: Color.red["100"],
      tint: Color.red["50"] + "1A",
      tintLight: Color.red["50"] + "0D",
      tintDark: Color.red["50"] + "33",
      contrastText: Color.white,
    },
    disabled: {
      main: Color.black["30"],
      light: Color.grey,
      contrastText: Color.black["100"],
    },
    warning: {
      main: Color.yellow["50"],
      light: Color.yellow["30"],
      dark: Color.yellow["75"],
      darker: Color.yellow["100"],
      tint: Color.yellow["75"] + "1A",
      tintLight: Color.yellow["75"] + "0D",
      tintDark: Color.yellow["75"] + "33",
      contrastText: Color.black["100"],
    },
    info: {
      main: Color.purple["100"],
      lighter: Color.purple["25"],
      tint: Color.yellow["100"] + "1A",
      tintLight: Color.yellow["100"] + "0D",
      tintDark: Color.yellow["100"] + "33",
      contrastText: Color.black["100"],
    },
    success: {
      main: Color.olive["50"],
      light: Color.olive["25"],
      lighter: Color.olive["25"],
      dark: Color.olive["100"],
      darker: Color.olive["100"],
      tint: Color.olive["50"] + "1A",
      tintLight: Color.olive["50"] + "0D",
      tintDark: Color.olive["50"] + "33",
      contrastText: Color.black["100"],
    },
    pending: {
      main: Color.purple["100"],
      light: Color.purple["25"],
      lighter: Color.purple["25"],
      dark: Color.purple["100"],
      darker: Color.purple["100"],
      contrastText: Color.black["100"],
      tint: Color.purple["100"] + "1A",
      tintLight: Color.purple["100"] + "0D",
      tintDark: Color.purple["100"] + "33",
    },
    neutral: {
      main: Color.neutral["50"],
      dark: Color.black["75"],
      contrastText: Color.black["100"],
      tint: Color.black["75"] + "1A",
      tintLight: Color.black["75"] + "0D",
      tintDark: Color.black["75"] + "33",
    },
    black: {
      main: Color.black["50"],
      light: Color.black["30"],
      lighter: Color.grey,
      dark: Color.black["75"],
      darker: Color.black["100"],
      tint: Color.black["75"] + "1A",
      tintLight: Color.black["75"] + "0D",
      tintDark: Color.black["75"] + "33",
    },
    orange: {
      main: Color.orange["50"],
      light: Color.orange["30"],
      dark: Color.orange["75"],
      darker: Color.orange["100"],
      tint: Color.orange["75"] + "1A",
      tintLight: Color.orange["75"] + "0D",
      tintDark: Color.orange["75"] + "33",
    },
    text: {
      primary: Color.black["100"],
      secondary: Color.black["75"],
      disabled: Color.black["30"],
    },
    transparent: {
      main: "rgba(0, 0, 0, 0)",
    },
    bodyText: {
      main: Color.black["75"],
    },
    pink: {
      main: Color.pink["50"],
      light: Color.pink["30"],
      dark: Color.pink["75"],
      darker: Color.pink["100"],
      tint: Color.pink["75"] + "1A",
      tintLight: Color.pink["75"] + "0D",
      tintDark: Color.pink["75"] + "33",
      contrastText: Color.black["100"],
    },
    white: {
      main: Color.white,
      tintLight: Color.white + "0D",
      tintDark: Color.white + "33",
      contrastText: Color.black["30"],
    },
  },
  typography: {
    fontFamily:
      "FoundersGrotesk, 'Sergoe UI', 'Helvetica Neue', Arial, sans-serif",
    fontSize: 16,
  },
  shape: {
    borderRadius: 4,
  },
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0 8px 16px 0 rgba(63, 46, 28, 0.07)",
    "0px 4px 16px rgba(107, 64, 34, 0.16)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  ],
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily:
            "FoundersGrotesk, 'Sergoe UI', 'Helvetica Neue', Arial, sans-serif",
          letterSpacing: "0.03em",
        },
        button: {
          fontFamily:
            "FoundersGrotesk, 'Sergoe UI', 'Helvetica Neue', Arial, sans-serif",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          display1: "h1",
          display2: "h1",
          text1: "p",
          text1Bold: "p",
          text2: "p",
          text2Bold: "p",
        },
      },
    },
    MuiBadge: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: () => ({
          "& .MuiBadge-badge": {
            fontSize: ".75rem",
            lineHeight: ".75rem",
            paddingTop: "2px",
            paddingBottom: "2px",
          },
        }),
      },
      variants: [
        {
          props: { color: "error" },
          style: ({ theme }) => ({
            "& .MuiBadge-colorError": {
              backgroundColor: theme.palette.error.main,
              color: theme.palette.white.main,
            },
          }),
        },
        {
          props: { color: "primary" },
          style: ({ theme }) => ({
            "& .MuiBadge-colorPrimary": {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.black.darker,
            },
          }),
        },
        {
          props: { color: "secondary" },
          style: ({ theme }) => ({
            "& .MuiBadge-colorSecondary": {
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.black.darker,
            },
          }),
        },
      ],
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        color: "primary",
        variant: "contained",
        disableRipple: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: "unset",
          fontSize: "16px",
          fontFamily:
            "FoundersGrotesk, 'Sergoe UI', 'Helvetica Neue', Arial, sans-serif",
          lineHeight: "16px",
          height: "56px",
          maxHeight: "56px",
          padding: "16px 32px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
          "&:active": {
            boxShadow: "none",
          },
          [theme.breakpoints.up("md")]: {
            height: "48px",
            maxHeight: "48px",
            padding: "12px 24px",
          },
        }),
        startIcon: () => ({
          marginLeft: "-8px",
          "& > .MuiSvgIcon-fontSizeMedium": {
            fontSize: "24px",
          },
          "& > .MuiSvgIcon-fontSizeSmall": {
            fontSize: "20px",
          },
        }),
        endIcon: () => ({
          marginRight: "-8px",
          "& > .MuiSvgIcon-fontSizeMedium": {
            fontSize: "24px",
          },
          "& > .MuiSvgIcon-fontSizeSmall": {
            fontSize: "20px",
          },
        }),
      },
      variants: [
        {
          props: { color: "primary" },
          style: ({ theme }) => ({
            color: theme.palette.text.primary,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.white.main,
            },
            "&:active": {
              backgroundColor: theme.palette.primary.darker,
              color: theme.palette.white.main,
            },
          }),
        },
        {
          props: { color: "secondary" },
          style: ({ theme }) => ({
            "&:hover": {
              backgroundColor: theme.palette.secondary.dark,
            },
            "&:active": {
              backgroundColor: theme.palette.secondary.darker,
              color: theme.palette.white.main,
            },
          }),
        },
        {
          props: { color: "error" },
          style: ({ theme }) => ({
            "&:hover": {
              backgroundColor: theme.palette.error.dark,
            },
            "&:active": {
              backgroundColor: theme.palette.error.darker,
            },
          }),
        },
        {
          props: { variant: "text" },
          style: ({ theme }) => ({
            color: theme.palette.primary.darker,
            "&:hover": {
              backgroundColor: theme.palette.primary.tintLight,
              color: theme.palette.primary.darker,
            },
            "&:active": {
              backgroundColor: theme.palette.primary.tintDark,
              color: theme.palette.primary.darker,
            },
          }),
        },
        {
          props: { variant: "text", color: "error" },
          style: ({ theme }) => ({
            color: theme.palette.error.dark,
            "&:hover": {
              backgroundColor: theme.palette.error.tintLight,
              color: theme.palette.error.dark,
            },
            "&:active": {
              backgroundColor: theme.palette.error.tintDark,
              color: theme.palette.error.dark,
            },
          }),
        },
      ],
    },
    MuiChip: {
      defaultProps: {
        color: "primary",
        deleteIcon: <Close />,
        size: "medium",
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontSize: "0.875rem",
          lineHeight: "1rem",
          height: "fit-content",

          "&:active": {
            boxShadow: "none",
          },
          ...(ownerState.label == undefined && {
            "& .MuiChip-icon": {
              "&.MuiChip-iconMedium, &.MuiChip-iconLarge, &.MuiChip-iconSmall":
                {
                  margin: 0,
                },
            },
            "& .MuiChip-label": {
              display: "none",
            },
            "&.MuiChip-sizeMedium": {
              padding: "0.5rem",
            },

            ...(ownerState.size == "large" && {
              "&.MuiChip-sizeLarge": {
                padding: "0.75rem",
                borderRadius: "4rem",
              },
            }),

            ...(ownerState.size == "small" && {
              "&.MuiChip-sizeSmall": {
                padding: "0.25rem",
              },
            }),
          }),
        }),
        sizeLarge: {
          height: "3rem",
          borderRadius: "3.125rem",
          padding: "0.5rem 1.5rem",
          boxSizing: "border-box",

          "& .MuiChip-label": {
            padding: "0.75rem 0",
          },

          "&.MuiChip-deletable": {
            paddingRight: "1rem",
          },

          "& .MuiChip-deleteIcon": {
            fontSize: "1.5rem",
          },

          '& [data-testid="CircleIcon"]': {
            fontSize: "0.5rem !important",
          },
        },
        sizeMedium: {
          padding: "0.25rem 0.75rem",

          "& .MuiChip-label": {
            padding: "0.25rem 0",
          },

          "&.MuiChip-deletable": {
            paddingRight: "0.5rem",
          },

          '& [data-testid="CircleIcon"]': {
            fontSize: "0.5rem",
          },
        },
        sizeSmall: {
          padding: "0.25rem 0.625rem",

          "& .MuiChip-label": {
            padding: "0",
          },

          "&.MuiChip-deletable": {
            paddingRight: "0.375rem",
          },

          '& [data-testid="CircleIcon"]': {
            fontSize: "0.5rem",
          },
        },
        avatar: {
          borderRadius: 16,
          height: "1rem",
          width: "1rem",
          objectFit: "contain",
          margin: "0 0.5rem 0 -0.25rem",

          "&.MuiChip-avatarLarge": {
            height: "1.5rem",
            width: "1.5rem",
            margin: "0 0.5rem 0 -0.665rem",
          },

          "&.MuiChip-avatarSmall": {
            margin: "0 0.375rem 0 -0.375rem",
          },
        },
        icon: {
          fontSize: "1rem",

          "&.MuiChip-iconSmall": {
            margin: "0 0.3125rem 0 -0.25rem",
          },

          "&.MuiChip-iconMedium": {
            margin: "0 0.375rem 0 -0.25rem",
          },

          "&.MuiChip-iconLarge": {
            fontSize: "1.5rem",
            margin: "0 0.5rem 0 -0.5rem",
          },

          "&.MuiChip-iconMedium.MuiSvgIcon-fontSizeSmall": {
            fontSize: "0.5rem",
          },
        },
        deleteIcon: {
          color: "inherit",
          fontSize: "1em",
          margin: "0 0 0 0.3125rem",
          padding: "0",
        },
      },
      variants: [
        {
          props: { color: "success" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.success.lighter,
            color: theme.palette.success.darker,
            ".MuiChip-clickable&:hover": {
              backgroundColor: `color-mix(in srgb, ${theme.palette.success.lighter} 90%, ${theme.palette.success.dark})`,
            },
            ".MuiChip-clickable&:active, .MuiChip-clickable&:focus": {
              backgroundColor: `color-mix(in srgb, ${theme.palette.success.lighter} 80%, ${theme.palette.success.dark})`,
            },
            "& .MuiChip-label": {
              color: theme.palette.black.darker,
            },
          }),
        },
        {
          props: { color: "error" },
          style: ({ theme }) => ({
            background: theme.palette.error.lighter,
            color: theme.palette.error.main,
            ".MuiChip-clickable&:hover": {
              backgroundColor: `color-mix(in srgb, ${theme.palette.error.lighter} 95%, ${theme.palette.error.main})`,
            },
            ".MuiChip-clickable&:active, .MuiChip-clickable&:focus": {
              backgroundColor: `color-mix(in srgb, ${theme.palette.error.lighter} 90%, ${theme.palette.error.main})`,
            },
            "& .MuiChip-label": {
              color: theme.palette.error.dark,
            },
          }),
        },
        {
          props: { color: "primary" },
          style: ({ theme }) => ({
            background: theme.palette.primary.lighter,
            color: theme.palette.primary.dark,
            ".MuiChip-clickable&:hover": {
              backgroundColor: `color-mix(in srgb, ${theme.palette.primary.lighter} 90%, ${theme.palette.primary.main})`,
            },
            ".MuiChip-clickable&:active, .MuiChip-clickable&:focus": {
              backgroundColor: `color-mix(in srgb, ${theme.palette.primary.lighter} 80%, ${theme.palette.primary.main})`,
            },
            "& .MuiChip-label": {
              color: theme.palette.primary.darker,
            },
            "& .MuiSvgIcon-root": {
              color: theme.palette.primary.main,
            },
          }),
        },
        {
          props: { color: "secondary" },
          style: ({ theme }) => ({
            background: theme.palette.secondary.light,
            color: theme.palette.secondary.darker,
            ".MuiChip-clickable&:hover": {
              backgroundColor: `color-mix(in srgb, ${theme.palette.secondary.lighter} 90%, ${theme.palette.secondary.darker})`,
            },
            ".MuiChip-clickable&:active, .MuiChip-clickable&:focus": {
              backgroundColor: `color-mix(in srgb, ${theme.palette.secondary.lighter} 80%, ${theme.palette.secondary.darker})`,
            },
            "& .MuiChip-label": {
              color: theme.palette.black.darker,
            },
          }),
        },
        {
          props: { color: "disabled" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.disabled.light,
            color: theme.palette.black.main,
            "& .MuiChip-label": {
              color: theme.palette.disabled.main,
            },
            "& .MuiChip-deleteIcon": {
              color: theme.palette.disabled.main,
            },
          }),
        },
        {
          props: { disabled: true },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.disabled.light,
            color: theme.palette.black.main,
            opacity: "1 !important",
            "& .MuiChip-label": {
              color: theme.palette.disabled.main,
            },
            "& .MuiChip-deleteIcon": {
              color: theme.palette.disabled.main,
            },
          }),
        },
        {
          props: { color: "warning" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.orange.darker,
            ".MuiChip-clickable&:hover": {
              backgroundColor: `color-mix(in srgb, ${theme.palette.warning.light} 80%, ${theme.palette.warning.dark})`,
            },
            ".MuiChip-clickable&:active, .MuiChip-clickable&:focus": {
              backgroundColor: `color-mix(in srgb, ${theme.palette.warning.light} 60%, ${theme.palette.warning.dark})`,
            },
            "& .MuiChip-label": {
              color: theme.palette.black.darker,
            },
          }),
        },
        {
          props: { color: "pending" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.pending.lighter,
            color: theme.palette.pending.darker,
            ".MuiChip-clickable&:hover": {
              backgroundColor: `color-mix(in srgb, ${theme.palette.pending.lighter} 90%, ${theme.palette.pending.dark})`,
            },
            ".MuiChip-clickable&:active, .MuiChip-clickable&:focus": {
              backgroundColor: `color-mix(in srgb, ${theme.palette.pending.lighter} 80%, ${theme.palette.pending.dark})`,
            },
            "& .MuiChip-label": {
              color: theme.palette.black.darker,
            },
          }),
        },
        {
          props: { variant: "iconSuffix" },
          style: () => ({
            flexDirection: "row-reverse",

            "&.MuiChip-iconSuffix .MuiSvgIcon-fontSizeSmall": {
              margin: "0 -0.25rem 0 0.3125rem",
            },

            "&.MuiChip-iconSuffix .MuiSvgIcon-fontSizeMedium": {
              margin: "0 0 0 0.25rem",
            },

            "&.MuiChip-iconSuffix .MuiChip-iconSmall": {
              margin: "0 -0.25rem 0 0.3125rem",
            },

            "&.MuiChip-iconSuffix .MuiChip-iconMedium": {
              margin: "0 -0.25rem 0 0.375rem",
            },

            "&.MuiChip-iconSuffix .MuiChip-iconLarge": {
              margin: "0 -0.5rem 0 0.5rem",
            },
          }),
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.darker,
          textDecoration: "none",
          fontWeight: "500",
          fontSize: "16px",
          "&:hover": {
            color: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
        minRows: 4,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          width: "100%",
          maxWidth: "100%",
          [theme.breakpoints.up("sm")]: {
            maxWidth: "21.875rem",
          },
        }),
      },
      variants: [
        {
          props: { multiline: true },
          style: () => ({
            width: "auto",
            maxWidth: "100% !important",

            "& textarea": {
              maxWidth: "100%",
              resize: "both",
            },
          }),
        },
        {
          props: { fullWidth: true },
          style: ({ theme }) => ({
            width: "100%",
            maxWidth: "100%",
            [theme.breakpoints.up("sm")]: {
              maxWidth: "100%",
            },
          }),
        },
        {
          props: { fullWidth: true, multiline: true },
          style: {
            resize: "vertical",
            "& textarea": {
              resize: "vertical !important",
            },
          },
        },
      ],
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          position: "static",
          transform: "none",
          marginBottom: Spacings.spacings["xxs"],
          color: theme.palette.black.darker,
          lineHeight: "1.375rem",
          fontSize: "0.875rem",

          "& .c-asterisk": {
            color: theme.palette.error.main,
          },

          "&.Mui-focused": {
            color: theme.palette.black.darker,
          },

          "&.Mui-error": {
            color: theme.palette.error.dark,
          },
        }),
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginLeft: 0,
          lineHeight: "1.375rem",
          fontSize: "0.875rem",

          "&.Mui-error": {
            color: theme.palette.error.dark,
          },
        }),
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        notched: false,
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          fontSize: "1rem",
          padding: 0,
          backgroundColor: theme.palette.white.main,
          "& .MuiOutlinedInput-input": {
            height: "3.5rem",
            padding: `${Spacings.spacings["sm"]} ${Spacings.spacings["md"]}`,
            boxSizing: "border-box",

            [theme.breakpoints.up("md")]: {
              height: "3rem",
            },
          },

          "& .MuiSelect-select": {
            width: "89px",
            display: "flex",
            alignItems: "center",
          },
          "& .MuiInputAdornment-root": {
            marginRight: 0,
          },
          "& .MuiInputAdornment-outlined .MuiButton-root": {
            height: "3.5rem !important",
            [theme.breakpoints.up("md")]: {
              height: "3rem",
            },
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1px",
          },

          ...(!ownerState.error &&
            !ownerState.disabled && {
              ":hover": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.primary.dark,
                },
                "& .MuiSvgIcon-root": {
                  color: theme.palette.primary.darker,
                },
              },

              "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                  boxShadow: `0 0 0 0.2rem ${theme.palette.primary.lighter}`,
                  borderColor: theme.palette.primary.dark,
                },
                "& .MuiInputAdornment-outlined .MuiOutlinedInput-notchedOutline":
                  {
                    boxShadow: "none",
                  },
                "& .MuiSvgIcon-root": {
                  color: theme.palette.primary.darker,
                },
              },
            }),

          "&.Mui-error.Mui-focused": {
            "& fieldset": {
              borderColor: theme.palette.error.dark,
              boxShadow: `0 0 0 0.2rem ${theme.palette.error.lighter}`,
            },
          },

          ...(ownerState.disabled && {
            "& .MuiInputAdornment-outlined": {
              "& .material-icons": {
                color: theme.palette.disabled.main,
              },
            },
          }),
        }),
        notchedOutline: ({ theme }) => ({
          borderColor: theme.palette.secondary.darker,
          borderWidth: "1px",
        }),

        input: ({ ownerState, theme }) => ({
          ...(!ownerState.error &&
            !ownerState.disabled && {
              background: theme.palette.white.main,
            }),

          "&.MuiInputBase-inputMultiline": {
            resize: "both",
          },
          "&::placeholder": {
            color: theme.palette.text.secondary,
            opacity: 1,
          },
          ...(ownerState.error && {
            "&::placeholder": {
              opacity: 1,
              color: theme.palette.error.main,
            },
          }),
          ...(ownerState.disabled && {
            "&::placeholder": {
              opacity: 1,
              color: theme.palette.black.light,
            },
          }),
        }),
        error: ({ theme }) => ({
          background: theme.palette.error.light,

          borderColor: theme.palette.orange.darker,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.orange.darker,
          },
          "& .MuiInputAdornment-root": {
            color: theme.palette.error.main,
          },

          "& span.MuiTypography-root": {
            background: theme.palette.error.main,
            color: theme.palette.error.contrastText,
          },

          "& .MuiInputAdornment-outlined": {
            "& .MuiSelect-select, & .MuiButton-root": {
              backgroundColor: theme.palette.error.main,
              color: theme.palette.error.contrastText,
            },
            "& .MuiSvgIcon-root": {
              color: theme.palette.error.dark,
            },

            "& .MuiSelect-icon, & .MuiSelect-icon .MuiSvgIcon-root": {
              color: theme.palette.error.contrastText,
            },
            "& .MuiButton-root": {
              borderColor: theme.palette.error.main,
            },
          },

          "&:hover": {
            "& .MuiButton-root": {
              backgroundColor: theme.palette.error.dark,
            },
          },
        }),
        adornedStart: ({ theme, ownerState }) => ({
          paddingLeft: 0,

          "& .MuiInputAdornment-outlined .MuiOutlinedInput-notchedOutline": {
            borderWidth: 0,
            borderRight: "1px solid " + theme.palette.secondary.darker,
            borderRadius: "4px 0 0 4px",
          },

          "& .MuiInputAdornment-outlined .Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              boxShadow: "none",
              borderColor: "rgba(0, 0, 0, 0)",
              borderRight: `1px solid ${theme.palette.secondary.darker}`,
            },

          "& .MuiTypography-root": {
            color: "inherit",
            paddingLeft: "1rem",
            fontSize: "inherit",
          },

          "& .MuiSvgIcon-root": {
            color: theme.palette.secondary.darker,
            marginRight: 0,
          },

          "& .material-icons": {
            marginLeft: Spacings.spacings["sm"],
          },

          "& span.MuiTypography-root": {
            display: "block",
            padding: "0  " + Spacings.spacings["sm"],
            height: "3.5rem",
            lineHeight: "3.5rem",
            background: theme.palette.secondary.lighter,
            borderRadius: "4px 0 0 4px",

            [theme.breakpoints.up("md")]: {
              height: "3rem",
              lineHeight: "3rem",
            },
          },

          ...(!ownerState.error &&
            !ownerState.disabled && {
              "& span.MuiTypography-root": {
                display: "block",
                padding: "0  " + Spacings.spacings["sm"],
                height: "3.5rem",
                lineHeight: "3.5rem",
                background: theme.palette.secondary.lighter,
                borderRadius: "4px 0 0 4px",
                borderRight: `1px solid ${theme.palette.secondary.darker}`,

                [theme.breakpoints.up("md")]: {
                  height: "3rem",
                  lineHeight: "3rem",
                },
              },
            }),

          ...(ownerState.disabled && {
            "& span.MuiTypography-root": {
              display: "block",
              padding: "0  " + Spacings.spacings["sm"],
              height: "3.5rem",
              lineHeight: "3.5rem",
              background: theme.palette.secondary.lighter,
              borderRadius: "4px 0 0 4px",
              borderRight: `1px solid ${theme.palette.disabled.main}`,

              [theme.breakpoints.up("md")]: {
                height: "3rem",
                lineHeight: "3rem",
              },
            },
          }),
        }),
        adornedEnd: ({ theme }) => ({
          paddingRight: 0,

          "& .MuiTypography-root": {
            color: "inherit",
          },

          "& .MuiSelect-select": {
            backgroundColor: theme.palette.secondary.lighter,
            borderRadius: "4px",
            width: "89px",
          },

          "&.Mui-disabled": {
            "& .MuiInputAdornment-outlined .MuiOutlinedInput-notchedOutline": {
              borderWidth: 0,
              borderLeft:
                "1px solid " + theme.palette.disabled.main + " !important",
              borderRadius: "0 4px 4px 0",
            },
          },

          "& .MuiIconButton-root": {
            color: theme.palette.secondary.darker,
            marginRight: "0.25rem",
            height: "1.75rem",
            width: "1.75rem",
            fontSize: "1.25rem",
            padding: "0.25rem",

            "&:focus": {
              color: theme.palette.primary.darker,
            },

            "& .MuiSvgIcon-root": {
              fontSize: "inherit",
            },
          },

          "& .material-icons, & .MuiIconButton-root": {
            marginRight: Spacings.spacings["sm"],
          },

          "& .MuiIconButton-root > .material-icons": {
            marginRight: 0,
          },

          "& .MuiInputAdornment-outlined .MuiOutlinedInput-notchedOutline": {
            borderWidth: 0,
            borderLeft:
              "1px solid " + theme.palette.secondary.main + " !important",
            borderRadius: "0 4px 4px 0",
          },

          "& .MuiInputAdornment-outlined .Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              boxShadow: "none",
              borderColor: "rgba(0, 0, 0, 0)",
            },

          "& .MuiInputAdornment-outlined": {
            "& .MuiSelect-icon": {
              margin: "0 0 0 0.5rem",
            },
          },

          "& .MuiInputAdornment-outlined .MuiButton-root": {
            borderRadius: "0 4px 4px 0",
            padding: "0  " + Spacings.spacings["md"],
            height: "2.4rem",
            lineHeight: "2.4rem",
            boxShadow: "none",
            border: "1px solid " + theme.palette.primary.dark,
            textTransform: "capitalize",
          },
        }),
      },
      variants: [
        {
          props: { disabled: true },
          style: ({ theme }) => ({
            background: theme.palette.disabled.light,
            "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.disabled.light,
            },
            "& .MuiInputAdornment-outlined": {
              color: theme.palette.disabled.main,
              "& .MuiSelect-select, & .MuiSelect-icon": {
                color: theme.palette.disabled.main,
              },
              "& .MuiSelect-select": {
                backgroundColor: theme.palette.disabled.light,
              },
              "& .MuiOutlinedInput-notchedOutline, & .MuiButton-root": {
                borderColor: theme.palette.disabled.main,
              },
              "& span.MuiTypography-root, & .MuiButton-root": {
                background: theme.palette.disabled.light,
              },
              "& .MuiButton-root": {
                borderWidth: 0,
                borderLeftWidth: "1px",
              },
            },
          }),
        },
      ],
    },
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
        size: "small",
        checkedIcon: <Check />,
        indeterminateIcon: <HorizontalRule />,
      },
      styleOverrides: {
        root: () => ({
          padding: "1px",
          borderRadius: "4px",
          border: "2px solid",
          fillOpacity: 0,
          backgroundColor: "white",

          ".MuiSvgIcon-fontSizeSmall": {
            fontSize: "18px",
          },
        }),
      },
      variants: [
        {
          props: { color: "primary" },
          style: ({ theme }) => ({
            borderColor: theme.palette.secondary.darker,
            color: theme.palette.white.main,

            "&:hover": {
              backgroundColor: theme.palette.secondary.lighter,
              borderColor: theme.palette.primary.dark,
              color: theme.palette.secondary.lighter,
            },

            "&.Mui-focusVisible": {
              boxShadow: "0px 0px 0px 2px rgba(3, 204, 187, 0.20)",
              borderColor: theme.palette.primary.main,
            },

            "&.Mui-checked": {
              backgroundColor: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              color: theme.palette.white.main,
              fillOpacity: 1,

              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
                borderColor: theme.palette.primary.dark,
              },
            },

            "&.MuiCheckbox-indeterminate": {
              backgroundColor: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              color: theme.palette.white.main,
              fillOpacity: 1,

              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
                borderColor: theme.palette.primary.dark,
              },
            },
          }),
        },
        {
          props: { color: "error" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.error.light,
            borderColor: theme.palette.error.main,
            color: theme.palette.error.light,
            fillOpacity: 1,

            "&.Mui-focusVisible": {
              boxShadow: "0px 0px 0px 2px rgba(219, 0, 66, 0.20)",
            },

            "&:hover": {
              borderColor: theme.palette.error.dark,
            },

            "&.Mui-checked": {
              backgroundColor: theme.palette.error.main,
              color: theme.palette.white.main,

              "&:hover": {
                backgroundColor: theme.palette.error.dark,
              },
            },

            "&.MuiCheckbox-indeterminate": {
              backgroundColor: theme.palette.error.main,
              color: theme.palette.white.main,

              "&:hover": {
                backgroundColor: theme.palette.error.dark,
              },
            },
          }),
        },
        {
          props: { disabled: true },
          style: ({ theme }) => ({
            "&.MuiCheckbox-colorPrimary": {
              backgroundColor: theme.palette.disabled.light,
              borderColor: theme.palette.disabled.light,
              color: theme.palette.disabled.light,
              fillOpacity: 1,
            },

            "&.Mui-checked": {
              color: theme.palette.disabled.main,
            },

            "&.MuiCheckbox-indeterminate": {
              color: theme.palette.disabled.main,
            },
          }),
        },
      ],
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          rowGap: "8px",
          margin: "12px 8px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          lineHeight: "1.5rem",
          fontSize: "0.875rem",
          "&.Mui-error": {
            color: theme.palette.error.dark,
          },

          "&.Mui-focused": {
            color: theme.palette.text.primary,
          },
        }),
        asterisk: ({ theme }) => ({
          color: theme.palette.error.main,
        }),
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: "0",

          "& .MuiCheckbox-root": {
            alignSelf: "flex-start",
            position: "relative",
            top: "-2px",
            marginTop: "2px",
          },
        },
        asterisk: ({ theme }) => ({
          color: theme.palette.error.main,
          marginTop: "-5px",
        }),
        label: {
          marginLeft: "12px",
          fontSize: "14px",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiFormGroup-root": {
            margin: "12px 8px",
            gap: "8px",
          },

          "& .MuiFormLabel-root": {
            color: theme.palette.text.primary,
          },
        }),
      },
      variants: [
        {
          props: { error: true },
          style: ({ theme }) => ({
            "& .MuiFormLabel-root.Mui-error": {
              color: theme.palette.error.dark,
            },
          }),
        },
        {
          props: { disabled: true },
          style: ({ theme }) => ({
            "& .MuiFormHelperText-root.Mui-disabled": {
              color: theme.palette.text.secondary,
            },
          }),
        },
      ],
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: () => ({
          "&.MuiSvgIcon-root": {
            verticalAlign: "middle",
          },
        }),
      },
      variants: [
        {
          props: { color: "primary" },
          style: ({ theme }) => ({
            color: theme.palette.primary.main,
          }),
        },
        {
          props: { color: "secondary" },
          style: ({ theme }) => ({
            color: theme.palette.secondary.darker,
          }),
        },
        {
          props: { color: "error" },
          style: ({ theme }) => ({
            color: theme.palette.error.main,
          }),
        },
        {
          props: { color: "warning" },
          style: ({ theme }) => ({
            color: theme.palette.warning.main,
          }),
        },
        {
          props: { color: "success" },
          style: ({ theme }) => ({
            color: theme.palette.success.main,
          }),
        },
        {
          props: { color: "info" },
          style: ({ theme }) => ({
            color: theme.palette.info.main,
          }),
        },
        {
          props: { color: "disabled" },
          style: ({ theme }) => ({
            color: theme.palette.disabled.main,
          }),
        },
        {
          props: { fontSize: "medium" },
          style: () => ({
            fontSize: "24px",
          }),
        },
        {
          props: { fontSize: "large" },
          style: () => ({
            fontSize: "64px",
          }),
        },
      ],
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
        size: "medium",
        color: "primary",
      },
      styleOverrides: {
        root: {
          boxSizing: "border-box",
          transition: "background-color 0.3s ease-in",
          marginRight: 0,

          "&.Mui-focusVisible, &:focus, &:active": {
            transition: "background-color 0.3s ease-in",
          },

          "& .MuiSvgIcon-root": {
            fontSize: "inherit",
          },
        },
      },
      variants: [
        {
          props: { color: "default" },
          style: ({ theme }) => ({
            color: theme.palette.black.dark,

            "&:hover": {
              backgroundColor: theme.palette.black.tintLight,
            },
            "&.Mui-focusVisible, &:focus, &:active": {
              backgroundColor: theme.palette.black.tintDark,
            },
          }),
        },
        {
          props: { size: "medium" },
          style: () => ({
            height: "3rem",
            width: "3rem",
            fontSize: "1.5rem",
            padding: "0.75rem",
          }),
        },
        {
          props: { size: "small" },
          style: () => ({
            height: "1.75rem",
            width: "1.75rem",
            fontSize: "1.25rem",
            padding: "0.25rem",
          }),
        },
        {
          props: { size: "mediumIconSmall" },
          style: () => ({
            height: "2.75rem",
            width: "2.75rem",
            fontSize: "1.25rem",
            padding: "0.75rem",
          }),
        },

        {
          props: { size: "smallIconMedium" },
          style: () => ({
            height: "2rem",
            width: "2rem",
            fontSize: "1.5rem",
            padding: "0.25rem",
          }),
        },

        {
          props: { color: "primary" },
          style: () => ({
            color: theme.palette.primary.darker,

            "&:hover": {
              backgroundColor: theme.palette.primary.tintLight,
            },
            "&.Mui-focusVisible, &:focus, &:active": {
              backgroundColor: theme.palette.primary.tintDark,
            },
          }),
        },
        {
          props: { color: "secondary" },
          style: ({ theme }) => ({
            color: theme.palette.secondary.darker,

            "&:hover": {
              backgroundColor: theme.palette.secondary.tintLight,
            },
            "&.Mui-focusVisible, &:focus, &:active": {
              backgroundColor: theme.palette.secondary.tintDark,
            },
          }),
        },
        {
          props: { color: "error" },
          style: ({ theme }) => ({
            color: theme.palette.error.darker,

            "&:hover": {
              backgroundColor: theme.palette.error.tintLight,
            },
            "&.Mui-focusVisible, &:focus, &:active": {
              backgroundColor: theme.palette.error.tintDark,
            },
          }),
        },
        {
          props: { color: "neutralDark" },
          style: ({ theme }) => ({
            color: theme.palette.black.dark,

            "&:hover": {
              backgroundColor: theme.palette.black.tintLight,
            },
            "&.Mui-focusVisible, &:focus, &:active": {
              backgroundColor: theme.palette.black.tintDark,
            },
          }),
        },
        {
          props: { color: "neutralLight" },
          style: ({ theme }) => ({
            color: theme.palette.white.main,

            "&:hover": {
              backgroundColor: theme.palette.white.tintLight,
            },
            "&.Mui-focusVisible, &:focus, &:active": {
              backgroundColor: theme.palette.white.tintDark,
            },
          }),
        },
      ],
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
        },
      },
    },
    MuiToggleButton: {
      defaultProps: {
        disableRipple: true,
        color: "primary",
      },
      variants: [
        {
          props: { size: "small" },
          style: () => ({
            borderRadius: "0.5rem!important",
            padding: "0.6875rem 1rem",
            fontSize: "1rem",
          }),
        },
        {
          props: { size: "medium" },
          style: () => ({
            borderRadius: "4px!important",
            padding: "14px 18px",
            fontSize: "16px",
          }),
        },
        {
          props: { color: "primary" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.white.main,
            color: theme.palette.black.darker,

            borderColor: "rgba(0, 0, 0, 0)!important",
            borderWidth: "2px!important",
            borderLeft: "2px solid rgba(0, 0, 0, 0)!important",
            margin: "0!important",

            "&:hover, &.Mui-selected, &.Mui-selected:hover": {
              borderColor: `${theme.palette.primary.dark}!important`,
              backgroundColor: theme.palette.white.main,
              color: theme.palette.black.darker,
              filter: "drop-shadow(0px 0px 2px #03CCBB)",
            },
          }),
        },
        {
          props: { color: "secondary" },
          style: ({ theme }) => ({
            color: theme.palette.black.darker,
            backgroundColor: theme.palette.secondary.light,

            borderColor: "rgba(0, 0, 0, 0)!important",
            borderWidth: "2px!important",
            margin: "0!important",

            "&:hover, &.Mui-selected, &.Mui-selected:hover": {
              backgroundColor: theme.palette.secondary.dark,
              color: theme.palette.black.darker,
            },
          }),
        },
      ],
    },
    MuiTooltip: {
      defaultProps: {
        placement: "bottom",
        disableHoverListener: false,
        disableTouchListener: false,
      },
      styleOverrides: {
        tooltip: ({ theme }) => ({
          backgroundColor: theme.palette.black.darker,
          fontSize: "0.875rem",
          color: theme.palette.white.main,
          opacity: 1,
          padding: "8px 12px",
          borderRadius: "4px",
          display: "inline-block",
          "& .MuiTooltip-arrow": {
            color: theme.palette.black.darker,
          },
        }),
        popper: () => ({
          "& .MuiTooltip-tooltip, &[data-popper-placement*='bottom'] .MuiTooltip-tooltip, &.MuiPopper-root .MuiTooltip-tooltip.MuiTooltip-tooltipPlacementBottom":
            {
              marginTop: "0.25rem",
            },
        }),
      },
    },
    MuiRadio: {
      defaultProps: {
        disableRipple: true,
        size: "medium",
        icon: <RadioButtonUncheckedSharp />,
        checkedIcon: <TripOriginSharp />,
      },
      variants: [
        {
          props: { color: "primary" },
          style: ({ theme }) => ({
            "&:hover": {
              color: theme.palette.primary.main,
              transition: "color 0.2s ease-in-out",
              backgroundColor: theme.palette.secondary.lighter,
            },

            "&.Mui-focusVisible": {
              boxShadow: "0px 0px 0px 2px rgba(3, 204, 187, 0.20)",
              color: theme.palette.primary.main,
            },

            "&.Mui-checked": {
              "&:hover": {
                color: theme.palette.primary.darker,
                backgroundColor: "rgba(0, 0, 0, 0)",
              },
            },
          }),
        },
        {
          props: { color: "error" },
          style: ({ theme }) => ({
            color: theme.palette.error.main,
            transition: "color 0.2s ease-in-out",
            backgroundColor: theme.palette.error.light,

            "&:hover": {
              transition: "all 0.2s ease-in-out",
              color: theme.palette.error.dark,
            },

            "&.Mui-focusVisible": {
              boxShadow: "0px 0px 0px 2px rgba(219, 0, 66, 0.20)",
              borderColor: theme.palette.primary.main,
            },

            "&.Mui-checked": {
              backgroundColor: "rgba(0, 0, 0, 0)",

              "&:hover": {
                color: theme.palette.error.dark,
                backgroundColor: "rgba(0, 0, 0, 0)",
              },
            },
          }),
        },
        {
          props: { size: "medium" },
          style: {
            height: "1.44rem",
            width: "1.44rem",
          },
        },
        {
          props: { size: "small" },
          style: {
            height: "1rem",
            width: "1rem",
          },
        },
        {
          props: { disabled: true },
          style: ({ theme }) => ({
            "&.Mui-disabled": {
              color: theme.palette.disabled.light,
              backgroundColor: theme.palette.disabled.light,

              "&.Mui-checked circle": {
                fill: theme.palette.disabled.main,
              },
            },
          }),
        },
      ],

      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.secondary.darker,
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: "8px",
        },
      },
      variants: [
        {
          props: { variant: "flat" },
          style: () => ({
            borderTop: "6px solid" + theme.palette.pink.darker,
            borderRadius: 0,
          }),
        },
        {
          props: { variant: "filledHeader" },
          style: ({ theme }) => ({
            "& .MuiCardHeader-root": {
              backgroundColor: theme.palette.secondary.lighter,
              borderBottom: "1px solid " + theme.palette.secondary.main,
              paddingBottom: "1rem",

              [theme.breakpoints.up("md")]: {
                paddingBottom: "1.5rem",
              },
            },
          }),
        },
        {
          props: { variant: "headerDivider" },
          style: ({ theme }) => ({
            "& .MuiCardHeader-root": {
              borderBottom: "1px solid " + theme.palette.secondary.main,
              paddingBottom: "1rem",

              [theme.breakpoints.up("md")]: {
                paddingBottom: "1.5rem",
              },
            },
          }),
        },
        {
          props: { variant: "footerDivider" },
          style: ({ theme }) => ({
            "& .MuiCardActions-root": {
              borderTop: "1px solid " + theme.palette.secondary.main,
              paddingTop: "1rem",

              [theme.breakpoints.up("md")]: {
                paddingTop: "1.5rem",
              },
            },
          }),
        },
        {
          props: { variant: "headerAndFooterDivider" },
          style: ({ theme }) => ({
            "& .MuiCardHeader-root": {
              borderBottom: "1px solid " + theme.palette.secondary.main,
              paddingBottom: "1rem",

              [theme.breakpoints.up("md")]: {
                paddingBottom: "1.5rem",
              },
            },
            "& .MuiCardActions-root": {
              borderTop: "1px solid " + theme.palette.secondary.main,
              paddingTop: "1rem",

              [theme.breakpoints.up("md")]: {
                paddingTop: "1.5rem",
              },
            },
          }),
        },
        {
          props: { variant: "flatAndFooterDivider" },
          style: ({ theme }) => ({
            borderTop: "6px solid" + theme.palette.pink.darker,
            borderRadius: 0,
            "& .MuiCardActions-root": {
              borderTop: "1px solid " + theme.palette.secondary.main,
              paddingTop: "1rem",

              [theme.breakpoints.up("md")]: {
                paddingTop: "1.5rem",
              },
            },
          }),
        },
        {
          props: { variant: "filledHeaderAndFooterDivider" },
          style: ({ theme }) => ({
            "& .MuiCardHeader-root": {
              backgroundColor: theme.palette.secondary.lighter,
              borderBottom: "1px solid " + theme.palette.secondary.main,
              paddingBottom: "1rem",

              [theme.breakpoints.up("md")]: {
                paddingBottom: "1.5rem",
              },
            },
            "& .MuiCardActions-root": {
              borderTop: "1px solid " + theme.palette.secondary.main,
              paddingTop: "1rem",

              [theme.breakpoints.up("md")]: {
                paddingTop: "1.5rem",
              },
            },
          }),
        },
      ],
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: "h3" },
      },
      styleOverrides: {
        root: ({ theme }) => ({
          padding: "1rem 1rem 0",

          [theme.breakpoints.up("md")]: {
            padding: "1.5rem 1.5rem 0",
          },
        }),
        action: {
          "& .MuiStack-root": {
            columnGap: "0.75rem",
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: "1rem",
          "&:last-child": {
            paddingBottom: "1rem",
          },

          [theme.breakpoints.up("md")]: {
            padding: "1.5rem",
            "&:last-child": {
              paddingBottom: "1.5rem",
            },
          },
        }),
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: ({ theme }) => ({
          display: "flex",
          justifyContent: "flex-end",
          padding: "0 1rem 1rem",

          [theme.breakpoints.up("md")]: {
            padding: "0 1.5rem 1.5rem",
          },

          "& .MuiStack-root": {
            minWidth: "100%",
            rowGap: "0.75rem",
          },
        }),
      },
    },
    MuiSnackbar: {
      defaultProps: {
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        autoHideDuration: 5000,
      },
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          "& .MuiPaper-root": {
            borderRadius: "3rem",
            alignItems: "center",
            padding: "0.375rem 1rem 0.375rem 0.75rem ",
          },
          "& .MuiAlert-root": {
            fontWeight: 400,
            fontSize: "0.875rem",
            background: theme.palette.black.darker,
            color: theme.palette.white.main,
            height: "3rem",
            boxSizing: "border-box",

            "& .MuiButton-root": {
              marginLeft: "1rem",
              padding: "1px 2px 4px 2px",
              lineHeight: 1,
              fontSize: "1rem",
              textTransform: "capitalize",
              fontWeight: 500,
              color: theme.palette.primary.main,
              height: "2.5rem",
              boxSizing: "border-box",
            },

            "& .MuiButtonBase-root": {
              "&.MuiButton-root:hover, &.MuiButton-root:active, &.MuiButton-root:focus":
                {
                  backgroundColor: theme.palette.white.tintLight,
                },
            },
            ...(ownerState.severity !== "error" && {
              "& .MuiButton-root:hover, & .MuiButton-root:active, & .MuiButton-root:focus":
                {
                  color: theme.palette.primary.main,
                },

              "&.MuiButtonBase-root.MuiButton-root:active, &.MuiButtonBase-root.MuiButton-root:focus":
                {
                  backgroundColor: theme.palette.white.tintDark,
                },
            }),
            ".MuiAlert-icon": {
              background: theme.palette.primary.main,
              color: theme.palette.black.darker,
              borderRadius: "3rem",
              height: "1.5rem",
              width: "1.5rem",
              padding: "0.25rem",
              alignSelf: "center",
              fontSize: "1rem",
              margin: "0.375rem 0.5rem 0.375rem 0",
            },
            ".MuiAlert-action": {
              padding: "0 0 0 0.25rem",
              svg: {
                color: theme.palette.white.main,
              },
            },
            ".MuiAlert-message": {
              padding: "0",
              display: "flex",
              alignItems: "center",
              color: theme.palette.white.main,
            },
          },
          "& .MuiAlert-filledError": {
            background: theme.palette.error.main,
            color: theme.palette.white.main,
            "& .MuiAlert-icon": {
              backgroundColor: "white",
            },
            "& .MuiAlert-icon .MuiSvgIcon-root": {
              color: theme.palette.error.main,
            },
            "& .MuiButton-root": {
              color: theme.palette.white.main,
            },
          },
          "& .MuiAlert-filledInfo": {
            background: theme.palette.black.darker,
            color: theme.palette.white.main,
          },
          "& .MuiAlert-filledWarning": {
            background: theme.palette.black.darker,
            color: theme.palette.white.main,
            "& .MuiAlert-icon": {
              backgroundColor: theme.palette.warning.darker,
            },
          },
        }),
      },
    },
    MuiAlert: {
      defaultProps: {
        severity: "info",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          padding: "16px 24px 10px 24px",
          borderRadius: 8,
          "& .MuiAlert-icon": {
            fontSize: 64,
          },
          "& .MuiAlertTitle-root": {
            fontSize: 18,
            color: theme.palette.black.darker,
          },
          "& .MuiAlert-message": {
            fontSize: 14,
            color: theme.palette.black.darker,
          },
          "& .MuiAlert-action": {
            '& .MuiButtonBase-root[aria-label="Close"]': {
              color: theme.palette.black.darker,
            },
          },
        }),
      },
      variants: [
        {
          props: { severity: "info" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.pink.light,
            "& .MuiAlert-icon": {
              color: theme.palette.pink.darker,
            },
          }),
        },
        {
          props: { severity: "error" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.error.light,
            border: `thin solid ${theme.palette.error.main}`,
            "& .MuiAlertTitle-root": {
              color: theme.palette.error.main,
            },
            "& .MuiAlert-icon": {
              color: theme.palette.error.main,
            },
          }),
        },
        {
          props: { severity: "warning" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.warning.light,
            "& .MuiAlert-icon": {
              color: theme.palette.warning.darker,
            },
          }),
        },
        {
          props: { severity: "success" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.success.main,
            "& .MuiAlert-icon": {
              color: theme.palette.primary.dark,
            },
          }),
        },
      ],
    },
    MuiAutocomplete: {
      defaultProps: {
        size: "medium",
        popupIcon: <KeyboardArrowDown />,
        clearIcon: <Close />,
        limitTags: 2,
        renderInput: (params: AutocompleteRenderInputParams) => (
          <TextField {...params} placeholder="Select an item" />
        ),
        renderOption: (
          props: object,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          option: any,
          { selected }: AutocompleteRenderOptionState,
          ownerState,
        ) => (
          <MenuItem {...props}>
            {ownerState.multiple && <Checkbox checked={selected} />}
            <span>{option as string}</span>
          </MenuItem>
        ),
        renderTags: (
          value: string[],
          getTagProps: AutocompleteGetTagProps,
        ) =>
          value.map((option: string, index: number) => (
            // eslint-disable-next-line react/jsx-key
            <Chip
              label={option as string}
              {...getTagProps({ index })}
              color="secondary"
            />
          )),
      },
      styleOverrides: {
        root: ({ theme }) => ({
          width: "350px",

          "& .MuiOutlinedInput-root": {
            minHeight: "3.5rem",
            paddingTop: "0 !important",
            paddingBottom: "0 !important",
            lineHeight: "1.375rem",

            [theme.breakpoints.up("md")]: {
              minHeight: "3rem",
            },
          },

          "& .MuiTextField-root": {
            [theme.breakpoints.up("sm")]: {
              maxWidth: "350px",
            },
          },

          "& .Mui-error": {
            "& .MuiChip-filledError": {
              backgroundColor: theme.palette.error.main,

              "& .MuiChip-label": {
                color: theme.palette.white.main,
              },

              "& .MuiChip-deleteIcon, &:hover": {
                color: theme.palette.white.main,
              },
            },
          },
        }),
        inputRoot: ({ theme, ownerState }) => ({
          gap: "3px",

          ...(!ownerState.disabled && {
            "&.Mui-focused, &:hover": {
              "& .MuiChip-deleteIcon, &:hover": {
                color: "inherit",
              },
              "& .MuiAutocomplete-endAdornment": {
                "& .MuiSvgIcon-root": {
                  color: theme.palette.primary.darker,
                },
              },
            },
          }),

          "&.Mui-disabled": {
            "& .MuiAutocomplete-endAdornment": {
              "& .MuiSvgIcon-root": {
                color: theme.palette.disabled.main,
              },
            },
          },

          "&.Mui-error": {
            "& .MuiAutocomplete-endAdornment": {
              "& .MuiIconButton-root.MuiAutocomplete-popupIndicator": {
                color: theme.palette.error.darker,

                "&:hover": {
                  backgroundColor: theme.palette.error.tintLight,
                },
                "&.Mui-focusVisible, &:focus, &:active": {
                  backgroundColor: theme.palette.error.tintDark,
                },
              },
              "& .MuiSvgIcon-root": {
                color: theme.palette.error.dark,
                margin: "auto",
              },
            },
          },

          "& .MuiAutocomplete-endAdornment": {
            top: "50%",
            transform: "translate(0, -50%)",
          },

          "& .MuiIconButton-root": {
            marginRight: "0",
            height: "1.75rem",
            width: "1.75rem",
            fontSize: "1.25rem",
            padding: "0.25rem",
            boxSizing: "border-box",

            "& .MuiSvgIcon-root": {
              fontSize: "inherit",
            },
          },

          "& .MuiIconButton-root .MuiIconButton-root": {
            color: theme.palette.secondary.darker,
            width: "1.75rem",
            height: "1.75rem",
          },
        }),
        popupIndicator: () => ({
          width: "1.75rem",
          height: "1.75rem",

          "& .MuiSvgIcon-root": {
            marginRight: "0",
          },
        }),
        input: ({ theme }) => ({
          ...theme.typography.text1,
          color: theme.palette.text.primary,
          width: "350px",
          paddingTop: "0",
          paddingBottom: "0",

          "&::placeholder": {
            opacity: 100,
            fontWeight: 400,
          },
        }),
        listbox: ({ ownerState, theme }) => ({
          maxHeight: "240px",

          "& .MuiAutocomplete-option": {
            minHeight: "48px",
            gap: "16px",
            padding: "11px 16px",
          },

          '& .MuiAutocomplete-option[aria-selected="true"].Mui-focused, & .MuiAutocomplete-option[aria-selected="true"]':
            {
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.primary.lighter,

              "& .MuiButtonBase-root.MuiCheckbox-root": {
                color: theme.palette.secondary.lighter,
              },
            },

          "& .MuiAutocomplete-option .Mui-focused": {
            "& .MuiButtonBase-root.MuiCheckbox-root": {
              color: theme.palette.secondary.lighter,
            },
          },

          "& .MuiAutocomplete-option.Mui-focused": {
            backgroundColor: theme.palette.secondary.lighter,
          },

          '& .MuiAutocomplete-option[aria-selected="true"]': {
            "& .MuiTypography-root": {
              "&:nth-child(2)": {
                color: theme.palette.text.secondary,
              },
            },

            '& [data-testid="PersonOutlineIcon"]': {
              color: theme.palette.primary.darker,
            },

            "&:hover": {
              backgroundColor: `color-mix(in srgb, ${theme.palette.primary.lighter} 90%, ${theme.palette.primary.main})`,
              color: theme.palette.primary.darker,

              '& [data-testid="CheckIcon"]': {
                color: theme.palette.primary.dark,
              },

              "& .Mui-checked": {
                backgroundColor: theme.palette.primary.dark,
                border: "2px solid",
                borderColor: theme.palette.primary.dark,

                '& [data-testid="CheckIcon"]': {
                  color: theme.palette.white.main,
                },
              },
            },

            ...(ownerState.multiple !== true && {
              '& [data-testid="CheckIcon"]': {
                color: theme.palette.primary.main,
                height: "24px",
                width: "18px",
                marginLeft: "auto",
              },
            }),
          },
        }),
        option: ({ theme }) => ({
          fontSize: "1rem",
          minHeight: "48px",

          '& [data-testid="PersonOutlineIcon"]': {
            color: theme.palette.secondary.dark,
          },

          "& .MuiTypography-root": {
            "&:first-child": {
              color: theme.palette.text.primary,
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "26px",
            },
            "&:nth-child(2)": {
              color: theme.palette.text.secondary,
              fontSize: "14px",
              lineHeight: "24px",
            },
          },

          "&:hover": {
            backgroundColor: theme.palette.secondary.lighter,
            color: theme.palette.primary.darker,

            "& .MuiButtonBase-root.MuiCheckbox-root": {
              color: "rgba(0, 0, 0, 0)",
              borderColor: theme.palette.primary.dark,
            },

            "& .MuiTypography-root": {
              "&:first-child": {
                color: theme.palette.primary.contrastText,
              },
            },
          },

          "&.Mui-focused": {
            "& .MuiButtonBase-root.MuiCheckbox-root": {
              color: "rgba(0, 0, 0, 0)",
            },
            backgroundColor: theme.palette.secondary.lighter,
          },
        }),
        popper: () => ({
          borderRadius: "4px",
          boxShadow: "0px 4px 16px 0px rgba(107, 64, 34, 0.16)",
          marginTop: Spacings.spacings["xs"] + " !important",
        }),
        paper: {
          boxShadow: "none",
        },
        tag: ({ theme }) => ({
          margin: "0",
          height: "42px",
          borderRadius: "2px",
          display: "flex",
          alignItems: "center",

          [theme.breakpoints.up("md")]: {
            height: "36px",
          },
        }),
        clearIndicator: {
          width: "30px",

          "& .MuiSvgIcon-root": {
            marginRight: "0",
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        select: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.lighter,
          height: "3.5rem",

          [theme.breakpoints.up("md")]: {
            height: "3rem",
          },
        }),
      },
    },
    MuiBreadcrumbs: {
      defaultProps: {
        separator: <KeyboardArrowRight />,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiTypography-root": {
            fontSize: "1rem",
            lineHeight: "1rem",
          },
          "& .MuiLink-root": {
            color: theme.palette.primary.darker,
            fontWeight: 500,
            letterSpacing: ".005rem",
            textDecoration: "none",
            "&:hover": {
              color: theme.palette.primary.main,
            },
          },
          "& .MuiTypography-body1": {
            letterSpacing: ".02rem",
          },
          "& .MuiBreadcrumbs-separator": {
            color: theme.palette.black.main,
          },
        }),
      },
    },

    MuiSwitch: {
      defaultProps: {
        disableRipple: true,
      },
      variants: [
        {
          props: { color: "primary" },
          style: ({ theme }) => ({
            "& .MuiSwitch-thumb": {
              color: theme.palette.secondary.light,
            },
            "& .MuiSwitch-track": {
              backgroundColor: theme.palette.black.main,
            },
            "& .MuiSwitch-switchBase.Mui-checked": {
              "& .MuiSwitch-thumb": {
                color: theme.palette.primary.main,
              },
              "& .MuiSwitch-track": {
                backgroundColor: theme.palette.primary.tintDark,
              },
            },
          }),
        },
        {
          props: { color: "error" },
          style: ({ theme }) => ({
            "& .MuiSwitch-thumb": {
              color: theme.palette.secondary.light,
            },
            "& .MuiSwitch-track": {
              backgroundColor: theme.palette.black.main,
            },
            "& .MuiSwitch-switchBase.Mui-checked": {
              "& .MuiSwitch-thumb": {
                color: theme.palette.error.main,
              },
              "& .MuiSwitch-track": {
                backgroundColor: theme.palette.error.tintDark,
              },
            },
          }),
        },
        {
          props: { disabled: true },
          style: ({ theme }) => ({
            "& .MuiSwitch-thumb": {
              color: theme.palette.secondary.light,
            },
            "& .MuiSwitch-track": {
              backgroundColor: `${theme.palette.disabled.main}!important`,
            },
            "& .MuiSwitch-switchBase.Mui-checked": {
              "& .MuiSwitch-thumb": {
                color: theme.palette.secondary.light,
              },
              "& .MuiSwitch-track": {
                backgroundColor: theme.palette.disabled.main,
              },
            },
          }),
        },
      ],
    },
    MuiPagination: {
      defaultProps: {
        variant: "outlined",
        shape: "rounded",
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.black.darker,
          background: theme.palette.white.main,
          borderColor: theme.palette.secondary.main,
          // Text 2
          fontSize: "0.875rem",
          lineHeight: "1.25rem",
          letterSpacing: "0.02188rem",
          fontWeight: 400,

          [theme.breakpoints.up("md")]: {
            lineHeight: "1.375rem",
            letterSpacing: "0.0245rem",
          },

          "&.Mui-selected": {
            color: theme.palette.primary.darker,
            backgroundColor: theme.palette.secondary.lighter,
            borderColor: theme.palette.primary.darker,

            "&:hover": {
              backgroundColor: theme.palette.secondary.light,
            },
          },

          "&:hover": {
            borderColor: theme.palette.primary.darker,
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.primary.darker,
          },

          "&.MuiPaginationItem-previousNext, &.MuiPaginationItem-firstLast": {
            color: theme.palette.primary.main,
            "& .MuiPaginationItem-icon": {
              fontWeight: 400,
            },
          },

          "&.Mui-disabled": {
            "& .MuiPaginationItem-icon": {
              color: theme.palette.disabled.light,
              borderColor: theme.palette.disabled.light,
            },
          },
        }),
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          "& .MuiTablePagination-input .MuiTablePagination-select": {
            height: "auto",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: "4px",
          bottom: "0px",
        },
        scroller: ({ theme }) => ({
          borderBottom: "1px solid",
          borderColor: theme.palette.secondary.dark,
        }),
      },
    },
    MuiTab: {
      defaultProps: {
        iconPosition: "end",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          height: "content-fit",
          padding: "0.75rem 1rem",
          fontSize: "1rem",
          lineHeight: "1.25rem",
          letterSpacing: "0.02188rem",
          fontWeight: 400,
          color: theme.palette.black.darker,

          "&.Mui-selected": {
            color: theme.palette.black.darker,
            fontWeight: 600,
            letterSpacing: "0.01313rem",
          },
        }),
        labelIcon: () => ({
          minHeight: "1rem",
          "& .MuiChip-root": {
            marginBottom: 0,
            padding: "0.125rem 0.3125rem",
            borderRadius: "10rem",
            lineHeight: "0.875rem",
            textAlign: "center",
            fontSize: "12px",
          },
        }),
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          "& > .MuiBox-root": {
            position: "absolute",
            width: "content-fit",
            maxWidth: "80%",
            minWidth: "20rem",
            backgroundColor: "white",
            border: "none",
            borderRadius: "0.5rem",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "1.25rem 2rem",

            "& > .MuiIconButton-root": {
              position: "absolute",
              right: "2rem",
              top: "1.25rem",
            },
          },
        },
        backdrop: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(2px)",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiDialog-paper": {
            backgroundColor: theme.palette.white.main,
            borderRadius: "0.5rem",

            "& > .MuiIconButton-root": {
              position: "absolute",
              right: "1.25rem",
              top: "1.25rem",
            },
          },
          "& .MuiBackdrop-root.MuiModal-backdrop": {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(2px)",
          },
        }),
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiLink-root": {
            color: theme.palette.black.darker,
            marginBottom: "1rem",
            fontSize: "1rem",
            display: "block",

            "&:hover, &.active": {
              "& .MuiTypography-root": {
                fontWeight: 500,
                color: theme.palette.black.darker,
              },
              "& .MuiIconButton-root": {
                color: theme.palette.primary.main,
              },
            },
          },
        }),
      },
    },
    MuiMenu: {
      defaultProps: {
        disableScrollLock: true,
      },
      styleOverrides: {
        root: {
          "& .MuiModal-backdrop": {
            backgroundColor: "rgba(0, 0, 0, 0)",
            backdropFilter: "none",
          },
        },
      },
    },
  }, // END components
}); // END createTheme

theme.typography.display1 = {
  fontFamily:
    'BureauGrotCondensed, "Sergoe UI", "Helvetica Neue", Arial, sans-serif',
  fontSize: "3rem",
  lineHeight: "3.25rem",
  fontWeight: 500,

  [theme.breakpoints.up("md")]: {
    fontSize: "3.75rem",
    lineHeight: "3.75rem",
  },
};

theme.typography.display2 = {
  fontFamily:
    'BureauGrotCondensed, "Sergoe UI", "Helvetica Neue", Arial, sans-serif',
  fontSize: "2.25rem",
  lineHeight: "2.5rem",
  fontWeight: 500,

  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
    lineHeight: "3.125rem",
  },
};

theme.typography.h1 = {
  fontSize: "1.625rem",
  lineHeight: "1.875rem",
  letterSpacing: "-0.02438rem",
  fontWeight: 500,

  [theme.breakpoints.up("md")]: {
    fontSize: "2.125rem",
    lineHeight: "2.5rem",
    letterSpacing: "-0.01063rem",
  },
};

theme.typography.h2 = {
  fontSize: "1.375rem",
  lineHeight: "1.625rem",
  letterSpacing: "-0.00688rem",
  fontWeight: 500,

  [theme.breakpoints.up("md")]: {
    fontSize: "1.75rem",
    lineHeight: "2rem",
    letterSpacing: "unset",
  },
};

theme.typography.h3 = {
  fontSize: "1.25rem",
  lineHeight: "1.5rem",
  letterSpacing: "-0.0125rem",
  fontWeight: 500,

  [theme.breakpoints.up("md")]: {
    fontSize: "1.375rem",
    lineHeight: "1.625rem",
    letterSpacing: "-0.00688rem",
  },
};

theme.typography.h4 = {
  fontSize: "1.125rem",
  lineHeight: "1.375rem",
  letterSpacing: "-0.00563rem",
  fontWeight: 500,
};

theme.typography.text1 = {
  fontSize: "1rem",
  lineHeight: "1.5rem",
  letterSpacing: "0.02rem",
  fontWeight: 400,

  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
    lineHeight: "1.625rem",
  },
};

theme.typography.text1Bold = {
  fontSize: "1rem",
  lineHeight: "1.5rem",
  letterSpacing: "0.01rem",
  fontWeight: 500,

  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
    lineHeight: "1.625rem",
    letterSpacing: "unset",
  },
};

theme.typography.text2 = {
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  letterSpacing: "0.02188rem",
  fontWeight: 400,

  [theme.breakpoints.up("md")]: {
    lineHeight: "1.375rem",
    letterSpacing: "0.0245rem",
  },
};

theme.typography.text2Bold = {
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  letterSpacing: "0.01313rem",
  fontWeight: 500,

  [theme.breakpoints.up("md")]: {
    lineHeight: "1.375rem",
  },
};

theme.typography.button = {
  fontSize: "1rem",
  lineHeight: "1rem",
  letterSpacing: "0.005rem",
  fontWeight: 500,
};

export default theme;
