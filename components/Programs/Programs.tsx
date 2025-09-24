import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants';


const Programs: React.FC = () => {
  return (
    <section id="programs" className="programs section">
      <div className="container">
        <div className="programs-content">
          <div className="programs-images">
            <div className="program-image">
              <Image 
                src={IMAGES.program1} 
                alt="Chương trình ưu đãi 1" 
                width={300}
                height={200}
                className="img-responsive img-border-radius"
              />
            </div>
            <div className="program-image">
              <Image 
                src={IMAGES.program2} 
                alt="Chương trình ưu đãi 2" 
                width={300}
                height={200}
                className="img-responsive img-border-radius"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
