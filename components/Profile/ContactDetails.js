import { useState } from "react";
import { Input } from "antd";
const { TextArea } = Input;

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

const ContactDetails = () => {
  const [editPhoneModalVisible, seteditPhoneModalVisible] = useState(false);
  const [phoneValue, setphoneValue] = useState(null);
  const [editAddressModalVisible, seteditAddressModalVisible] = useState(false);
  const [addressValue, setaddressValue] = useState(null);
  return (
    <CardX>
      <ListX header={<ListHeader>Contact Details</ListHeader>}>
        <ListItemX>
          <TypographyTextX>Phone Number</TypographyTextX>
          <span>
            9999999999
            <IconX
              type="edit"
              theme="filled"
              onClick={() => seteditPhoneModalVisible(true)}
            />
            <EditModal
              title="Phone Number"
              visible={editPhoneModalVisible}
              setvisible={seteditPhoneModalVisible}
            >
              <EditForm>
                <Input
                  placeholder="Enter Phone Number"
                  value={phoneValue}
                  onChange={e => setphoneValue(e.target.value)}
                />
              </EditForm>
            </EditModal>
          </span>
        </ListItemX>
        <ListItemX>
          <TypographyTextX>Email</TypographyTextX>
          <span>shahrukh@gmail.com</span>
        </ListItemX>
        <ListItemX>
          <TypographyTextX>Address</TypographyTextX>
          <span>
            HSR Layout, Bangalore{" "}
            <IconX
              type="edit"
              theme="filled"
              onClick={() => seteditAddressModalVisible(true)}
            />
            <EditModal
              title="Address"
              visible={editAddressModalVisible}
              setvisible={seteditAddressModalVisible}
            >
              <EditForm>
                <TextArea
                  rows={4}
                  placeholder="Enter Address"
                  value={addressValue}
                  onChange={e => setaddressValue(e.target.value)}
                />
              </EditForm>
            </EditModal>
          </span>
        </ListItemX>
      </ListX>
    </CardX>
  );
};

export default ContactDetails;
