import React, { useEffect, useState } from "react";
import Header from './components/Header/header';
import Buttons from "./components/Buttons/Buttons";
import Profile from "./components/Profile/Profile";
import Bets from "./components/Bets/Bets";
import Graph from "./components/Graph/Graph";
import { auth, get_user } from "./api/api";
import './app.css';

const App: React.FC = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [user, setUser] = useState<TelegramUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [multiplier, setMultiplier] = useState(1);

    useEffect(() => {
        const fetchUserData = async () => {
            const authToken = localStorage.getItem('auth_token');

            try {
                if (authToken) {
                    const userResponse = await get_user(authToken);
                    if (userResponse) {
                        setUser(userResponse);
                        console.log(userResponse);
                    } else {
                        localStorage.removeItem('auth_token');
                        await authenticateUser();
                    }
                } else {
                    await authenticateUser();
                }
            } catch (error) {
                console.error('Ошибка получения данных пользователя: ', error);
            } finally {
                setIsLoading(false);
            }
        };

        const authenticateUser = async () => {
            try {
                if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initData) {
                    const userData = window.Telegram.WebApp.initData;
                    const response = await auth(userData);
                    console.log(response);

                    if (response.auth_token) {
                        const authToken = response.auth_token;
                        localStorage.setItem('auth_token', authToken);

                        const userResponse = await get_user(authToken);
                        if (userResponse) {
                            setUser(userResponse);
                        }
                    }
                }
            } catch (error) {
                console.error('Ошибка авторизации пользователя: ', error);
            }
        };

        fetchUserData();

        setTimeout(() => {
            setMultiplier(2.5);
        }, 2000);
    }, []);

    const handleProfileClose = () => {
        console.log("Вырубаем шарманку");
        setIsProfileOpen(false);
    };

    return (
        <div className="app-container">
            <Header onSettingsClick={() => setIsProfileOpen(true)} user={user} token={localStorage.getItem('auth_token')}/>
            {isProfileOpen && <Profile onClose={handleProfileClose} user={user} />}
            <Graph isLoading={isLoading} multiplier={multiplier} />
            <Buttons />
            <Bets />
        </div>
    );
};

export default App;