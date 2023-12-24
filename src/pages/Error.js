import MainNavigations from '../components/MainNavigations';

function ErrorPage() {
  return (
    <>
      <MainNavigations />
      <main>
        <h1>An error occured!</h1>
        <p>Could not found this page!</p>
      </main>
    </>
  );
}
export default ErrorPage;
