import { Form } from "antd";

const EditForm = props => {
  return <Form layout={props.layout}>{props.children}</Form>;
};

export default EditForm;
