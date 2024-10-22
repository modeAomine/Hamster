import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import './ui/profile.css';
import { ProfileProps } from '../../types/ProfileProps';
import btcIcon from '../../static/Bitcoin.png';
import ethIcon from '../../static/Etherium.png';


const Profile: React.FC<ProfileProps> = ({ onClose }) => {
    const paymentMethods = [
        { name: 'Bitcoin', icon: btcIcon },
        { name: 'Ethereum', icon: ethIcon }
    ];

    return (
        <div className="profile-overlay">
            <div className="profile-modal">
                <div className="header__modal__top">
                    <button className="close-button" onClick={onClose}>
                        <IoIosArrowBack size={24} />
                    </button>
                    <h2 className="title__modal">Личный кабинет</h2>
                </div>
                <div className="crypto-options">
                    <div className="tab-buttons">
                        <button className="active">КРИПТОВАЛЮТА</button>
                    </div>
                    <div className="payment-methods">
                        {paymentMethods.map(method => (
                            <div key={method.name} className="method">
                                <div className="wallet__jet-coin-content">
                                    <div className="img__pay">
                                        <img src={method.icon} alt={method.name} />
                                    </div>
                                    <div className="wallet__jet-coin-bottom">
                                        <div className="wallet__jet-coin-name">{method.name}</div>
                                        <div className="wallet__jet-coin-check">
                                            <div className="wallet__jet-coin-icon">
                                                <i className="fa-duotone fa-check" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <input
                        type="text"
                        className="card-number-input"
                        placeholder="Введите адрес кошелька"
                    />
                    <button className="save-button">Сохранить</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;