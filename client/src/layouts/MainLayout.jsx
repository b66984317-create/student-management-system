import Navbar from '../components/Navbar';

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <header className="main-header">
        <h2>Student Management System</h2>
        <Navbar />
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="main-footer">
        <p>&copy; 2026 Student Management System</p>
      </footer>
    </div>
  );
}

export default MainLayout;