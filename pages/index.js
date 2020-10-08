import Head from "next/head";
import UserTable from "../components/user-table/UserTable";
import tableData from "../mock/mockData.json";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <UserTable tableData={tableData} />
      </main>

      <footer>All rights reserved</footer>
    </div>
  );
}
