"use client";

import {
  ReactDynamicFields,
  ReactDynamicFieldsProvider,
  ReactDynamicFieldsSchema,
  ReactDynamicField,
} from "react-dynamic-fields-core";
import { ReactDynamicFieldsSelectField } from "../ui";

const fieldsSchema: ReactDynamicFieldsSchema = [
  {
    defaultValue: {},
    fieldType: "select",
    fieldName: "cities",
    label: "Cities",
    placeholder: "Select a city from the list",
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
