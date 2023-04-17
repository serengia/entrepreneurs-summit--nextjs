import React from "react";
import News from "@/components/Pages/News/News";
import Head from "next/head";

export default function NewsPage() {
  return (
    <>
      <Head>
        <title>Latest News | Entrepreneurs Forum Summit</title>
      </Head>
      <News />
    </>
  );
}
