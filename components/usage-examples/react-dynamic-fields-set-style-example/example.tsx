"use client";

import {
  ReactDynamicField,
  ReactDynamicFields,
  ReactDynamicFieldsProvider,
  ReactDynamicFieldsSchema,
} from "react-dynamic-fields-core";
import {
  ReactDynamicFieldsInputField,
  ReactDynamicFieldsSelectField,
} from "../ui";

const fieldsSchema: ReactDynamicFieldsSchema = [
  {
    fieldType: "string",
    fieldName: "title",
    placeholder: "Write something",
    label: "Title",
    description: "We set 400px with inline style",
    defaultValue: "",
    style: { maxWidth: "400px", width: "100%" },
    rules: {},
    fieldConditions: [],
  },
  {
    defaultValue: {},
    fieldType: "select",
    fieldName: "cities",
    label: "Cities",
    placeholder: "Choose a city from the list",
    description: "We set a minimum width of 300px using Tailwind",
    className: "min-w-[300px]",
    rules: {},
    options: [],
    fetchOptions: async () => {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/population/cities"
      );
      const data = await response.json();
      return { data: data.data.slice(1, 10) };
    },
    labelFieldName: "city",
    valueFieldName: "city",
    fieldConditions: [],
  },
  {
    fieldType: "string",
    fieldName: "description",
    placeholder: "Write something",
    label: "Description",
    description:
      "We set border-radius and padding with Css properties and background with Tailwind classNames",
    defaultValue: "",
    className: "bg-primary/[.4]",
    style: { borderRadius: "10px", padding: "10px" },
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
                        select: (props) => (
                          <ReactDynamicFieldsSelectField
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
