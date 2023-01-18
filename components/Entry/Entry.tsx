export interface EntryProps extends React.HTMLAttributes<HTMLDivElement> {
  topic: string;
  description: string;
  createdOnDate: string;
  updatedOnDate: string;
  tags?: [];
  children?: any;
  backgroundColor?: string;
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
      <div>{topic}</div>
      <div>{createdOnDate}</div>
      <div>{updatedOnDate}</div>
      <div>{description}</div>
    </div>
  );
};
