
    const User = ({ data }) => {
  return (
    <div>
      <p>College Name: {data.name}</p>
            <p>City: {data.city}</p>
            <p>Pin: {data.pin}</p>
    </div>
  );
};

export default User;