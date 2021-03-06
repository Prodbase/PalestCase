import React from 'react';
import Image from 'next/image'
import { HomeBlockFourWrapper } from './HomeBlockFourStyles';

const HomeBlockFour: React.FC = () => {

  return (
    <HomeBlockFourWrapper >
      <div className="about">
        <div className="banner">
          <Image src="https://images.pexels.com/photos/4755029/pexels-photo-4755029.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" layout="fill" alt="banner-about" />
          <div className="texts">
            <h1>Nossa organização</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="texts-about">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet.</h1>
          <p>Euismod elementum nisi quis eleifend quam. Vitae ultricies leo integer malesuada. Eu augue ut lectus arcu bibendum at. Non curabitur gravida arcu ac tortor dignissim. Fermentum et sollicitudin ac orci. Volutpat est velit egestas dui id ornare arcu odio ut. Donec ultrices tincidunt arcu non sodales neque. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Elementum sagittis vitae et leo duis. Ut placerat orci nulla pellentesque dignissim enim. Nisl tincidunt eget nullam non nisi est sit amet. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Senectus et netus et malesuada fames ac turpis egestas sed. Dolor sed viverra ipsum nunc aliquet bibendum. Fermentum et sollicitudin ac orci phasellus egestas tellus. Malesuada fames ac turpis egestas. Non consectetur a erat nam. Amet purus gravida quis blandit turpis cursus in hac. Ut consequat semper viverra nam libero. Quis eleifend quam adipiscing vitae proin. Ultrices dui sapien eget mi proin sed.</p>
          <br />
          <p>Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. At urna condimentum mattis pellentesque id nibh tortor id aliquet. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Pretium lectus quam id leo in vitae. Dictum fusce ut placerat orci nulla. Integer vitae justo eget magna fermentum iaculis. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Iaculis nunc sed augue lacus viverra. Facilisi morbi tempus iaculis urna id. Massa eget egestas purus viverra accumsan in. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Egestas purus viverra accumsan in nisl nisi scelerisque. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Nunc sed blandit libero volutpat.</p>
          <br />
          <p>Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Lorem sed risus ultricies tristique nulla aliquet enim. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Tortor id aliquet lectus proin nibh nisl condimentum. In hendrerit gravida rutrum quisque. Neque gravida in fermentum et sollicitudin ac orci. Adipiscing elit ut aliquam purus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Tincidunt nunc pulvinar sapien et. Amet tellus cras adipiscing enim. In hac habitasse platea dictumst quisque sagittis purus sit. In dictum non consectetur a erat nam. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Sociis natoque penatibus et magnis dis. Scelerisque in dictum non consectetur a erat nam. Justo laoreet sit amet cursus sit amet. Non nisi est sit amet facilisis. Lectus sit amet est placerat in egestas erat. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel.</p>
          <br />
          <p>Arcu ac tortor dignissim convallis aenean. Aliquam sem et tortor consequat id. Cras sed felis eget velit aliquet sagittis. Mauris a diam maecenas sed enim. Ipsum consequat nisl vel pretium lectus quam id leo in. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Adipiscing diam donec adipiscing tristique. Tortor vitae purus faucibus ornare. Auctor eu augue ut lectus arcu bibendum at varius. Morbi enim nunc faucibus a. Donec massa sapien faucibus et molestie ac. Ultrices gravida dictum fusce ut placerat orci nulla. Eget mi proin sed libero enim sed faucibus turpis in. Eget velit aliquet sagittis id consectetur purus ut faucibus. Consequat interdum varius sit amet. Sagittis orci a scelerisque purus semper. Tristique nulla aliquet enim tortor. Risus quis varius quam quisque id. Ullamcorper sit amet risus nullam eget. Semper viverra nam libero justo laoreet sit amet.</p>
        </div>
      </div>
      <hr />
      <div className="newsletter">
        <h1>Assinar Newsletter</h1>
        <p>Inscreva-se com seu endereço de e-mail para receber novidades e atualizações.</p>
        <div>
          <input type="text" placeholder="Seu E-mail" />
          <button>Enviar</button>
        </div>
      </div>
    </HomeBlockFourWrapper>
  )
}

export default HomeBlockFour;