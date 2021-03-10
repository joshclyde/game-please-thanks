export interface IconProps {
  className?: string;
  size?: "small" | "medium" | "large";
  color?: string;
  onClick?: () => void;
}

export const dimension = {
  small: `16`,
  medium: `24`,
  large: `36`,
};
