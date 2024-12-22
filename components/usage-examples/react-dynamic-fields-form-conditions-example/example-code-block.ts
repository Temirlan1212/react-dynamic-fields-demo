"use client";

const ExampleCodeBlock = `
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
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const fieldsSchema: ReactDynamicFieldsSchema = [
  {
    fieldType: "string",
    fieldName: "title",
    placeholder: "Write something",
    label: "Title",
    description: Write: "required description" to make description required,
    defaultValue: "",
    style: { width: "100%" },
    rules: {},
    fieldConditions: [],
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
        otherFieldName: "title",
        comparison: "equals",
        value: "required description",
        action: {
          rules: {
            required: true,
          },
        },
      },
    ],
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
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  controller.submit({ fieldsSchema });
                  toast({
                    title: "submit result",
                    description: JSON.stringify(controller.getValues()),
                  });
                }}
              >
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

                <Button className="mt-4" type="submit">
                  Submit
                </Button>
              </form>
            );
          }}
        />
      </ReactDynamicFieldsProvider>
    </>
  );
}
`;
export default ExampleCodeBlock;
