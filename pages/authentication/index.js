// import node module libraries
import { Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import Link from "next/link";

// import authlayout to override default layout
import AuthLayout from "layouts/AuthLayout";

const AuthenticationPage = () => {
  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xl={6} lg={12} md={12} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-sm auth-form-card">
          {/* Card body */}
          <Card.Body className="p-6">
            <div
              className="text-center mx-auto mb-16 mt-16"
              style={{ maxWidth: "300px" }}
            >
              {/* <Link href="/"><Image src="/images/brand/logo/logo-primary.svg" className="mb-2" alt="" /></Link> */}
              <Link href="/" className="navbar-brand">
                <Image
                  src="/images/brand/logo-black.png"
                  alt="Logo"
                  width={200}
                />
              </Link>
              <p className="mb-6 text-uppercase fs-6 mt-2">
                Your link in bio's favorite link in bio
              </p>
            </div>
            {/* Form */}
            <Form>
              <div>
                {/* Button */}
                <div className="d-grid mt-4">
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn-primary"
                  >
                    Sign Up
                  </Button>
                  <Link
                    href="/authentication/sign-in"
                    className="fs-5 my-4 text-center"
                  >
                    <span class="text-blue">Log In</span>
                  </Link>
                </div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

AuthenticationPage.Layout = AuthLayout;

export default AuthenticationPage;
