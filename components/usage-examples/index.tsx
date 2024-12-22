import {
  ReactDynamicFieldsInputBasicExample,
  reactDynamicFieldsInputBasicExampleCodeBlock,
} from "@/components/usage-examples/react-dynamic-fields-input-basic-example";
import {
  ReactDynamicFieldsSelectBasicExample,
  reactDynamicFieldsSelectBasicExampleCodeBlock,
} from "@/components/usage-examples/react-dynamic-fields-select-basic-example";
import {
  ReactDynamicFieldsSetStyleExample,
  reactDynamicFieldsSetStyleExampleCodeBlock,
} from "@/components/usage-examples/react-dynamic-fields-set-style-example";
import {
  ReactDynamicFieldsConditionsExample,
  reactDynamicFieldsConditionsExampleCodeBlock,
} from "@/components/usage-examples/react-dynamic-fields-conditions-example";
import {
  ReactDynamicFieldsFormConditionsExample,
  reactDynamicFieldsFormConditionsExampleCodeBlock,
} from "@/components/usage-examples/react-dynamic-fields-form-conditions-example";
import {
  ReactDynamicFieldsFormWithStepsExample,
  reactDynamicFieldsFormWithStepsExampleCodeBlock,
} from "@/components/usage-examples/react-dynamic-fields-form-with-steps-example";

export const USAGE_EXAMPLE_KEYS = {
  INPUT: "input",
  SELECT: "select",
  STYLE: "style",
  CONDITIONS: "conditions",
  FORM_CONDITIONS: "formConditions",
  FORM_WITH_STEPS: "formWithSteps",
} as const;

export const USAGE_EXAMPLES = {
  [USAGE_EXAMPLE_KEYS.INPUT]: {
    component: <ReactDynamicFieldsInputBasicExample />,
    code: reactDynamicFieldsInputBasicExampleCodeBlock, // Replace with actual code block content or import
    title: "Example of input Initialized with Schema",
    description:
      "Explore how the input field works with an initialized schema.",
  },
  [USAGE_EXAMPLE_KEYS.SELECT]: {
    component: <ReactDynamicFieldsSelectBasicExample />,
    code: reactDynamicFieldsSelectBasicExampleCodeBlock,
    title: "Example of select Initialized with Schema",
    description:
      "Explore how the select field works with an initialized schema.",
  },
  [USAGE_EXAMPLE_KEYS.STYLE]: {
    component: <ReactDynamicFieldsSetStyleExample />,
    code: reactDynamicFieldsSetStyleExampleCodeBlock,
    title: "Example of set style with schema",
    description: "You can use classNames and Css properties in schema.",
  },
  [USAGE_EXAMPLE_KEYS.CONDITIONS]: {
    component: <ReactDynamicFieldsConditionsExample />,
    code: reactDynamicFieldsConditionsExampleCodeBlock,
    title: "Example of conditions",
    description: "You can use actions and styles on the base of conditions.",
  },
  [USAGE_EXAMPLE_KEYS.FORM_CONDITIONS]: {
    component: <ReactDynamicFieldsFormConditionsExample />,
    code: reactDynamicFieldsFormConditionsExampleCodeBlock,
    title: "Example of Form with conditions",
    description: "You can use actions and styles on the base of conditions.",
  },
  [USAGE_EXAMPLE_KEYS.FORM_WITH_STEPS]: {
    component: <ReactDynamicFieldsFormWithStepsExample />,
    code: reactDynamicFieldsFormWithStepsExampleCodeBlock,
    title: "Example with steps and forms",
    description: "You can bind two schemas by giving them the same stateName.",
  },
};
