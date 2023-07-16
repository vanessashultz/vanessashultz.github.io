import { Footer } from '../footer';
import { Nav } from '../nav';

interface LayoutProps {
  children: any;
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="bg-offWhite pb-4 dark:bg-darkMode-gray-primary">{children}</main>
      <Footer />
    </>
  );
};
