import Sidebar from './sidebar'; // Sidebar bileşenini içe aktarın
import { db } from './firebase'; // Firebase db'yi içe aktarın
import Navbar from './navbar';
import Content from './content';
import './globals.css'; // Global stilleri içe aktarın


export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gradient-to-t from-purple-100 to-blue-100 shadow-sm">
        <Navbar />
        <div className="flex h-screen">
          <Sidebar />
          <Content />
          
        </div>
      </body>
    </html>
  );
}
