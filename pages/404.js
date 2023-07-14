// import node module libraries

import { Fragment } from 'react';

// import blank layout, header and footer to override default layout
import NotFound from 'layouts/NotFound';
import Link from 'next/link';
import {
  Col,
  Row,
} from 'react-bootstrap';

const Error404 = () => {
  return (
    <Fragment>
      <Row>
        <Col
          sm={12}
          style={{ minHeight: "100vh", maxWidth: "350px" }}
          className="d-md-flex justify-content-center align-items-center mx-auto"
        >
          <div className="text-center">
            <h3 className="fw-bold">Page Not Found</h3>
            <p className="mt-3 mb-4">
              The page you are looking for might have been removed or is
              temporarily unavailable.
            </p>
            <Link href="/" className="btn btn-primary mt-3">
              Return Home
            </Link>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

Error404.Layout = NotFound;

export default Error404;
