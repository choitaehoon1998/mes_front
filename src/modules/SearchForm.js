import { React, useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

export default function SearchForm() {
  return (
    <Form>
      <Row className="align-items-center">
        <Form.Label column="xs" lg={1}>
          통합검색:
        </Form.Label>{" "}
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput1" visuallyHidden>
            Name
          </Form.Label>
          <Form.Control className="mb-2" id="inlineFormInput1" placeholder="" />
        </Col>
        <Form.Label column="xs" xs={1}>
          등록일:
        </Form.Label>{" "}
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput2" visuallyHidden>
            Name
          </Form.Label>
          <Form.Control className="mb-2" id="inlineFormInput2" placeholder="" />
        </Col>
        <Col xs="auto">
          <Button type="submit" className="mb-2">
            검색
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
