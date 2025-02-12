import {Navbar} from './components/Navbar';
import Section from './components/Section';
import './App.css';
import { useRef } from 'react';

export function App() {
  const hotRef = useRef(null);
  const juicyRef = useRef(null);
  const cozyRef = useRef(null);

  return (
    <>
      <Navbar hotRef={hotRef} juicyRef={juicyRef} cozyRef={cozyRef} />

      {/* Hot Section */}
      <Section
        title="Hot"
        description1="Hot freshly ground black coffee or a cup of exquisite tea?"
        description2="We give you that perfect cup every time."
        menuItems={[
          { name: 'Mocha Latte', price: 7.5 },
          { name: 'Caffe Formaggio', price: 5.0 },
          { name: 'Espresso', price: 3.5 },
          { name: 'Chai Verde Latte', price: 5.5 },
        ]}
        background="/assets/hot.jpg"
        sectionRef={hotRef}
      />

      {/* Juicy Section */}
      <Section
        title="Juicy"
        description1="Ripe fruit - freshly squeezed."
        description2="It's as simple as that. Chunky or smooth - it's your choice."
        menuItems={[
          { name: 'Branched Apricots', price: 4.2 },
          { name: 'Deep Raspberries', price: 3.5 },
          { name: 'Smooth Oranges', price: 6.5 },
        ]}
        background="/assets/juicy.jpg"
        sectionRef={juicyRef}
      />

      {/* Cosy Section */}
      <Section
        title="Cosy"
        description1="Hang around. Enjoy the settings."
        description2="Use our fast WiFi. Borrow a newspaper or a novel."
        menuItems={null}
        background="/assets/cosy.jpg"
        sectionRef={cozyRef}
      />
    </>
  );
}
