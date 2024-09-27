import Avatar from './Avatar';

export default function Bio({person, scientist}: bioProps) {
    return (
      <section className="profile">
        <h2>{bioProps.person.name}</h2>
        <Avatar person={bioProps.person} size={70} />
        <ul>
          <li>
            <b>Profession: </b>
            {bioProps.profession}
          </li>
          <li>
            <b>Awards: 2 </b>
            {bioProps.awards}
          </li>
          <li>
            <b>Discovered: </b>
            {bioProps.discovered}
          </li>
        </ul>
      </section>
    )
}