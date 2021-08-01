import React from 'react';
import Image from 'next/image'
import { HomeBlockTwoWrapper } from './HomeBlockTwoStyles';

const HomeBlockTwo: React.FC = () => {
    return (
        <HomeBlockTwoWrapper>
            <div className="intro-wrapper">
                <div>
                    <strong>Seja a mudança</strong>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero porro optio minus commodi praesentium voluptate nisi animi reiciendis ab exercitationem.</p>
                </div>
                <div>
                    <strong>Comece a mudança</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae esse doloribus fuga perspiciatis voluptas aliquid illum, ea similique ad officiis rerum omnis a tenetur quod.</p>
                </div>
            </div>
            <div className="intro-wrapper-2">
                <div className="img-wrapper">
                    <Image src="https://images.pexels.com/photos/2770933/pexels-photo-2770933.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" layout="fill" alt="home-image-two" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cum eveniet corporis libero sequi voluptates ut eius, eos hic molestias repudiandae cupiditate corrupti aspernatur non earum perferendis vero. Delectus, quas?</p>
            </div>
            <div className="intro-wrapper-3">
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere saepe ad cupiditate vel perferendis odit.</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid illum quas unde, cum, dicta veniam voluptatibus assumenda eveniet eum ipsam dolor eius ut nobis accusantium incidunt, perspiciatis libero error!</p>
            </div>
        </HomeBlockTwoWrapper>
    )
}

export default HomeBlockTwo;