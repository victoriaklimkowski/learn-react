import Bio from './bio';
import { GalleryProps } from '@/types/gallery';

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {/* Created bio component to encapsulate the profile information */}
      <Bio
        scientist={{ 
                    name: 'Maria Skłodowska-Curie', 
                    imageId: 'szV5sdG', 
                    profession: 'physicist and chemist', 
                    awards: 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal', 
                    discovered: 'polonium (element)' }} 
                    
        size={70}/>
      <Bio
        scientist={{
                    name: 'Katsuko Saruhashi', 
                    imageId: 'YfeOqp2', 
                    profession: 'geochemist', 
                    awards: 'Miyake Prize for geochemistry, Tanaka Prize', 
                    discovered: 'a method for measuring carbon dioxide in seawater'}} 
        size={70} />
    </div>
  );
}
