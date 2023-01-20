import { Wrapper } from "../Wrapper";
import { VStack } from "../Layout/VStack";
export interface EntryProps extends React.HTMLAttributes<HTMLDivElement> {
  key: number;
  topic: string;
  description?: string;
  createdOnDate?: string;
  updatedOnDate?: string;
  tags?: [];
  children?: any;
  backgroundColor?: string;
  draggable: boolean;
}

export const Entry: React.FC<EntryProps> = ({
  topic,
  description,
  createdOnDate,
  updatedOnDate,
  backgroundColor,
  ...props
}) => {
  return (
    <div style={{ backgroundColor }} {...props}>
      <div className="text-xl font-semibold">{topic}</div>
      <Wrapper>
        <div>🕧</div>
        <div className="text-gray-400">Created</div>
        <div>{createdOnDate}</div>
      </Wrapper>
      <Wrapper>
        <div>🕧</div>
        <div className="text-gray-400">Modified</div>
        <div>{updatedOnDate}</div>
      </Wrapper>
      <VStack className="py-4">
        <div className="font-semibold">Details</div>
        <div className="py-2 border-t">{description}</div>
      </VStack>
    </div>
  );
};
