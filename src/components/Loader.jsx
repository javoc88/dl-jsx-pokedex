import { Spinner } from "react-bootstrap";

export const Loader = () => {
  return (
    <div className="container-loader">
      <Spinner animation="grow" role="status" variant="danger">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
