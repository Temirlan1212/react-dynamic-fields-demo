"use client";
import {
  ReactDynamicField,
  ReactDynamicFields,
  ReactDynamicFieldsProvider,
  ReactDynamicFieldsSchema,
} from "react-dynamic-fields-core";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const fieldsSchema: ReactDynamicFieldsSchema = [
  {
    fieldType: "string",
    fieldName: "title",
    placeholder: "Напишите что-то",
    label: "Заголовок",
    defaultValue: "",
    style: { width: "600px" },
    rules: {
      required: false,
      maxLength: undefined,
      hidden: true,
      disabled: false,
      minLength: undefined,
    },
    fieldConditions: [
      {
        otherFieldName: "select-to-disable",
        comparison: "includesInObject",
        value: "title",
        action: {
          rules: {
            disabled: true,
            hidden: true,
          },
          styles: {
            className: "w-full",
          },
        },
      },
    ],
  },
  {
    fieldType: "string",
    fieldName: "summary",
    label: "Заключение",
    placeholder: "Напишите что-то",
    rules: {},
    defaultValue: "",
    fieldConditions: [
      {
        otherFieldName: "select-to-disable",
        comparison: "includesInObject",
        value: "summary",
        action: {
          rules: {
            disabled: true,
          },
        },
      },
    ],
  },
  {
    defaultValue: {},
    fieldType: "select",
    fieldName: "cities",
    label: "Города",
    placeholder: "Выберите из списка городов",
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
    fieldConditions: [
      {
        otherFieldName: "select-to-disable",
        comparison: "includesInObject",
        value: "cities",
        action: {
          rules: {
            disabled: true,
          },
        },
      },
    ],
  },
];

const fieldsSchemaExtended: ReactDynamicFieldsSchema = [
  {
    defaultValue: {},
    fieldType: "select",
    fieldName: "select-to-disable",
    label: "Select field you want to disable",
    placeholder: "Напишите что-то",
    rules: {},
    fieldConditions: [],
    options: fieldsSchema.map((fieldSchema) => {
      return { value: fieldSchema.fieldName, label: fieldSchema.label };
    }) as Record<string, string>[],
    labelFieldName: "label",
    valueFieldName: "value",
  },
  ...fieldsSchema,
];
const stateName = "newForm-2";

export function ReactDynamicFieldsBasicExample() {
  return (
    <>
      <ReactDynamicFieldsProvider>
        <ReactDynamicFields
          stateName={stateName}
          renderSchema={({ controller }) => {
            return (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  controller.submit({ fieldsSchema: fieldsSchemaExtended });
                  console.log(controller.getValues());
                }}
              >
                <div className="flex gap-4 flex-wrap">
                  {fieldsSchemaExtended.map((fieldSchema, index) => {
                    return (
                      <ReactDynamicField
                        key={index}
                        renderFields={({ fieldName }) => {
                          return {
                            input: ({
                              value,
                              fieldErrorMessage,
                              label,
                              actionProperties: { rules, styles },
                            }) => {
                              return (
                                <div
                                  className={cn(
                                    "flex flex-col gap-2 grow",
                                    styles?.className || ""
                                  )}
                                  style={styles?.style}
                                >
                                  {label}
                                  <Input
                                    disabled={rules.disabled}
                                    maxLength={rules.maxLength}
                                    minLength={rules.minLength}
                                    defaultValue={value || ""}
                                    className="border"
                                    value={value || ""}
                                    placeholder={fieldSchema.placeholder}
                                    onChange={(e) => {
                                      const value = e.target.value;
                                      controller.updateFieldValue({
                                        fieldName,
                                        value,
                                      });
                                    }}
                                  />
                                  {fieldErrorMessage}
                                </div>
                              );
                            },
                            select: ({
                              value,
                              options,
                              fieldErrorMessage,
                              labelFieldName,
                              valueFieldName,
                              label,
                              loading,
                              placeholder,
                              actionProperties: { rules, styles },
                            }) => {
                              if (value == null) return;
                              if (loading) return "fetching...";

                              return (
                                <div
                                  className={cn(
                                    "flex flex-col gap-2 grow",
                                    styles?.className || ""
                                  )}
                                  style={styles?.style}
                                >
                                  {label}
                                  <Select
                                    disabled={rules.disabled}
                                    defaultValue={value?.valueFieldName}
                                    onValueChange={(selectedValue) => {
                                      const option = options.find(
                                        (option) =>
                                          option?.[valueFieldName] ===
                                          selectedValue
                                      );

                                      if (!option) return;
                                      console.log(option, fieldName);

                                      controller.updateFieldValue({
                                        fieldName,
                                        value: option,
                                      });
                                    }}
                                  >
                                    <SelectTrigger>
                                      <SelectValue placeholder={placeholder} />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectGroup>
                                        <SelectLabel>Options</SelectLabel>
                                        {options.map((option, index) => (
                                          <SelectItem
                                            key={
                                              index +
                                              " " +
                                              option?.[valueFieldName]
                                            }
                                            value={option?.[valueFieldName]}
                                          >
                                            {option?.[labelFieldName]}
                                          </SelectItem>
                                        ))}
                                      </SelectGroup>
                                    </SelectContent>
                                  </Select>
                                  {fieldErrorMessage}
                                </div>
                              );
                            },
                          };
                        }}
                        fieldSchema={fieldSchema}
                        stateName={stateName}
                      />
                    );
                  })}
                </div>

                <button type="submit">submit</button>
              </form>
            );
          }}
        />
      </ReactDynamicFieldsProvider>
    </>
  );
}

export const ReactDynamicFieldsBasicExampleCode = () => `
"use client";

import {
  ReactDynamicField,
  ReactDynamicFields,
  ReactDynamicFieldsProvider,
  ReactDynamicFieldsSchema,
} from "react-dynamic-fields-core";
import { Input } from "@/components/ui/input";

const fieldsSchema: ReactDynamicFieldsSchema = [
  {
    defaultValue: { value: "summary", label: "summary" },
    fieldType: "select",
    fieldName: "select-disable",
    placeholder: "select",
    rules: {},
    fieldConditions: [],
    options: [
      { value: "title", label: "title" },
      { value: "summary", label: "summary" },
    ],
  },
  {
    fieldType: "string",
    fieldName: "title",
    placeholder: "Заголовок",
    defaultValue: "",
    rules: {
      required: false,
      maxLength: undefined,
      hidden: false,
      disabled: false,
      minLength: undefined,
    },
    fieldConditions: [
      {
        fieldName: "select-disable",
        comparison: "deepEquals",
        value: { value: "title", label: "title" },
        action: {
          rules: {
            disabled: true,
          },
        },
      },
      {
        fieldName: "summary",
        comparison: "equals",
        value: "limited",
        action: {
          rules: {
            maxLength: 2,
          },
        },
      },
      {
        fieldName: "new",
        comparison: "equals",
        value: "required",
        action: {
          rules: {
            required: true,
          },
        },
      },
    ],
  },
  {
    fieldType: "string",
    fieldName: "summary",
    placeholder: "Summary",
    rules: {},
    defaultValue: "",
    fieldConditions: [
      {
        fieldName: "select-disable",
        comparison: "deepEquals",
        value: { value: "summary", label: "summary" },
        action: {
          rules: {
            disabled: true,
          },
        },
      },
    ],
  },
  {
    defaultValue: "",
    fieldType: "string",
    fieldName: "new",
    placeholder: "New",
    rules: {},
    fieldConditions: [],
  },
];

const stateName = "newForm-2";

export function ReactDynamicFieldsBasicExample() {
  return (
    <>
      <ReactDynamicFieldsProvider>
        <ReactDynamicFields
          stateName={stateName}
          renderSchema={({ controller }) => {
            return (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  controller.submit({ fieldsSchema });
                  console.log(controller.getValues());
                }}
              >
                {fieldsSchema.map((fieldSchema, index) => {
                  return (
                    <ReactDynamicField
                      key={index}
                      renderFields={({ fieldName }) => {
                        return {
                          input: ({ rules, value, fieldErrorMessage }) => {
                            return (
                              <>
                                <Input
                                  disabled={rules.disabled}
                                  maxLength={rules.maxLength}
                                  minLength={rules.minLength}
                                  defaultValue={value || ""}
                                  className="border"
                                  value={value || ""}
                                  placeholder={fieldSchema.placeholder}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    controller.updateFieldValue({
                                      fieldName,
                                      value,
                                    });
                                  }}
                                />
                                {fieldErrorMessage}
                              </>
                            );
                          },
                          select: ({ value, options, fieldErrorMessage }) => {
                            if (value == null) return;

                            return (
                              <>
                                <select
                                  defaultValue={value.value}
                                  name={value.value}
                                  id={value.value}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    const option = options.find(
                                      (option) => option.value === value
                                    );
                                    if (!option) return;
                                    controller.updateFieldValue({
                                      fieldName,
                                      value: option,
                                    });
                                  }}
                                >
                                  {options.map((option, index) => {
                                    return (
                                      <option
                                        key={index + " " + option.value}
                                        value={option.value}
                                      >
                                        {option.label}
                                      </option>
                                    );
                                  })}
                                </select>
                                {fieldErrorMessage}
                              </>
                            );
                          },
                        };
                      }}
                      fieldSchema={fieldSchema}
                      stateName={stateName}
                    />
                  );
                })}

                <button type="submit">submit</button>
              </form>
            );
          }}
        />
      </ReactDynamicFieldsProvider>
    </>
  );
}
`;
