import { EntryProps } from "../Entry/Entry";
import { Handle } from "../Handle";
import { Wrapper } from "../Wrapper";
import { Token } from "../Token";

export const EntryListItem: React.FC<EntryProps> = ({
  topic,
  createdOnDate,
}) => {
  return (
    <Wrapper alignment="row">
      <div className="flex flex-row items-center space-x-1 truncate">
        <Handle />
        <div className="truncate">{topic}</div>
      </div>
      <Token>{createdOnDate}</Token>
    </Wrapper>
  );
};
