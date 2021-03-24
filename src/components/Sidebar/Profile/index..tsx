import React, { useEffect } from "react";
import { useFetch } from "../../../utils/useFetch";
import { apiURL } from "../../../utils/URI";

const Profile = () => {
  const [fetch, data, loading] = useFetch({
    url: `http://${apiURL}/graphql/`,
    options: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
    query {
       postList(category: 2) {
          id
          created
          title
          miniTitle
          body
          postImages {
            url
          }
        }
    }`,
      }),
    },
  });
  useEffect(() => console.log(data), [data]);
  return (
    <div className="hidden xl:block bg-white" onClick={() => fetch()}>
      aaa
    </div>
  );
};

export default Profile;
