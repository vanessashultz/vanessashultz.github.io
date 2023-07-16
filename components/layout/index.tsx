import { Nav } from '../nav';

interface LayoutProps {
  children: any;
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="bg-offWhite dark:bg-darkMode-gray-primary">{children}</main>
    </>
  );
};
