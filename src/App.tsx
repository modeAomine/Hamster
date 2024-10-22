import React, { useEffect, useState } from "react";
import Header from './components/Header/header';
import Buttons from "./components/Buttons/Buttons";
import Profile from "./components/Profile/Profile";
import Bets from "./components/Bets/Bets";
import Graph from "./components/Graph/Graph";
import './app.css';

const App: React.FC = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [user, setUser] = useState<TelegramUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [multiplier, setMultiplier] = useState(1);

    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
            const telegramUser = window.Telegram.WebApp.initDataUnsafe.user;
            setUser(telegramUser);
        }

        setTimeout(() => {
            setIsLoading(false);
            setMultiplier(2.5);
        }, 2000);
    }, []);

    const handleProfileClose = () => {
        console.log("Вырубаем шарманку");
        setIsProfileOpen(false);
    };

    return (
        <div className="app-container">
            <Header onSettingsClick={() => setIsProfileOpen(true)} user={user} />
            {isProfileOpen && <Profile onClose={handleProfileClose} user={user} />}
            <Graph isLoading={isLoading} multiplier={multiplier} />
            <Buttons />
            <Bets />
        </div>
    );
};

export default App;
