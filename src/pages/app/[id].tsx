import React from "react";
import { useRouter } from "next/router";
import { useGetAppQueryQuery, AppsNode, Query } from "./GetAppQuery.generated";
import AppXl from "../../components/App/AppXL";
import Sections from "../../components/Section/Sections";

const AppPage = () => {
  const { data, loading, error } = useGetAppQueryQuery({
    variables: {
      id: `${useRouter().query.id}`,
    },
  });
  const app = data?.app;
  if (error) {
    return <div>ERROR</div>;
  }
  if (loading || !data) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="h-full w-full pt-16">
      <Sections>
        <AppXl app={app as AppsNode} />
      </Sections>
      {/*<AppDiscSm />*/}
      {/*<Section type={"app-img"} border={false} />*/}
      {/*<AppDescription />*/}
      {/*<Section type="app-lg" title="Editor's Choice" />*/}
    </div>
  );
};
export default AppPage;
