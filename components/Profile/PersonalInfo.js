import { useState } from "react";
import { Radio } from "antd";

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

const PersonalInfo = () => {
  const [editGenderModalVisible, seteditGenderModalVisible] = useState(false);
  const [genderValue, setGendervalue] = useState(null);
  return (
    <CardX>
      <ListX header={<ListHeader>Personal Information</ListHeader>}>
        <ListItemX>
          <TypographyTextX>First Name</TypographyTextX> <span>Shahrukh</span>
        </ListItemX>
        <ListItemX>
          <TypographyTextX>Last Name</TypographyTextX> <span>Anwar</span>
        </ListItemX>
        <ListItemX>
          <TypographyTextX>Gender</TypographyTextX>
          <span>
            Male
            <IconX
              type="edit"
              theme="filled"
              onClick={() => seteditGenderModalVisible(true)}
            />
            <EditModal
              title="Gender"
              visible={editGenderModalVisible}
              setvisible={seteditGenderModalVisible}
            >
              <EditForm>
                <Radio.Group
                  onChange={e => setGendervalue(e.target.value)}
                  value={genderValue}
                >
                  <Radio value={1}>Male</Radio>
                  <Radio value={2}>Female</Radio>
                  <Radio value={3}>Others</Radio>
                </Radio.Group>
              </EditForm>
            </EditModal>
          </span>
        </ListItemX>
      </ListX>
    </CardX>
  );
};

export default PersonalInfo;
