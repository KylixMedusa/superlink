// import node module libraries
import { useState } from "react";
import { Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import Link from "next/link";

// import authlayout to override default layout
import AuthLayout from "layouts/AuthLayout";

const SignIn = () => {
  const [passWordShown, setPasswordShown] = useState(false);
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
                <strong>Log In</strong>
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

              {/* Password */}
              <Form.Group controlId="password" style={{ position: "relative" }}>
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  type={passWordShown ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  required=""
                />
                <span
                  className="password_view_icon"
                  onClick={() => setPasswordShown(!passWordShown)}
                >
                  {passWordShown ? (
                    <i className="fe fe-eye-off"></i>
                  ) : (
                    <i class="fe fe-eye"></i>
                  )}
                </span>
              </Form.Group>
              <p className="fs-6 mt-2 mb-4">Must be at least 8 characters</p>

              {/* Checkbox */}
              {/* <div className="d-lg-flex justify-content-between align-items-center mb-4">
                <Form.Check type="checkbox" id="rememberme">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label>Remember me</Form.Check.Label>
                </Form.Check>
              </div> */}
              <div>
                {/* Button */}
                <div className="d-grid mt-4">
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn-primary opacity-3"
                  >
                    Continue
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
                <div className="d-md-flex justify-content-between mt-8">
                  <div className="mb-2 mb-md-0">
                    <Link
                      href="/authentication/sign-up"
                      className="fs-5 text-blue"
                    >
                      Create An Account{" "}
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/authentication/forget-password"
                      className="text-inherit fs-5 text-blue"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

SignIn.Layout = AuthLayout;

export default SignIn;
