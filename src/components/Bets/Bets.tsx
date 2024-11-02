import React, { useState, useEffect } from "react";
import './ui/Bets.css'
import { BetsProps } from "../../types/BetsProps";

const Bets: React.FC = () => {
    const [bets, setBets] = useState<BetsProps[]>([]);

    // useEffect(() => {
    //     const exampleBets: BetsProps[] = [
    //         {   id: 1, 
    //             user: 'Myles', 
    //             amount: 3100,
    //             currency: '₽' 
    //         },
    //         { id: 2, user: 'Finnick', amount: 4000, currency: '₽' },
    //         { id: 3, user: 'Myron', amount: 50, currency: '₽' },
    //         { id: 4, user: 'Gader', amount: 3650, currency: '₽' },
    //         { id: 5, user: 'Cyran', amount: 1100, currency: '₽' },
    //         { id: 6, user: 'Eastern', amount: 5050, currency: '₽' },
    //     ];
    //     setBets(exampleBets);
    // }, []);
    return (
        <div className="bets-list">
            <h2 className="h2-style">Всего ставок: {bets.length}</h2>
            <div className="bets-header">
                <button>Все</button>
                <button>Мои</button>
            </div>
            <ul className="padding-ul__auto">
                {/* {bets.map((bet) => (
                    <li key={bet.id} className="bet-item__bottom">
                        <span>{bet.user}</span>
                        <span>{bet.amount} {bet.currency}</span>
                    </li>
                ))} */}
            </ul>
        </div>
    );
};


export default Bets;