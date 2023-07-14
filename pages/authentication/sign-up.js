// import node module libraries
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  Image,
  InputGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import Link from "next/link";

// import authlayout to override default layout
import AuthLayout from "layouts/AuthLayout";

const SignUp = () => {
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
                <strong>Sign Up</strong>
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
                  type="text"
                  name="username"
                  placeholder="Name"
                  required=""
                />
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3" controlId="email">
                {/* <Form.Label>Email</Form.Label> */}
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                />
              </Form.Group>

              {/* Password */}
              <Form.Group controlId="password">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  required=""
                />
              </Form.Group>
              <p className="fs-6 mt-2 mb-3">Must be at least 8 characters</p>

              <InputGroup className="mb-4">
                <DropdownButton
                  variant="outline-secondary"
                  title="+1"
                  id="input-group-dropdown-1"
                  style={{ borderTop: "none", borderLeft: "none" }}
                >
                  <Dropdown.Item href="#">+1</Dropdown.Item>
                  <Dropdown.Item href="#">+91</Dropdown.Item>
                  <Dropdown.Item href="#">+97</Dropdown.Item>
                  <Dropdown.Item href="#">+3</Dropdown.Item>
                </DropdownButton>
                <Form.Control aria-label="Text input with dropdown button" />
              </InputGroup>

              {/* Confirm Password */}
              {/* <Form.Group className="mb-3" controlId="confirm-password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name="confirm-password" placeholder="**************" required="" />
              </Form.Group> */}

              {/* Checkbox */}
              {/* <div className="mb-3">
                <Form.Check type="checkbox" id="check-api-checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label>
                    I agree to the <Link href="#"> Terms of Service </Link> and{" "}
                    <Link href="#"> Privacy Policy.</Link>
                  </Form.Check.Label>
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
                <div className="d-md-flex justify-content-center mt-8">
                  <div className="mt-4 mb-2 mb-md-0">
                    <Link href="/authentication/sign-in" className="fs-5">
                      <span class="text-blue">I already have an account</span>
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

SignUp.Layout = AuthLayout;

export default SignUp;
