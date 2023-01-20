import type { NextPage } from "next";
import { EntryListItem } from "@/components/EntryListItem";
import { QUESTIONS } from "../mocks/questions";
import { VStack } from "@/components/Layout/VStack";
import { Entry } from "@/components/Entry";

var singleQuestion = QUESTIONS[3];
var sampleQuestions = QUESTIONS.slice(0, 30);

const Entries: NextPage = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="my-4 text-xl font-semibold">
        Displaying Questions as a List.
      </div>

      <VStack className="border rounded">
        {sampleQuestions.map((_, i) => (
          <EntryListItem
            key={i}
            topic={_.topic}
            description={""}
            createdOnDate={_.createdOnDate}
            updatedOnDate={_.updatedOnDate}
            draggable={false}
          />
        ))}
      </VStack>

      <div className="my-4 text-xl font-semibold">
        Displaying an Expanded Question
      </div>

      <VStack className="p-4 mt-10 rounded shadow-md">
        <Entry
          key={0}
          topic={singleQuestion.topic}
          createdOnDate={singleQuestion.createdOnDate}
          updatedOnDate={singleQuestion.updatedOnDate}
          description={singleQuestion.description}
          draggable={false}
        ></Entry>
      </VStack>
    </div>
  );
};

export default Entries;
