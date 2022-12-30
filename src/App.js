import React from "react";
import { Text } from "./components/atoms";
import Header from "./components/organisms/Header";
import Layout from "./components/templates/Layout";
import Router from "./shares/Router";

const App = () => {
  return (
    <Layout>
      <Header />
      <Layout.PageHeader>
        <Text.PageTitle>오늘 한 끼</Text.PageTitle>
      </Layout.PageHeader>
      <Layout.PageContents>
        <Router />
      </Layout.PageContents>
    </Layout>
  );
};

export default App;
