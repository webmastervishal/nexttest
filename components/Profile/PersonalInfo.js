import {
  CardX,
  ListX,
  ListItemX,
  TypographyTextX,
  ListHeader,
  IconX
} from "./style";
import EditModal from "./EditModal";

const PersonalInfo = props => {
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
            <EditModal visible={props.visible} setvisible={props.setvisible}>
              <h1>Shahrukh</h1>
            </EditModal>
          </span>
        </ListItemX>
      </ListX>
    </CardX>
  );
};

export default PersonalInfo;
