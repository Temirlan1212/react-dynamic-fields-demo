"use client";

const ExampleCodeBlock = `
import {
  ReactDynamicFields,
  ReactDynamicFieldsProvider,
  ReactDynamicFieldsSchema,
  ReactDynamicField,
} from "react-dynamic-fields-core";
import { ReactDynamicFieldsInputField } from "../ui";

const fieldsSchema: ReactDynamicFieldsSchema = [
  {
    fieldType: "string",
    fieldName: "title",
    placeholder: "Write something",
    label: "Title",
    defaultValue: "",
    rules: {},
    fieldConditions: [],
  },
  {
    fieldType: "string",
    fieldName: "description",
    placeholder: "Write something",
    label: "Description",
    defaultValue: "",
    rules: {},
    fieldConditions: [],
  },
];

const stateName = "state";

export default function Example() {
  return (
    <>
      <ReactDynamicFieldsProvider>
        <ReactDynamicFields
          stateName={stateName}
          renderSchema={({ controller }) => {
            return (
              <div className="flex gap-4 flex-wrap">
                {fieldsSchema.map((fieldSchema, index) => (
                  <ReactDynamicField
                    key={index}
                    fieldSchema={fieldSchema}
                    stateName={stateName}
                    renderFields={() => {
                      return {
                        input: (props) => (
                          <ReactDynamicFieldsInputField
                            {...props}
                            onChange={controller.updateFieldValue}
                          />
                        ),
                      };
                    }}
                  />
                ))}
              </div>
            );
          }}
        />
      </ReactDynamicFieldsProvider>
    </>
  );
}
`;

export default ExampleCodeBlock;
