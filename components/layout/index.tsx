import { Nav } from '../nav';
import { ThemeToggle } from '../themeToggle';

interface LayoutProps {
  handleThemeSwitch: () => void;
  children: any;
}
export const Layout: React.FC<LayoutProps> = ({ handleThemeSwitch, children }) => {
  return (
    <>
      <Nav handleThemeSwitch={handleThemeSwitch} />
      <main className="bg-offWhite dark:bg-darkMode-gray-primary">{children}</main>
    </>
  );
};
