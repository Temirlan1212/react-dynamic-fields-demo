"use client";

import {
  UseStateMethodsParams,
  ReactDynamicFieldsRenderFieldsArgProps,
} from "react-dynamic-fields-core";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { CardDescription } from "@/components/ui/card";

type ReactDynamicFieldsInputFieldProps = {
  onChange?: (props: UseStateMethodsParams["updateFieldValue"]) => void;
} & ReactDynamicFieldsRenderFieldsArgProps["input"];

export function ReactDynamicFieldsInputField({
  onChange,
  value,
  fieldErrorMessage,
  label,
  actionProperties,
  placeholder,
  fieldName,
  ...rest
}: ReactDynamicFieldsInputFieldProps) {
  const rules = { ...rest.rules, ...actionProperties.rules };
  const style = {
    ...(rest?.style || {}),
    ...(actionProperties.styles?.style || {}),
  };
  const className = cn(
    rest?.className || "",
    actionProperties?.styles?.className || ""
  );

  return (
    <div className={cn("flex flex-col gap-2 grow", className)} style={style}>
      {label}
      {rest?.description && (
        <CardDescription>{rest.description}</CardDescription>
      )}
      <Input
        disabled={rules.disabled}
        maxLength={rules.maxLength}
        minLength={rules.minLength}
        defaultValue={value || ""}
        className="border"
        value={value || ""}
        placeholder={placeholder}
        onChange={(e) => {
          onChange && onChange({ value: e.target.value || "", fieldName });
        }}
      />
      {fieldErrorMessage}
    </div>
  );
}

export const reactDynamicFieldsInputFieldCodeBlock = `
import {
  UseStateMethodsParams,
  ReactDynamicFieldsRenderFieldsArgProps,
} from "react-dynamic-fields-core";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { CardDescription } from "@/components/ui/card";

type ReactDynamicFieldsInputFieldProps = {
  onChange?: (props: UseStateMethodsParams["updateFieldValue"]) => void;
} & ReactDynamicFieldsRenderFieldsArgProps["input"];

export function ReactDynamicFieldsInputField({
  onChange,
  value,
  fieldErrorMessage,
  label,
  actionProperties,
  placeholder,
  fieldName,
  ...rest
}: ReactDynamicFieldsInputFieldProps) {
  const rules = { ...rest.rules, ...actionProperties.rules };
  const style = {
    ...(rest?.style || {}),
    ...(actionProperties.styles?.style || {}),
  };
  const className = cn(
    rest?.className || "",
    actionProperties?.styles?.className || ""
  );

  return (
    <div className={cn("flex flex-col gap-2 grow", className)} style={style}>
      {label}
      {rest?.description && (
        <CardDescription>{rest.description}</CardDescription>
      )}
      <Input
        disabled={rules.disabled}
        maxLength={rules.maxLength}
        minLength={rules.minLength}
        defaultValue={value || ""}
        className="border"
        value={value || ""}
        placeholder={placeholder}
        onChange={(e) => {
          onChange && onChange({ value: e.target.value || "", fieldName });
        }}
      />
      {fieldErrorMessage}
    </div>
  );
}
  `;
