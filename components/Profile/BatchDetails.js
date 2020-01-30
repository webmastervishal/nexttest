import {
  CardX,
  ListX,
  ListItemX,
  TypographyTextX,
  ListHeader,
  IconX
} from "./style";
import EditModal from "./EditModal";

const BatchDetails = () => {
  return (
    <CardX>
      <ListX header={<ListHeader>Batch Details</ListHeader>}>
        <ListItemX>
          <TypographyTextX>Name</TypographyTextX> <span>Falcon</span>
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
