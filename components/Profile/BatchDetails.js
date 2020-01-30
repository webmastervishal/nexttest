import { useState } from "react";
import { Form, Select } from "antd";

const { Option } = Select;

import {
  CardX,
  ListX,
  ListItemX,
  TypographyTextX,
  ListHeader,
  IconX
} from "./style";
import EditModal from "./EditModal";
import EditForm from "./EditForm";

const BatchDetails = () => {
  const [editBatchModalVisible, seteditBatchModalVisible] = useState(false);
  return (
    <CardX>
      <ListX header={<ListHeader>Batch Details</ListHeader>}>
        <ListItemX>
          <TypographyTextX>Name</TypographyTextX>{" "}
          <span>
            Falcon
            <IconX
              type="edit"
              theme="filled"
              onClick={() => seteditBatchModalVisible(true)}
            />
            <EditModal
              title="Batch"
              visible={editBatchModalVisible}
              setvisible={seteditBatchModalVisible}
            >
              <EditForm layout="inline">
                <Form.Item label="Batch">
                  <Select defaultValue="Falcon">
                    <Option value="Pheonix">Pheonix</Option>
                    <Option value="Nightingale">Nightingale</Option>
                    <Option value="Eagle">Eagle</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Reason">
                  <Select defaultValue="Poor Performance">
                    <Option value="Poor Performance">Poor Performance</Option>
                    <Option value="Test Scores">Test Scores</Option>
                    <Option value="Attendance">Attendance</Option>
                  </Select>
                </Form.Item>
              </EditForm>
            </EditModal>
          </span>
        </ListItemX>
        <ListItemX>
          <TypographyTextX>Instructor</TypographyTextX>
          <span>Arkesh Jaiswal</span>
        </ListItemX>
        <ListItemX>
          <TypographyTextX>Github Username</TypographyTextX>
          <span>shahrukhanwar</span>
        </ListItemX>
      </ListX>
    </CardX>
  );
};

export default BatchDetails;
