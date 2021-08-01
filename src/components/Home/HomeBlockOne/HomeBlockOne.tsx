import React from 'react';
import Image from 'next/image'
import { HomeBlockOneWrapper } from './HomeBlockOneStyles';

const HomeBlockOne: React.FC = () => {
    return (
        <HomeBlockOneWrapper>
            <Image src="https://images.pexels.com/photos/4932184/pexels-photo-4932184.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" layout="fill" alt="teste" />
            <div className="texts-wrapper">
                <h1>Começa com você</h1>
                <p>Sustentabilidade</p>
            </div>
        </HomeBlockOneWrapper>
    )
}

export default HomeBlockOne;