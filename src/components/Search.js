import React from "react";
import { Form, Input, Button, Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMosque } from "@fortawesome/free-solid-svg-icons";
import { faStarAndCrescent } from "@fortawesome/free-solid-svg-icons";
const crescent = <FontAwesomeIcon icon={faStarAndCrescent} />;

function Research(props) {
  
  return (
    <div className="research">
      <h1> أوقات الصلاة &nbsp;{crescent}</h1>
          <div className="research-bare">
        <Form.Item>
          <Input
            placeholder="Your code country 'DZ'"
            onChange={(event) => {
              props.updateC(event.target.value);
            }}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="Your zip code '16000'"
            onChange={(event) => {
              props.updateZ(event.target.value);
            }}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="MM/DD/YYYY"
            onChange={(event) => {
              props.updateD(event.target.value);
            }}
          />
        </Form.Item>
      </div>
      <Form.Item>
        <Button
          className="btn"
          onClick={() => {
            props.fetch();
          }}
          type="primary"
          icon={<FontAwesomeIcon icon={faMosque} />}
        >
          &nbsp; Search
        </Button>
      </Form.Item>
    </div>
  );
}

export default Research;
