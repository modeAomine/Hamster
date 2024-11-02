import React, { useState, useEffect } from "react";
import { IoIosSettings } from "react-icons/io";
import { FiMusic, FiVolume2, FiActivity } from "react-icons/fi";
import { RiWallet3Line, RiQuestionAnswerLine, RiAccountBoxLine } from "react-icons/ri";
import { AiOutlineHistory, AiOutlinePercentage } from "react-icons/ai";
import { GiRuleBook, GiPayMoney, GiTakeMyMoney } from "react-icons/gi";
import './ui/headers.css';
import { HeaderProps } from "../../types/HeaderProps";
import InfoModal from "../InfoModal/InfoModal";

const Header: React.FC<HeaderProps> = ({ onSettingsClick, user, token }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [musicEnabled, setMusicEnabled] = useState(true);
    const [animationEnabled, setAnimationEnabled] = useState(true);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    useEffect(() => {
        const savedSoundEnabled = localStorage.getItem('soundEnabled');
        const savedMusicEnabled = localStorage.getItem('musicEnabled');
        const savedAnimationEnabled = localStorage.getItem('animationEnabled');

        if (savedSoundEnabled !== null) setSoundEnabled(savedSoundEnabled === 'true');
        if (savedMusicEnabled !== null) setMusicEnabled(savedMusicEnabled === 'true');
        if (savedAnimationEnabled !== null) setAnimationEnabled(savedAnimationEnabled === 'true');
    }, []);

    useEffect(() => {
        localStorage.setItem('soundEnabled', soundEnabled.toString());
    }, [soundEnabled]);

    useEffect(() => {
        localStorage.setItem('musicEnabled', musicEnabled.toString());
    }, [musicEnabled]);

    useEffect(() => {
        localStorage.setItem('animationEnabled', animationEnabled.toString());
    }, [animationEnabled]);

    const handleSettingsClick = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleSwitchClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    const openModal = (item: string) => {
        setSelectedItem(item);
        setModalOpen(true);
        setDropdownOpen(false);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedItem(null);
    };

    return (
        <div className="header__main">
            <div className="header__balance">{user ? `${user.balance}р`: "0"}</div>
            <div className="header__name__app">Lucky Hamster</div>
            <div className="header__settings_user" onClick={handleSettingsClick}>
                <IoIosSettings size={24} />
                {isDropdownOpen && (
                    <div className="settings-dropdown" onClick={handleSwitchClick}>
                        {/* Переключатели */}
                        <div className="dropdown-section">
                            <div className="switcher">
                                <div className="flex__group">
                                    <FiVolume2 size={18} />
                                    <span>Звук</span>
                                </div>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={soundEnabled}
                                        onChange={() => setSoundEnabled(!soundEnabled)}
                                    />
                                    <span className="slider"></span>
                                </label>
                            </div>
                            <div className="switcher">
                                <div className="flex__group">
                                    <FiMusic size={18} />
                                    <span>Музыка</span>
                                </div>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={musicEnabled}
                                        onChange={() => setMusicEnabled(!musicEnabled)}
                                    />
                                    <span className="slider"></span>
                                </label>
                            </div>
                            <div className="switcher">
                                <div className="flex__group">
                                    <FiActivity size={18} />
                                    <span>Анимации</span>
                                </div>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={animationEnabled}
                                        onChange={() => setAnimationEnabled(!animationEnabled)}
                                    />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        </div>
                        {/* Дополнительные пункты */}
                        <div className="dropdown-section">
                            <div className="dropdown-item" onClick={() => openModal("provablyFair")}>
                                <AiOutlinePercentage size={18} />
                                <span>PROVABLY FAIR</span>
                            </div>
                            <div className="dropdown-item" onClick={() => openModal("rules")}>
                                <GiRuleBook size={18} />
                                <span>Правила игры</span>
                            </div>
                            <div className="dropdown-item" onClick={() => openModal("history")}>
                                <AiOutlineHistory size={18} />
                                <span>История ставок</span>
                            </div>
                            <div className="dropdown-item" onClick={() => openModal("limits")}>
                                <RiWallet3Line size={18} />
                                <span>Лимиты игры</span>
                            </div>
                        </div>
                        <div className="dropdown-section">
                            <div className="dropdown-item" onClick={() => openModal("replenish")}>
                                <GiPayMoney size={18} />
                                <span>Пополнить</span>
                            </div>
                            <div className="dropdown-item" onClick={() => openModal("bring_out")}>
                                <GiTakeMyMoney size={18} />
                                <span>Вывести средства</span>
                            </div>
                        </div>
                        <div className="dropdown-section">
                            <div className="dropdown-item" onClick={onSettingsClick}>
                                <RiAccountBoxLine size={18} />
                                <span>Личный кабинет</span>
                            </div>
                            <div className="dropdown-item" onClick={() => openModal("support")}>
                                <RiQuestionAnswerLine size={18} />
                                <span>Онлайн помощь</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <InfoModal isOpen={isModalOpen} onClose={closeModal} selectedItem={selectedItem} token={token}/>
        </div>
    );
};

export default Header;
