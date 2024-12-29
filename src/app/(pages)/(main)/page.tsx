import Header from "@common/header/header";
import { Suspense } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Main from "./components/main";

const Page = () => {
  return (
    <>
      <Header type="main" />
      <ErrorBoundary errorComponent={undefined}>
        <Suspense fallback={null}>
          <Main />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Page;
