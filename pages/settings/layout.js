import React from 'react';

import DefaultDashboardLayout from 'layouts/DefaultDashboardLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import node module libraries
import {
  Card,
  Col,
  Container,
  Nav,
  Row,
} from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

const menuItems = [
  {
    id: uuid(),
    title: "Profile",
    icon: "user",
    link: "/settings/account",
  },
  {
    id: uuid(),
    title: "Change Password",
    icon: "lock",
    link: "/settings/change-password",
  },
  {
    id: uuid(),
    title: "Branding",
    icon: "file-text",
    link: "/settings/branding",
  },
  {
    id: uuid(),
    title: "Company Details",
    icon: "life-buoy",
    link: "/settings/company-details",
  },
  {
    id: uuid(),
    title: "Pricing",
    icon: "dollar-sign",
    link: "/settings/pricing",
  },
];

const SettingsLayout = ({ children }) => {
  const location = useRouter();
  return (
    <DefaultDashboardLayout>
      <Container fluid className="p-6">
        <Card className="h-100">
          <Row>
            <Col xs={12} md={3} lg={3} className="py-3 px-4 border-end">
              <Nav className="flex-column settings-navbar">
                {menuItems && menuItems.length > 0
                  ? menuItems.map((item, index) => (
                      <Card bsPrefix="nav-item" key={index}>
                        <Link
                          key={index}
                          href={item.link}
                          className={`nav-link ${
                            location.pathname === item.link ? "active" : ""
                          }`}
                        >
                          <i className={`nav-icon fe fe-${item.icon} me-3`}></i>
                          {item.title}
                        </Link>
                      </Card>
                    ))
                  : null}
              </Nav>
            </Col>
            <Col>{children}</Col>
          </Row>
        </Card>
      </Container>
    </DefaultDashboardLayout>
  );
};

export default SettingsLayout;
