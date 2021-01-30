import React from "react";
import { useRouter } from "next/router";
import { useGetAppQueryQuery, AppsNode, Query } from "./GetAppQuery.generated";
import AppXl from "../../components/App/AppXL";

const AppPage = () => {
  const { data, loading, error } = useGetAppQueryQuery({
    variables: {
      id: `${useRouter().query.id}`,
    },
  });
  if (data) {
    console.log(data);
  }
  const app = data?.app;

  return !loading ? (
    <div className="h-full w-full pt-16">
      <AppXl app={app as AppsNode} />
      {/*<AppDiscSm />*/}
      {/*<Section type={"app-img"} border={false} />*/}
      {/*<AppDescription />*/}
      {/*<Section type="app-lg" title="Editor's Choice" />*/}
    </div>
  ) : (
    <div>Loading</div>
  );
};
export default AppPage;
