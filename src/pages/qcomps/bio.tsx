import { ListItemProps } from '@/types/listItem';
import { GalleryProps } from '@/types/gallery';

function ListItem({ label, content }: ListItemProps) {
  return (
    <li>
      <b>{label}: </b>
      {content}
    </li>
  );
}

export default function Bio({scientist, size=100}: GalleryProps) {
    return (
      <section className="profile">
        <h2>{scientist.name}</h2>
        <img
          className="avatar"
          src={`https://i.imgur.com/${scientist.imageId}.jpg`}
          alt={scientist.name}
          width={size}
          height={size}
        />
        <ul>
          <ListItem label="Profession: " content={scientist.profession} />
          {/* <ListItem label={`Awards: ${scientist.awards ? scientist.awards.split(',').length : 0} `}/> */}
          <ListItem label={`Awards: ${scientist.awards.split(',').length} : ${scientist.awards} `}/>
          {/* <ListItem label={`Awards: ${scientist.awards} `}/> */}
          <ListItem label="Discovered: " content={scientist.discovered} />
        </ul>
      </section>
    )
}