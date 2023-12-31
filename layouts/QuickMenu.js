import 'simplebar/dist/simplebar.min.css';

import { Fragment } from 'react';

// import data files
import NotificationList from 'data/Notification';
// import hooks
import useMounted from 'hooks/useMounted';
// import node module libraries
import Link from 'next/link';
import {
  Button,
  Col,
  Dropdown,
  Image,
  ListGroup,
  Row,
} from 'react-bootstrap';
import { CheckCircle } from 'react-feather';
import { useMediaQuery } from 'react-responsive';
// simple bar scrolling used for notification item scrolling
import SimpleBar from 'simplebar-react';

const QuickMenu = () => {
  const hasMounted = useMounted();

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const Notifications = () => {
    return (
      <SimpleBar style={{ maxHeight: "300px" }}>
        <ListGroup variant="flush">
          {NotificationList.map(function (item, index) {
            return (
              <ListGroup.Item
                className={index === 0 ? "bg-light" : ""}
                key={index}
              >
                <Row>
                  <Col xs="auto p-0">
                    <div className="avatar avatar-sm">
                      <Image
                        alt="avatar"
                        src="/images/avatar/avatar-1.jpg"
                        className="rounded-circle"
                      />
                    </div>
                  </Col>
                  <Col>
                    <Link href="#" className="text-muted">
                      <h5 className=" mb-1">{item.sender}</h5>
                      <p className="mb-0 mt-2"> {item.time}</p>
                    </Link>
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </SimpleBar>
    );
  };

  const QuickMenuMobile = () => {
    return (
      <ListGroup
        as="ul"
        bsPrefix="navbar-nav"
        className="navbar-right-wrap ms-auto d-flex nav-top-wrap"
      >
        <Dropdown as="li" className="stopevent">
          <Dropdown.Toggle
            as="a"
            bsPrefix=" "
            id="dropdownNotification"
            className="btn btn-icon indicator indicator-primary text-muted"
          >
            <i
              className="fe fe-bell"
              style={{
                fontSize: "20px",
              }}
            ></i>
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-end py-0"
            aria-labelledby="dropdownNotification"
            align="end"
          >
            <Dropdown.Item className="mt-3" bsPrefix=" " as="div">
              <div className="border-bottom px-3 pt-0 pb-3 d-flex justify-content-between align-items-end">
                <span className="h4 mb-0">Notifications</span>
                <Button variant="link" className="p-0">
                  <span className="align-middle">Mark all as read</span>
                  <CheckCircle
                    size={16}
                    style={{
                      marginLeft: 6,
                    }}
                  />
                </Button>
              </div>
              <Notifications />
              <div className="border-top px-3 pt-3 pb-3">
                <Link
                  href="/dashboard/notification-history"
                  className="text-link fw-semi-bold"
                >
                  See all Notifications
                </Link>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as="li" className="ms-2">
          <Dropdown.Toggle
            as="a"
            bsPrefix=" "
            className="rounded-circle"
            id="dropdownUser"
          >
            <div className="avatar avatar-md avatar-indicators avatar-online">
              <Image
                alt="avatar"
                src="/images/avatar/avatar-1.jpg"
                className="rounded-circle"
              />
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="dropdown-menu dropdown-menu-end "
            align="end"
            aria-labelledby="dropdownUser"
          >
            <Dropdown.Item as="div" className="px-4 pb-0 pt-2" bsPrefix=" ">
              <div className="lh-1 ">
                <h5 className="mb-1">Agency Name</h5>
                <Link href="#" className="text-inherit fs-6">
                  agency@gmail.com
                </Link>
              </div>
              <div className=" dropdown-divider mt-3 mb-2"></div>
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">Edit Profile</Dropdown.Item>
            <Dropdown.Item>Log Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ListGroup>
    );
  };

  return (
    <Fragment>
      <QuickMenuMobile />
    </Fragment>
  );
};

export default QuickMenu;
