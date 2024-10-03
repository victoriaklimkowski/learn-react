import { ListItemProps } from '@/types/listItem';
import { BioProps } from '@/types/bio';
import Avatar from './Avatar';
import List from './artistsRemoveArr';

function ListItem({ label, content }: ListItemProps) {
  return (
    <li>
      <b>{label}: </b>
      {content}
    </li>
  );
}

export default function Bio({person, scientist}: BioProps): JSX.Element {
    return (
      <section className="profile">
        <h2>{person.name}</h2>
        <img src={`/images/${person.imageId}.jpg`} alt={person.name} />
        <ul>
          <ListItem label="Profession: " content={scientist.profession} />
          <ListItem label={`Awards: ${scientist.awards ? scientist.awards.split(',').length : 0} `}/>
          <ListItem label="Discovered: " content={scientist.discovered} />
        </ul>
      </section>
    )
}