// import node module libraries
import { Row, Col, Card, Image, Form } from "react-bootstrap";

const Activities = () => {
  return (
    <Row>
      <Col xs={12}>
        {/* card */}
        <Card
          style={{
            borderRadius: 0,
            boxShadow: "none",
            border: "none",
            borderLeft: "1.5px solid lightgrey !important",
          }}
        >
          <Card.Header
            style={{ backgroundColor: "#fff", borderBottom: "none" }}
          >
            <div className="d-flex justify-content-between align-items-center mt-0 mb-4">
              <div className="m-0">
                <h3 className="m-0 fw-bold">Activities</h3>
              </div>
              <Form.Select
                aria-label="Default select example"
                defaultValue="1"
                style={{ maxWidth: "100px", borderRadius: 0 }}
              >
                <option value="1">Daily</option>
                <option value="2">Weekly</option>
                <option value="3">Monthly</option>
              </Form.Select>
            </div>
          </Card.Header>
          <Card.Body className="activities-card-body">
            {/* card title */}

            <div className="d-flex mb-5">
              <div>
                <Image
                  src="/images/avatar/avatar-6.jpg"
                  className="rounded-circle avatar-md"
                  alt=""
                />
              </div>
              <div className="ms-3 ">
                <h5 className="mb-1">Dianna Smiley</h5>
                <p className="text-muted mb-2">
                  Just create a new Project in Dashui...
                </p>
              </div>
            </div>
            <hr />
            <div className="d-flex mb-5">
              <div>
                <Image
                  src="/images/avatar/avatar-6.jpg"
                  className="rounded-circle avatar-md"
                  alt=""
                />
              </div>
              <div className="ms-3 ">
                <h5 className="mb-1">Dianna Smiley</h5>
                <p className="text-muted mb-2">
                  Just create a new Project in Dashui...
                </p>
              </div>
            </div>
            <hr />
            <div className="d-flex mb-5">
              <div>
                <Image
                  src="/images/avatar/avatar-6.jpg"
                  className="rounded-circle avatar-md"
                  alt=""
                />
              </div>
              <div className="ms-3 ">
                <h5 className="mb-1">Dianna Smiley</h5>
                <p className="text-muted mb-2">
                  Just create a new Project in Dashui...
                </p>
              </div>
            </div>
            <hr />
            <div className="d-flex mb-5">
              <div>
                <Image
                  src="/images/avatar/avatar-6.jpg"
                  className="rounded-circle avatar-md"
                  alt=""
                />
              </div>
              <div className="ms-3 ">
                <h5 className="mb-1">Dianna Smiley</h5>
                <p className="text-muted mb-2">
                  Just create a new Project in Dashui...
                </p>
              </div>
            </div>
            <hr />
            <div className="d-flex mb-5">
              <div>
                <Image
                  src="/images/avatar/avatar-7.jpg"
                  className="rounded-circle avatar-md"
                  alt=""
                />
              </div>
              <div className="ms-3 ">
                <h5 className="mb-1">Irene Hargrove</h5>
                <p className="text-muted mb-2">
                  Comment on Bootstrap Tutorial Says Hi, I m irene...
                </p>
              </div>
            </div>
            <hr />
            <div className="d-flex">
              <div>
                <Image
                  src="/images/avatar/avatar-9.jpg"
                  className="rounded-circle avatar-md"
                  alt=""
                />
              </div>
              <div className="ms-3 ">
                <h5 className="mb-1">Trevor Bradley</h5>
                <p className="text-muted mb-2">
                  Just share your article on Social Media..
                </p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Activities;
