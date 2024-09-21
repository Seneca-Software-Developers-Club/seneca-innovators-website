export interface INavLink {
  href: string;
  label: string;
  pathname: string;
  mobile?: boolean;
  onClick?: () => void;
}
