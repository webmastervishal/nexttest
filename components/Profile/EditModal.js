import { Modal } from "antd";

const EditModal = props => {
  const handleOk = e => {
    console.log(e);
    props.setvisible(false);
  };

  const handleCancel = e => {
    console.log(e);
    props.setvisible(false);
  };

  return (
    <Modal
      title={props.title}
      visible={props.visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {props.children}
    </Modal>
  );
};

export default EditModal;
