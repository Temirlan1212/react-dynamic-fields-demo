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
    description: `Write: "description background primary" to apply actions`,
    defaultValue: "",
    style: { width: "100%" },
    rules: {},
    fieldConditions: [
      {
        otherFieldName: "select-to-disable",
        comparison: "includesInObject",
        value: "title",
        action: {
          rules: {
            disabled: true,
          },
        },
      },
    ],
  },
  {
    fieldType: "string",
    fieldName: "description",
    placeholder: "Write something",
    label: "Description",
    description:
      "We add actions on the base of conditions which listenes title value",
    defaultValue: "",
    rules: {},
    fieldConditions: [
      {
        otherFieldName: "select-to-disable",
        comparison: "includesInObject",
        value: "description",
        action: {
          rules: {
            disabled: true,
          },
        },
      },
      {
        otherFieldName: "title",
        comparison: "equals",
        value: "description background primary",
        action: {
          rules: {},
          styles: {
            style: {
              padding: "10px",
              borderRadius: "20px",
            },
            className: "bg-primary/[.4]",
          },
        },
      },
    ],
  },
];

const fieldsSchemaExtended: ReactDynamicFieldsSchema = [
  {
    defaultValue: { value: "none", label: "Choose field you want to disable" },
    fieldType: "select",
    fieldName: "select-to-disable",
    label: "Select field you want to disable",
    placeholder: "Select field you want to disable",
    description: "Choose field you want to disable",
    rules: {},
    fieldConditions: [],
    options: [
      { value: "none", label: "Choose field you want to disable" },
      ...(fieldsSchema.map((fieldSchema) => {
        return { value: fieldSchema.fieldName, label: fieldSchema.label };
      }) as Record<string, string>[]),
    ],
    labelFieldName: "label",
    valueFieldName: "value",
  },
  ...fieldsSchema,
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
                {fieldsSchemaExtended.map((fieldSchema, index) => (
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
