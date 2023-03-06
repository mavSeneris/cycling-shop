import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      {/* <h1>Oops!</h1> */}
      <img src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7982.jpg?w=1380&t=st=1678095435~exp=1678096035~hmac=6f1b99dcde2cbdc35daea26ea7ad81af3368f2eadc436840c16d4eba84c14355"/>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
