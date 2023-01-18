import { EntryProps } from "../Entry/Entry";

export const EntryListItem: React.FC<EntryProps> = ({ topic }) => {
  return <div>{topic}</div>;
};
