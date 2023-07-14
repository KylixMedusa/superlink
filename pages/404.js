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
      <Row
        style={{
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col sm={4}>
          <div className="text-center">
            <h3 className="fw-bold mb-2">Page Not Found</h3>
            <p className="mb-6">
              The page you are looking for might have been removed or is
              temporarily unavailable.
            </p>
            <Link
              href="/"
              className="btn btn-primary"
              style={{
                width: "100%",
              }}
            >
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
