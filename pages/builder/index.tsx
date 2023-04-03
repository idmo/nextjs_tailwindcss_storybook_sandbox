import { DELIVERABLES } from "../../mocks/deliverables";

const Builder = () => {
  return (
    <main className="m-auto w-3/4">
      <section>
        <div>Description</div>
        <div className="rounded-lg border p-4">
          <p>
            {" "}
            A UX (User Experience) Agency is a company that specializes in
            creating, designing, and optimizing the digital user experience of a
            website, application, or other digital products. UX agencies
            typically have a team of professionals with expertise in user
            research, information architecture, interaction design, visual
            design, and usability testing.
          </p>
          <p>
            The primary goal of a UX agency is to ensure that the digital
            products they work on are easy to use, visually appealing, and
            provide a positive user experience. This involves conducting user
            research to understand the needs and goals of the target audience,
            creating user personas and user flows to guide the design process,
            and developing prototypes to test and refine the design before it is
            launched.
          </p>
          <p>
            By focusing on the user experience, a UX agency helps companies
            create digital products that are not only functional but also
            engaging and enjoyable to use, which can ultimately lead to
            increased user engagement, customer satisfaction, and business
            success.
          </p>
        </div>
      </section>
      <div className="m-auto flex justify-center py-4">
        <button className="bg-slate-100 px-2 py-1.5 font-bold">
          Show Deliverables
        </button>
      </div>
      <section className="rounded-lg border p-4">
        <div>These are some of the deliverables we came up with</div>
        <div className="rounded-lg border p-4">
          {DELIVERABLES.map((_d, i) => (
            <div key={i} className="flex flex-row justify-between">
              <div className="flex flex-row items-center justify-start space-x-2">
                <input type="checkbox" className="rounded-md" />
                <div>{_d.name}</div>
              </div>
              <div>edit</div>
            </div>
          ))}
          <div className="m-auto flex justify-center space-x-2 py-4">
            <button className="bg-slate-100 px-2 py-1.5 font-bold">
              Generate More
            </button>
            <button className="bg-slate-100 px-2 py-1.5 font-bold">
              Add My Own
            </button>
          </div>
        </div>
      </section>
      <div className="m-auto flex justify-center py-4">
        <button className="bg-slate-100 px-2 py-1.5 font-bold">
          Generate A Proposal
        </button>
      </div>
      <section className="rounded-lg border">
        <div className="flex flex-row justify-end">
          <div className="space-x-1 border border-t-0 p-1.5">
            <button>cloud</button>
            <button>download</button>
            <button>copy</button>
          </div>
        </div>
        <article className="p-4">
          <h3>Proposal Draft</h3>
          {DELIVERABLES.map((_detail, i) => (
            <div key={i} className="py-2">
              <div className="flex flex-row justify-between">
                <div className="font-bold">{_detail.name}</div>
                <div className="border p-1.5">...</div>
              </div>
              <div>{_detail.description}</div>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
};

export default Builder;
