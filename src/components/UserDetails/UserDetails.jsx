import { useLoaderData } from "react-router-dom";

export const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;
  return (
    <div>
      <h2>Details about user : {name}</h2>
      <p>Website : {website}</p>
    </div>
  );
};
