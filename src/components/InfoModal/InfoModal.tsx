import React, { useState } from "react";
import { RiQuestionAnswerLine, RiWallet3Line } from "react-icons/ri";
import { GiRuleBook, GiPayMoney, GiTakeMyMoney } from "react-icons/gi";
import { AiOutlinePercentage, AiOutlineHistory } from "react-icons/ai";
import { InfoModalProps } from "../../types/InfoModalProps";
import './ui/InfoModal.css';
import btcIcon from '../../static/Bitcoin.png';
import ethIcon from '../../static/Etherium.png';

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, selectedItem }) => {
    const [visibleCount, setVisibleCount] = useState(5);
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [amount, setAmount] = useState('');
    const [selectedCrypto, setSelectedCrypto] = useState("Bitcoin");

    const paymentMethods = [
        { name: 'Bitcoin', icon: btcIcon },
        { name: 'Ethereum', icon: ethIcon }
    ];

    const userAccounts = ['BTC Wallet', 'ETH Wallet'];

    const handleSelectCrypto = (crypto: string) => {
        setSelectedCrypto(crypto);
    };

    if (!isOpen) return null;

    const renderContent = () => {
        switch (selectedItem) {
            case "provablyFair":
                return (
                    <>
                        <div className="header">
                            <AiOutlinePercentage className="icon" />
                            <span>PROVABLY FAIR</span>
                        </div>
                        <div>Здесь информация о PROVABLY FAIR настройках.</div>
                    </>
                );
            case "rules":
                return (
                    <>
                        <div className="header">
                            <GiRuleBook className="icon" />
                            <span>Правила игры</span>
                        </div>
                        <div className="content">
                            Однако не забывайте, что у вас есть ограничения по времени. Вам нужно вывести средства до того, как улетит Хомячек, иначе вы потеряете свою ставку. Игра в Lucky Hamster — азарт в чистом виде! Здесь вы рискуете и побеждаете. Все зависит от вас!
                            <br /><br />
                            <strong>Как играть и какие правила?</strong>
                            <br />
                            Чтобы сделать ставку, нужно выбрать желаемую сумму и нажать на кнопку «Ставка».
                            При этом нет нужды ограничивать себя только одной ставкой за раз. Вы можете делать две ставки одновременно, используя как левую, так и правую панель ставки.
                            Чтобы вывести выигрыш, нужно нажать кнопку «Вывод». Ваш выигрыш складывается из совокупности вашей ставки, умноженной на множитель кэшаута.
                            Если не сделать Вывод до того, как Счастливчик Джо улетит, то ставка будет потеряна.
                            <br /><br />
                            <strong>Автоставка и Автовывод</strong>
                            <br />
                            Автоматическую Ставку можно активировать на панели любой ставки, если поставить галочку в строчке «Автоставка». В таком случае ставки делаются автоматически. Тем не менее чтобы вывести выигрыш все равно необходимо нажимать кнопку «Вывод» для каждого раунда.
                            Если желаете полностью автоматизировать игру, то имеется возможность и настройки автоматического вывода выигрыша. Для этого необходимо активировать на панели ставки «Автовывод». Тогда средства будут автоматически выводиться при достижении заданного вами коэффициента.
                            <br /><br />
                            <strong>Лайв Ставки и Статистика</strong>
                            <br />
                            Слева (если использовать мобильный интерфейс, то под панелью ставок) находится панель «Лайв Ставки». На ней отображаются ставки, которые были сделаны в текущем раунде.
                            Панели «Мои ставки» содержит информацию о сделанных ставках и выводе средств за все время игры.
                            Панель «Топ» содержит игровую статистику. Тут можно изучить выигрыши других игроков как по сумме, так и по коэффициенту обналичивания. Так можно увидеть самые большие коэффициенты в раунде.
                            <br /><br />
                            <strong>Работа с техническими проблемами</strong>
                            <br />
                            Оператор не несет ответственности за потерю ставки по причине разрыва интернет-соединения. Рекомендуем играть при наличии стабильного соединения.
                            Если же неисправность возникнет на игровом оборудовании либо игровом программном обеспечении, то все ставки и выплаты будут аннулированы. При это ставки возмещаются пострадавшим игрокам в полном объеме в течение 1 часа.
                        </div>
                    </>
                );
            case "history":
                const initialBets = [
                    {
                        id: 1,
                        gameKey: "game123",
                        amount: 100,
                        coefficient: 2.5,
                        profit: 150, // положительное значение для выигрыша
                        status: "win", // "win" или "lose"
                    },
                    {
                        id: 2,
                        gameKey: "game456",
                        amount: 200,
                        coefficient: 1.8,
                        profit: -200, // отрицательное значение для проигрыша
                        status: "lose",
                    },
                    {
                        id: 3,
                        gameKey: "game789",
                        amount: 50,
                        coefficient: 3.0,
                        profit: 150,
                        status: "win",
                    },
                    {
                        id: 4,
                        gameKey: "game012",
                        amount: 300,
                        coefficient: 1.5,
                        profit: -300,
                        status: "lose",
                    },
                    {
                        id: 5,
                        gameKey: "game345",
                        amount: 150,
                        coefficient: 2.0,
                        profit: 150,
                        status: "win",
                    },
                    {
                        id: 6,
                        gameKey: "game678",
                        amount: 100,
                        coefficient: 2.2,
                        profit: -100,
                        status: "lose",
                    },
                ];

                const handleShowMore = () => {
                    setVisibleCount((prevCount) => prevCount + 5);
                };

                return (
                    <>
                        <div className="header">
                            <AiOutlineHistory className="icon" />
                            <span>История ставок</span>
                        </div>
                        <div className="history__store">
                            {initialBets.length === 0 ? (
                                <div className="no-bets">Нет ставок для отображения.</div>
                            ) : (
                                initialBets.slice(0, visibleCount).map((bet) => (
                                    <div
                                        key={bet.id}
                                        className={`bet-item ${bet.status === "win" ? "win" : "lose"}`}
                                    >
                                        <div className="bet-info">
                                            <span className="amount">{bet.amount}₽</span>
                                            <div className="results">
                                                <span className="coefficient">{bet.coefficient}</span>
                                                <span className="profit">
                                                    {bet.status === "win" ? bet.profit : Math.abs(bet.profit)}₽
                                                </span>
                                            </div>
                                        </div>
                                        <div className="game-key">{bet.gameKey}</div>
                                    </div>
                                ))
                            )}
                            {initialBets.length > visibleCount && (
                                <div className="scroll-indicator" onClick={handleShowMore}>
                                    Показать больше ставок...
                                </div>
                            )}
                        </div>
                    </>
                );
            case "limits":
                return (
                    <>
                        <div className="header">
                            <RiWallet3Line className="icon" />
                            <span>Лимиты игры</span>
                        </div>
                        <div className="limit__game">
                            <div className="min">
                                Минимальная ставка
                                <span>20.00₽</span>
                            </div>
                            <div className="max">
                                Максимальная ставка
                                <span>49999.00₽</span>
                            </div>
                        </div>
                    </>
                );
            case "support":
                return (
                    <>
                        <div className="header">
                            <RiQuestionAnswerLine size={18} className="icon" />
                            <span>Партнерам</span>
                        </div>
                        <div className="telegram">По всем вопросам писать в <strong>Telegram</strong>: @username</div>
                    </>
                );
            case "replenish":
                const handleReplenish = () => {
                    const telegramWalletLink = `https://t.me/your_telegram_bot?start=replenish&currency=${selectedCurrency}&amount=${amount}`;
                    window.open(telegramWalletLink, "_blank");
                };

                return (
                    <>
                        <div className="header">
                            <GiPayMoney size={18} className="icon" />
                            <span>Пополнить</span>
                        </div>
                        <div className="replenish__pay__container">
                            <div className="payment-methods">
                                {paymentMethods.map((method, index) => (
                                    <div
                                        key={index}
                                        className={`item__pay ${selectedCurrency === method.name ? 'selected' : ''}`}
                                        onClick={() => setSelectedCurrency(method.name)}
                                    >
                                        <img src={method.icon} alt={method.name} className="crypto-icon" />
                                        <span>{method.name}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="amount__input__container">
                                <div className="amount__input">
                                    <div className="currency-display">
                                        {selectedCurrency && (
                                            <img src={paymentMethods.find(method => method.name === selectedCurrency)?.icon} alt={selectedCurrency} className="crypto-icon" />
                                        )}
                                    </div>
                                    <input
                                        type="number"
                                        placeholder="Введите сумму"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        min="0"
                                        maxLength={6}
                                        required
                                    />
                                </div>
                                <button className="replenish-button" onClick={handleReplenish} disabled={!selectedCurrency || !amount}>
                                    Пополнить
                                </button>
                            </div>
                        </div>
                    </>
                );
            case "bring_out":
                return (
                    <>
                        <div className="bring-out">
                            <div className="header">
                                <GiTakeMyMoney size={18} className="icon" />
                                <span>Вывести</span>
                            </div>
                            <div className="bring-out__pay__container">
                                <div className="crypto-selection">
                                    {paymentMethods.map((crypto) => (
                                        <button
                                            key={crypto.name}
                                            className={`crypto-option ${selectedCrypto === crypto.name ? "selected" : ""}`}
                                            onClick={() => handleSelectCrypto(crypto.name)}
                                        >
                                            <img src={crypto.icon} alt={crypto.name} className="crypto-icon" />
                                            {crypto.name}
                                        </button>
                                    ))}
                                </div>
                                <div className="bring-out__amount">
                                    <label htmlFor="amount">Введите сумму</label>
                                    <div className="amount__input">
                                        <div className="currency-display">
                                            <img
                                                src={paymentMethods.find(c => c.name === selectedCrypto)?.icon}
                                                alt={selectedCrypto}
                                                className="crypto-icon"
                                            />
                                        </div>
                                        <input
                                            className="amount__input__bring-out"
                                            type="number"
                                            id="amount"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            placeholder="Введите сумму"
                                        />
                                    </div>
                                    <div className="amount-suggestions">
                                        {[1000, 2000, 5000].map((sum) => (
                                            <button key={sum} onClick={() => setAmount(sum.toString())}>
                                                {sum} ₽
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="bring-out__details">
                                    <div className="user-accounts">
                                        {userAccounts.length > 0 ? (
                                            <div className="account">
                                                {userAccounts.map((account: string) => (
                                                    <div key={account} className="account-item">
                                                        {account}
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <span>Добавить реквизит</span>
                                        )}
                                    </div>

                                    <div className="payment-info">
                                        <div className="payment-row">
                                            <span>К оплате:</span>
                                            <span>0.01 BTC</span>
                                        </div>
                                        <div className="payment-row">
                                            <span>Комиссия:</span>
                                            <span>0.001 BTC</span>
                                        </div>
                                        <div className="payment-total">
                                            <span>Итого:</span>
                                            <span>0.011 BTC</span>
                                        </div>
                                    </div>

                                    <button className="submit-button">Вывести</button>
                                </div>
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };
    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={onClose}>&times;</span>
                    {renderContent()}
                </div>
            </div>
        </>
    );
}

export default InfoModal;