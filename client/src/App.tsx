import LoginPage from './pages/LoginPage.js';

// Si el JSX no funciona en este archivo, intenta instalar:
// npm install --save-dev @types/react @types/react-dom

export default function App() {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg')",
      }}
    >
      <h1 className="text-white text-4xl font-bold text-center pt-10">
        Hello World!
      </h1>

      <LoginPage />
    </div>
  );
}
