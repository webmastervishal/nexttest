import { Radio } from "antd";
import { useState } from "react";
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

const PersonalInfo = props => {
  const [value, setvalue] = useState(null);
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
            Male <IconX type="edit" theme="filled" onClick={props.showModal} />
            <EditModal
              visible={props.visible}
              setvisible={props.setvisible}
              title="Gender"
            >
              <EditForm>
                <Radio.Group
                  onChange={e => setvalue(e.target.value)}
                  value={value}
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
