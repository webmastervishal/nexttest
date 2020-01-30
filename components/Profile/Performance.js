import {
  CardX,
  ListX,
  ListItemX,
  TypographyTextX,
  ListHeader,
  IconX
} from "./style";

const Performance = () => {
  return (
    <CardX>
      <ListX header={<ListHeader>Performance</ListHeader>}>
        <ListItemX>
          <TypographyTextX>Rating</TypographyTextX> <span>5</span>
        </ListItemX>
      </ListX>
    </CardX>
  );
};

export default Performance;
