import PageContainer from "@/components/custom/page-container";

export default function NotFoundPage() {
  return (
    <PageContainer fullHeight>
      <p className="text-primary font-bold tracking-tight">404</p>
      <h1>Page not found </h1>
      <p>
        Sorry, we couldn't find the page you were looking for. Please check the
        URL or return to the homepage.
      </p>
    </PageContainer>
  );
}
