"use client";
import {
  UseStateMethodsParams,
  ReactDynamicFieldsRenderFieldsArgProps,
} from "react-dynamic-fields-core";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CardDescription } from "@/components/ui/card";

type ReactDynamicFieldsSelectFieldProps = {
  onChange?: (props: UseStateMethodsParams["updateFieldValue"]) => void;
} & ReactDynamicFieldsRenderFieldsArgProps["select"];

export function ReactDynamicFieldsSelectField({
  onChange,
  fieldName,
  value,
  fieldErrorMessage,
  label,
  actionProperties,
  placeholder,
  options,
  valueFieldName,
  labelFieldName,
  loading,
  ...rest
}: ReactDynamicFieldsSelectFieldProps) {
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
      <Select
        disabled={rules.disabled}
        defaultValue={value?.[valueFieldName]}
        onValueChange={(selectedValue) => {
          const option = options.find(
            (option) => option?.[valueFieldName] === selectedValue
          );
          if (!option) return;
          onChange && onChange({ value: option, fieldName });
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
                key={index + " " + option?.[valueFieldName]}
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
}

export const reactDynamicFieldsSelectFieldCodeBlock = `
import {
  UseStateMethodsParams,
  ReactDynamicFieldsRenderFieldsArgProps,
} from "react-dynamic-fields-core";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CardDescription } from "@/components/ui/card";

type ReactDynamicFieldsSelectFieldProps = {
  onChange?: (props: UseStateMethodsParams["updateFieldValue"]) => void;
} & ReactDynamicFieldsRenderFieldsArgProps["select"];

export function ReactDynamicFieldsSelectField({
  onChange,
  fieldName,
  value,
  fieldErrorMessage,
  label,
  actionProperties,
  placeholder,
  options,
  valueFieldName,
  labelFieldName,
  loading,
  ...rest
}: ReactDynamicFieldsSelectFieldProps) {
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
      <Select
        disabled={rules.disabled}
        defaultValue={value?.[valueFieldName]}
        onValueChange={(selectedValue) => {
          const option = options.find(
            (option) => option?.[valueFieldName] === selectedValue
          );
          if (!option) return;
          onChange && onChange({ value: option, fieldName });
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
                key={index + " " + option?.[valueFieldName]}
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
}
  `;
