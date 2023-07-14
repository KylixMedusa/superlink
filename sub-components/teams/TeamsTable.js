// import node module libraries
import React from 'react';

import ConfirmationModal from 'components/ConfirmationModal';
// import required data files
import TeamsData from 'data/teams/TeamsData';
import { useRouter } from 'next/router';
import {
  Button,
  Card,
  Form,
  Image,
  Pagination,
  Table,
} from 'react-bootstrap';
import {
  ChevronLeft,
  ChevronRight,
} from 'react-bootstrap-icons';
import {
  ChevronsLeft,
  ChevronsRight,
  Eye,
  Plus,
  Trash2,
} from 'react-feather';

const TeamsTable = ({ onAddTeam }) => {
  const router = useRouter();
  const [showDeleteConfirmation, setShowDeleteConfirmation] =
    React.useState(false);

  return (
    <>
      <Card className="h-100">
        <Card.Header className="bg-white py-4 d-flex align-items-center justify-content-between">
          <h4 className="mb-0">Teams</h4>
          <div className="d-flex align-items-center gap-3">
            <div className="ms-lg-3 d-none d-md-none d-lg-block">
              <Form className="d-flex align-items-center">
                <Form.Control type="search" placeholder="Search" />
              </Form>
            </div>
            <Button onClick={onAddTeam}>
              <Plus
                size={18}
                style={{
                  marginRight: "12px",
                }}
              />
              <span className="align-middle">ADD MEMBER</span>
            </Button>
          </div>
        </Card.Header>
        <Table responsive className="text-nowrap">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>User ID</th>
              <th>Email</th>
              <th>Creators</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {TeamsData.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="align-middle">
                    <div className="d-flex align-items-center">
                      <div>
                        <Image
                          src={item.image}
                          alt=""
                          className="avatar-md avatar rounded-circle"
                        />
                      </div>
                      <div className="ms-3 lh-1">
                        <h5 className=" mb-1">{item.name}</h5>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">{item.id}</td>
                  <td className="align-middle">{item.email}</td>
                  <td className="align-middle">
                    <div className="avatar-group spread">
                      {item.members.map((avatar, avatarIndex) => {
                        return (
                          <span className="avatar avatar-sm" key={avatarIndex}>
                            <Image
                              alt="avatar"
                              src={avatar.image}
                              className="rounded-circle"
                            />
                          </span>
                        );
                      })}
                      <span className="avatar avatar-sm avatar-primary">
                        <span className="avatar-initials rounded-circle fs-6">
                          +5
                        </span>
                      </span>
                    </div>
                  </td>
                  <td className="align-middle">
                    <Eye
                      size={20}
                      style={{
                        marginRight: "18px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        router.push(`/teams/${item.id}`);
                      }}
                    />
                    <Trash2
                      size={20}
                      onClick={() => {
                        setShowDeleteConfirmation(true);
                      }}
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Pagination className="justify-content-end mx-4">
          <Pagination.First>
            <ChevronsLeft size="18px" />
          </Pagination.First>
          <Pagination.Prev>
            <ChevronLeft size="18px" />
          </Pagination.Prev>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next>
            <ChevronRight size="18px" />
          </Pagination.Next>
          <Pagination.Last>
            <ChevronsRight size="18px" />
          </Pagination.Last>
        </Pagination>
      </Card>
      <ConfirmationModal
        show={showDeleteConfirmation}
        onHide={() => {
          setShowDeleteConfirmation(false);
        }}
        title="Delete Confirmation"
        primaryButtonText="Delete"
        secondaryButtonText="Cancel"
        onSubmit={() => {
          setShowDeleteConfirmation(false);
        }}
        onCancel={() => {
          setShowDeleteConfirmation(false);
        }}
      >
        <p>
          Are you sure you want to delete this member? This process cannot be
          undone.
        </p>
      </ConfirmationModal>
    </>
  );
};

export default TeamsTable;
