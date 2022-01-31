import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './cmps/layout/Navbar';
import Footer from './cmps/layout/Footer';
import Alert from './cmps/layout/Alert';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import UserDetails from './pages/UserDetails';
import { useState } from 'react';
function App() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        if (theme === 'dark') setTheme('cupcake');
        else setTheme('dark');
    };
    return (
        <GithubProvider>
            <AlertProvider>
                <Router>
                    <div
                        data-theme={theme}
                        className="flex flex-col justify-between h-screen bg-base-100"
                    >
                        <Navbar toggleTheme={toggleTheme} />
                        <main className="container  mx-auto px-3 pb-12">
                            <Alert />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/*" element={<NotFound />} />
                                <Route path="/about" element={<About />} />
                                <Route
                                    path="/user/:login"
                                    element={<UserDetails />}
                                />
                                <Route
                                    path="/notfound"
                                    element={<NotFound />}
                                />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </Router>
            </AlertProvider>
        </GithubProvider>
    );
}

export default App;
