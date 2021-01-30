import React from "react";
import { useRouter } from "next/router";
import { useGetAppQueryQuery } from "../../generated/graphql";

const AppPage = () => {
  const { data } = useGetAppQueryQuery({
    variables: {
      id: `${useRouter().query}`,
    },
  });
  console.log(data);
  return <div>asd</div>;
};
export default AppPage;
