import {
  CardX,
  ListX,
  ListItemX,
  TypographyTextX,
  ListHeader,
  IconX
} from "./style";
import EditModal from "./EditModal";

const ContactDetails = () => {
  return (
    <CardX>
      <ListX header={<ListHeader>Contact Details</ListHeader>}>
        <ListItemX>
          <TypographyTextX>Phone Number</TypographyTextX>
          <span>
            9999999999 <IconX type="edit" theme="filled" />
          </span>
        </ListItemX>
        <ListItemX>
          <TypographyTextX>Email</TypographyTextX>
          <span>shahrukh@gmail.com</span>
        </ListItemX>
        <ListItemX>
          <TypographyTextX>Address</TypographyTextX>
          <span>
            HSR Layout, Bangalore <IconX type="edit" theme="filled" />
          </span>
        </ListItemX>
      </ListX>
    </CardX>
  );
};

export default ContactDetails;
