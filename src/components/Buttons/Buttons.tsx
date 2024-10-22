import React, { useState } from "react";
import './ui/buttons.css';

const Buttons: React.FC = () => {
    const [withdrawValueOne, setWithdrawValueOne] = useState<string>('X 2.50');
    const [withdrawValueTwo, setWithdrawValueTwo] = useState<string>('X 2.50');
    const [betOne, setBetOne] = useState<string>('50');
    const [betTwo, setBetTwo] = useState<string>('50');

    const handleIncreaseOne = () => setBetOne((parseFloat(betOne) + 50).toString());
    const handleDecreaseOne = () => setBetOne((Math.max(parseFloat(betOne) - 50, 0)).toString());
    const handlePresetOne = (value: number) => setBetOne((parseFloat(betOne) + value).toString());

    const handleBetChangeOne = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputBet = event.target.value;
        setBetOne(inputBet);
    };

    const handleIncreaseTwo = () => setBetTwo((parseFloat(betTwo) + 50).toString());
    const handleDecreaseTwo = () => setBetTwo((Math.max(parseFloat(betTwo) - 50, 0)).toString());
    const handlePresetTwo = (value: number) => setBetTwo((parseFloat(betTwo) + value).toString());

    const handleBetChangeTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputBet = event.target.value;
        setBetTwo(inputBet);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.currentTarget.blur();
        }
    };

    const handleWithdrawChangeOne = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (inputValue.startsWith('X ')) {
            setWithdrawValueOne(inputValue);
        } else {
            setWithdrawValueOne(`X ${inputValue}`);
        }
    };

    const handleWithdrawChangeTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (inputValue.startsWith('X ')) {
            setWithdrawValueTwo(inputValue);
        } else {
            setWithdrawValueTwo(`X ${inputValue}`);
        }
    };

    return (
        <div className="buttons__main">
            <div className="buttons__one">
                <div className="buttons__top__content">
                    <div className="checkbox-group">
                        <label>
                            <input type="checkbox" />
                            Автоставка
                        </label>
                        <label>
                            <input type="checkbox" />
                            Автовывод
                        </label>
                        <input
                            type="text"
                            value={withdrawValueOne}
                            onChange={handleWithdrawChangeOne}
                            className="input__withdraw"
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                </div>

                <div className="buttons__bottom__content">
                    <button className="bet-button">Ставка</button>

                    <div className="increase-panel">
                        <div className="bet-control">
                            <button className="bet-decrease" onClick={handleDecreaseOne}>-</button>

                            <input
                                type="number"
                                value={betOne}
                                onChange={handleBetChangeOne}
                                className="bet-display"
                                min="0"
                                onKeyPress={handleKeyPress}
                                placeholder="0"
                            />

                            <button className="bet-increase" onClick={handleIncreaseOne}>+</button>
                        </div>

                        <div className="preset-buttons">
                            <button onClick={() => handlePresetOne(100)}>100</button>
                            <button onClick={() => handlePresetOne(200)}>200</button>
                            <button onClick={() => handlePresetOne(500)}>500</button>
                            <button onClick={() => handlePresetOne(1000)}>1000</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="buttons__two">
                <div className="buttons__top__content">
                    <div className="checkbox-group">
                        <label>
                            <input type="checkbox" />
                            Автоставка
                        </label>
                        <label>
                            <input type="checkbox" />
                            Автовывод
                        </label>
                        <input
                            type="text"
                            value={withdrawValueTwo}
                            onChange={handleWithdrawChangeTwo}
                            className="input__withdraw"
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                </div>

                <div className="buttons__bottom__content">
                    <button className="bet-button">Ставка</button>

                    <div className="increase-panel">
                        <div className="bet-control">
                            <button className="bet-decrease" onClick={handleDecreaseTwo}>-</button>

                            <input
                                type="number"
                                value={betTwo}
                                onChange={handleBetChangeTwo}
                                className="bet-display"
                                min="0"
                                onKeyPress={handleKeyPress}
                                placeholder="0"
                            />

                            <button className="bet-increase" onClick={handleIncreaseTwo}>+</button>
                        </div>

                        <div className="preset-buttons">
                            <button onClick={() => handlePresetTwo(100)}>100</button>
                            <button onClick={() => handlePresetTwo(200)}>200</button>
                            <button onClick={() => handlePresetTwo(500)}>500</button>
                            <button onClick={() => handlePresetTwo(1000)}>1000</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buttons;