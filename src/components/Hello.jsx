function Hello({person}) {
  return (
    <div>
      <h1>
        {person.message} {person.emoji} {person.name}
        {person.seatNumbers}
      </h1>
    </div>
  );
}
export default Hello;
