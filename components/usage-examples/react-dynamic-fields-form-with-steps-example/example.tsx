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
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fieldsSchemaSteps: {
  step1: ReactDynamicFieldsSchema;
  step2: ReactDynamicFieldsSchema;
} = {
  step1: [
    {
      defaultValue: { value: "male", label: "Male" },
      fieldType: "select",
      fieldName: "gender",
      label: "Select your gender",
      placeholder: "Select your gender",
      description:
        "Second step content will change its content by the gender you selected",
      rules: {},
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
      ],
      className: "w-full",
      labelFieldName: "label",
      valueFieldName: "value",
      fieldConditions: [],
    },
    {
      defaultValue: {},
      fieldType: "select",
      fieldName: "extended-gender",
      label: "Select your gender by extended list",
      placeholder: "Select your gender by extended list",
      description:
        "Second step content will change its content by the gender you selected",
      rules: {},
      options: [
        { value: "transgender", label: "Transgender" },
        { value: "gay", label: "Gay" },
        { value: "non-binary", label: "Non-binary" },
        { value: "gender-fluid", label: "Gender Fluid" },
        { value: "other", label: "Other" },
      ],
      labelFieldName: "label",
      valueFieldName: "value",
      className: "hidden",
      fieldConditions: [
        {
          otherFieldName: "gender",
          comparison: "includesInObject",
          value: "other",
          action: {
            rules: {},
            styles: { className: "flex" },
          },
        },
      ],
    },
  ],
  step2: [
    {
      defaultValue: {},
      fieldType: "select",
      fieldName: "males-hobby",
      label: "Select males hobby",
      placeholder: "Select males hobby",
      rules: {},
      options: [
        { value: "football", label: "Football" },
        { value: "basketball", label: "Basketball" },
        { value: "gaming", label: "Gaming" },
      ],
      labelFieldName: "label",
      valueFieldName: "value",
      className: "hidden",
      fieldConditions: [
        {
          otherFieldName: "gender",
          comparison: "includesInObject",
          value: "male",
          action: {
            rules: {},
            styles: { className: "flex" },
          },
        },
      ],
    },
    {
      defaultValue: {},
      fieldType: "select",
      fieldName: "females-hobby",
      label: "Select females hobby",
      placeholder: "Select females hobby",
      rules: {},
      options: [
        { value: "reading", label: "Reading" },
        { value: "cooking", label: "Cooking" },
        { value: "yoga", label: "Yoga" },
      ],
      labelFieldName: "label",
      valueFieldName: "value",
      className: "hidden",
      fieldConditions: [
        {
          otherFieldName: "gender",
          comparison: "includesInObject",
          value: "female",
          action: {
            rules: {},
            styles: { className: "flex" },
          },
        },
      ],
    },
    {
      defaultValue: {},
      fieldType: "select",
      fieldName: "others-hobby",
      label: "Select other hobby",
      placeholder: "Select other hobby",
      rules: {},
      options: [
        { value: "painting", label: "Painting" },
        { value: "dancing", label: "Dancing" },
        { value: "traveling", label: "Traveling" },
      ],
      labelFieldName: "label",
      valueFieldName: "value",
      className: "hidden",
      fieldConditions: [
        {
          otherFieldName: "gender",
          comparison: "includesInObject",
          value: "other",
          action: {
            rules: {},
            styles: { className: "flex" },
          },
        },
      ],
    },
    {
      defaultValue: "",
      fieldType: "string",
      fieldName: "transgender-input",
      label: "Share your journey as a transgender person",
      placeholder: "Describe your personal journey, challenges, and triumphs",
      rules: {},
      className: "hidden",
      fieldConditions: [
        {
          otherFieldName: "extended-gender",
          comparison: "equals",
          value: "transgender",
          action: {
            rules: {},
            styles: { className: "flex" },
          },
        },
      ],
    },
    {
      defaultValue: "",
      fieldType: "string",
      fieldName: "gay-input",
      label: "What inspires you about the LGBTQ+ community?",
      placeholder: "Share your thoughts on pride, community, and belonging",
      rules: {},
      className: "hidden",
      fieldConditions: [
        {
          otherFieldName: "extended-gender",
          comparison: "includesInObject",
          value: "gay",
          action: {
            rules: {},
            styles: { className: "flex" },
          },
        },
      ],
    },
    {
      defaultValue: "",
      fieldType: "string",
      fieldName: "non-binary-input",
      label: "What does being non-binary mean to you?",
      placeholder:
        "Describe your experiences and how you express your identity",
      rules: {},
      className: "hidden",
      fieldConditions: [
        {
          otherFieldName: "extended-gender",
          comparison: "includesInObject",
          value: "non-binary",
          action: {
            rules: {},
            styles: { className: "flex" },
          },
        },
      ],
    },
    {
      defaultValue: "",
      fieldType: "string",
      fieldName: "gender-fluid-input",
      label: "How does your identity shift or change over time?",
      placeholder: "Share how you experience gender fluidity and expression",
      rules: {},
      className: "hidden",
      fieldConditions: [
        {
          otherFieldName: "extended-gender",
          comparison: "includesInObject",
          value: "gender-fluid",
          action: {
            rules: {},
            styles: { className: "flex" },
          },
        },
      ],
    },
    {
      defaultValue: "",
      fieldType: "string",
      fieldName: "other-input",
      label: "Tell us more about your unique identity",
      placeholder: "Describe how you define and express your gender identity",
      rules: {},
      className: "hidden",
      fieldConditions: [
        {
          otherFieldName: "extended-gender",
          comparison: "includesInObject",
          value: "other",
          action: {
            rules: {},
            styles: { className: "flex" },
          },
        },
      ],
    },
  ],
};

const stateName = "state";

export default function Example() {
  return (
    <>
      <Tabs defaultValue={"step1"} className="w-full">
        <TabsList className="flex border border-secondary w-fit">
          <TabsTrigger value={"step1"}>step 1</TabsTrigger>
          <TabsTrigger value={"step2"}>step 2</TabsTrigger>
        </TabsList>

        <ReactDynamicFieldsProvider>
          <TabsContent
            value={"step1"}
            className="p-4 border border-secondary rounded-md bg-card"
          >
            <ReactDynamicFields
              stateName={stateName}
              renderSchema={({ controller }) => {
                return (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      controller.submit({
                        fieldsSchema: fieldsSchemaSteps.step1,
                      });
                      if (controller.isStateValid())
                        toast({
                          title: "submit result",
                          description: JSON.stringify(controller.getValues()),
                        });
                    }}
                  >
                    <div className="flex gap-4 flex-wrap">
                      {fieldsSchemaSteps.step1.map((fieldSchema, index) => (
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
          </TabsContent>

          <TabsContent
            value={"step2"}
            className="p-4 border border-secondary rounded-md bg-card"
          >
            <ReactDynamicFields
              stateName={stateName}
              renderSchema={({ controller }) => {
                return (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      controller.submit({
                        fieldsSchema: fieldsSchemaSteps.step2,
                      });
                      if (controller.isStateValid())
                        toast({
                          title: "submit result",
                          description: JSON.stringify(controller.getValues()),
                        });
                    }}
                  >
                    <div className="flex gap-4 flex-wrap">
                      {fieldsSchemaSteps.step2.map((fieldSchema, index) => (
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
          </TabsContent>
        </ReactDynamicFieldsProvider>
      </Tabs>
    </>
  );
}
