import React from 'react';
import Image from 'next/image'
import { HomeBlockThreeWrapper } from './HomeBlockThreeStyles';

const HomeBlockThree: React.FC = () => {
    return (
        <HomeBlockThreeWrapper>
            <div className="sec-one">
                <div className="image-wrapper">
                    <Image src="https://images.pexels.com/photos/1587699/pexels-photo-1587699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" layout="fill" alt="home-image-three" />
                </div>
                <div className="texts">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quaerat!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fugiat dolores voluptates ad tempora possimus cumque odio ratione, officiis aspernatur delectus suscipit maiores qui provident neque expedita. Provident voluptates autem distinctio quisquam, aliquam ea eligendi sint quo, nam, hic accusamus maiores quam rem debitis dignissimos enim culpa omnis. Ullam cumque possimus ipsam soluta modi voluptas dignissimos porro ad laudantium ipsum? Voluptas veritatis accusamus deserunt id odit, quos officiis vero suscipit cum ipsa error amet cumque delectus? Placeat eaque amet labore dolores exercitationem expedita modi hic, ab quisquam nihil minus rerum esse, harum illo eum ut! Cupiditate aperiam tempora ducimus ipsa.</p>
                    <button>Quero Saber mais</button>
                </div>
            </div>
            <hr />
            <div className="sec-one">
                <div className="texts">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quaerat!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fugiat dolores voluptates ad tempora possimus cumque odio ratione, officiis aspernatur delectus suscipit maiores qui provident neque expedita. Provident voluptates autem distinctio quisquam, aliquam ea eligendi sint quo, nam, hic accusamus maiores quam rem debitis dignissimos enim culpa omnis. Ullam cumque possimus ipsam soluta modi voluptas dignissimos porro ad laudantium ipsum? Voluptas veritatis accusamus deserunt id odit, quos officiis vero suscipit cum ipsa error amet cumque delectus? Placeat eaque amet labore dolores exercitationem expedita modi hic, ab quisquam nihil minus rerum esse, harum illo eum ut! Cupiditate aperiam tempora ducimus ipsa.</p>
                    <button>Quero Saber mais</button>
                </div>
                <div className="image-wrapper">
                    <Image src="https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" layout="fill" alt="home-image-three" />
                </div>
            </div>
        </HomeBlockThreeWrapper>
    )
}

export default HomeBlockThree;