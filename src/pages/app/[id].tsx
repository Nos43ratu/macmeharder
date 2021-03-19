import React from "react";
import AppXl from "../../components/App/AppXl/AppXL";
import Sections from "../../components/Section/Sections";
import AppDescription from "../../components/App/AppDescription/AppDescription";
import AppImgPreviewNode from "../../components/App/AppImgPreview/AppImgPreviewNode";
import { API, getApp } from "../../pagesData/getData";

const AppPage = ({ App }) => {
  return (
    <div className="h-full w-full pt-16">
      <Sections border={false}>
        <AppXl app={App} />
      </Sections>
      <Sections border={false}>
        <AppImgPreviewNode data={App?.appImages} />
      </Sections>
      <Sections>
        <AppDescription.text description={App?.description} />
      </Sections>
      <Sections title="Information">
        <AppDescription.info app={App} />
      </Sections>
    </div>
  );
};
export default AppPage;

export async function getStaticPaths() {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
    query {
    appsList {
    id
  }
    }`,
    }),
  });

  const data = await res.json();
  const apps = data.data.appsList;
  const paths = apps.map((app) => ({
    params: { id: app.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const App = await getApp(params.id);
  console.log(params.id);
  return {
    props: { App },
  };
}
