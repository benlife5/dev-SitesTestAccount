import { ComponentConfig } from "@measured/puck";

export type BasicComponentProps = {};

export const BasicComponent = () => {
  return (
    <div>
      <h1 className="text-base">Heading Text</h1>
      <p className="">Body Test</p>
      <button className="">Button</button>
    </div>
  );
};

export const Basic: ComponentConfig<BasicComponentProps> = {
  render: () => <BasicComponent />,
};
