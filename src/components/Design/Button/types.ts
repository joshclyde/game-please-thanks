export interface Style {
  classes: {
    container: string;
  };
}

export interface ButtonProps {
  children: string;
}

export interface Props extends Style, ButtonProps {}
