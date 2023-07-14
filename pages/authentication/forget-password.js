// import node module libraries
import { Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import Link from "next/link";

// import authlayout to override default layout
import AuthLayout from "layouts/AuthLayout";

const ForgetPassword = () => {
  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xl={6} lg={12} md={12} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-sm auth-form-card">
          {/* Card body */}
          <Card.Body className="p-6">
            <div
              className="mb-4 text-center mx-auto"
              style={{ maxWidth: "300px" }}
            >
              {/* <Link href="/"><Image src="/images/brand/logo/logo-primary.svg" className="mb-2" alt="" /></Link> */}
              <h3>
                <strong>Reset Password</strong>
              </h3>
              <p className="mb-6">
                We securely manage your account information and messages.
              </p>
            </div>
            {/* Form */}
            <Form>
              {/* Username */}
              <Form.Group className="mb-3" controlId="username">
                {/* <Form.Label>Username or email</Form.Label> */}
                <Form.Control
                  type="email"
                  name="username"
                  placeholder="Email"
                  required=""
                />
              </Form.Group>
              <div>
                {/* Button */}
                <div className="d-grid mt-4">
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn-primary opacity-3"
                  >
                    Send Reset Link
                  </Button>
                  <p
                    className="text-center fs-6 mt-2 mb-4 mx-auto"
                    style={{ maxWidth: "350px" }}
                  >
                    You must be at least 13 years old to register. By tapping
                    Continue, you agree to our{" "}
                    <span class="text-blue">Terms of Use</span> and{" "}
                    <span class="text-blue">Privacy Policy</span>
                  </p>
                </div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

ForgetPassword.Layout = AuthLayout;

export default ForgetPassword;
