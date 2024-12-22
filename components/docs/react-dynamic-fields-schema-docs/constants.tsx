import { NAV_ITEMS } from "@/lib/contacts";
import { Folder, File } from "lucide-react";

// Define constants for the keys
export const EXAMPLES_KEYS = {
  OPTION: "Option",
  OPTIONS: "Options",
  FIELD_SCHEMA_FIELDS_VALUE_VARIANTS: "FieldSchemaFieldsValueVariants",
  FIELD_SCHEMA_FIELDS_VALUES: "FieldSchemaFieldsValues",
  FIELD_SCHEMA_FIELD_NAME: "FieldSchemaFieldName",
  FIELD_SCHEMA_OTHER_FIELD_NAME: "FieldSchemaOtherFieldName",
  FIELD_SCHEMA_FIELD_TYPES: "FieldSchemaFieldTypes",
  FIELD_SCHEMA_STYLES_PROPERTIES: "FieldSchemaStylesProperties",
  FIELD_SCHEMA_RULES: "FieldSchemaRules",
  FIELD_SCHEMA_ACTION: "FieldSchemaAction",
  FIELDS_SCHEMA_CONDITION: "FieldsSchemaCondition",
  FIELD_SCHEMA_VALIDATORS: "FieldSchemaValidators",
  FIELD_SCHEMA_DEPENDENCIES: "FieldSchemaDependencies",
  FIELD_SCHEMA_VALIDATION_RESULT: "FieldSchemaValidationResult",
  FIELD_SCHEMA_CUSTOM_ACTION: "FieldSchemaCustomAction",
} as const;

// Use the constants in the EXAMPLES object
export const EXAMPLES = {
  [EXAMPLES_KEYS.OPTION]: {
    code: `
export type Option = Record<string, string>;

const exampleOption: Option = {
  value: 'some_value',
  label: 'Some Label',
};
    `,
    description: "Definition of the Option type, which is a key-value pair.",
    title: "Option Type",
  },
  [EXAMPLES_KEYS.OPTIONS]: {
    code: `
export type Options = Option[];

const exampleOptions: Options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];
    `,
    description: "Definition of the Options type, an array of Option objects.",
    title: "Options Type",
  },
  [EXAMPLES_KEYS.FIELD_SCHEMA_FIELDS_VALUE_VARIANTS]: {
    code: `
export type FieldSchemaFieldsValueVariants = {
  OPTION: Option;
  STRING: string;
  NUMBER: number;
};

const exampleStringValue: FieldSchemaFieldsValueVariants['STRING'] = "hello";
const exampleNumberValue: FieldSchemaFieldsValueVariants['NUMBER'] = 42;
const exampleOptionValue: FieldSchemaFieldsValueVariants['OPTION'] = { value: 'option1', label: 'Option 1' };
    `,
    description:
      "FieldSchemaFieldsValueVariants type for defining possible values for fields.",
    title: "FieldSchemaFieldsValueVariants",
  },
  [EXAMPLES_KEYS.FIELD_SCHEMA_FIELDS_VALUES]: {
    code: `
export type FieldSchemaFieldsValues = 
  | FieldSchemaFieldsValueVariants['NUMBER']
  | FieldSchemaFieldsValueVariants['STRING']
  | FieldSchemaFieldsValueVariants['OPTION'];

const exampleValue: FieldSchemaFieldsValues = 42;  // It can be a number, string, or option
    `,
    description:
      "FieldSchemaFieldsValues type, which can be a number, string, or option.",
    title: "FieldSchemaFieldsValues",
  },
  [EXAMPLES_KEYS.FIELD_SCHEMA_FIELD_NAME]: {
    code: `
export type FieldSchemaFieldName = string;

const fieldName: FieldSchemaFieldName = "user_name";
    `,
    description: "FieldSchemaFieldName type, which is a string.",
    title: "FieldSchemaFieldName",
  },
  [EXAMPLES_KEYS.FIELD_SCHEMA_OTHER_FIELD_NAME]: {
    code: `
export type FieldSchemaOtherFieldName = FieldSchemaFieldName;

const otherFieldName: FieldSchemaOtherFieldName = "age";
    `,
    description:
      "FieldSchemaOtherFieldName type, which is an alias for FieldSchemaFieldName.",
    title: "FieldSchemaOtherFieldName",
  },
  [EXAMPLES_KEYS.FIELD_SCHEMA_FIELD_TYPES]: {
    code: `
export type FieldSchemaFieldTypes = FieldsTypes;

const fieldType: FieldSchemaFieldTypes = "STRING";  // Assuming "STRING" is part of FieldsTypes
    `,
    description:
      "FieldSchemaFieldTypes, representing the types of fields like STRING, NUMBER, etc.",
    title: "FieldSchemaFieldTypes",
  },
  [EXAMPLES_KEYS.FIELD_SCHEMA_STYLES_PROPERTIES]: {
    code: `
import { CSSProperties } from "react";

export type FieldSchemaStylesProperties = {
  style?: CSSProperties;
  className?: string;
};

const styleProps: FieldSchemaStylesProperties = {
  style: { color: "red", backgroundColor: "lightgray" },
  className: "my-custom-class",
};
    `,
    description: "FieldSchemaStylesProperties for applying styles and classes.",
    title: "FieldSchemaStylesProperties",
  },
  [EXAMPLES_KEYS.FIELD_SCHEMA_RULES]: {
    code: `
export type FieldSchemaRules = {
  hidden?: boolean;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  requiredErrorMessage?: string;
};

const fieldRules: FieldSchemaRules = {
  hidden: false,
  disabled: true,
  maxLength: 255,
  minLength: 8,
  required: true,
  requiredErrorMessage: "This field is required",
};
    `,
    description:
      "FieldSchemaRules that define validation and conditions for fields.",
    title: "FieldSchemaRules",
  },
  [EXAMPLES_KEYS.FIELD_SCHEMA_ACTION]: {
    code: `
export type FieldSchemaAction<Rules> = {
  rules: Rules;
  styles?: FieldSchemaStylesProperties;
};

const action: FieldSchemaAction<FieldSchemaRules> = {
  rules: {
    hidden: false,
    disabled: true,
    required: true,
  },
  styles: {
    className: "disabled-class",
  },
};
    `,
    description:
      "FieldSchemaAction for associating rules and styles with a field.",
    title: "FieldSchemaAction",
  },
  [EXAMPLES_KEYS.FIELDS_SCHEMA_CONDITION]: {
    code: `
export type FieldsSchemaCondition<Rules> = {
  otherFieldName: FieldSchemaOtherFieldName;
  comparison: ComparisonTypes;
  value: FieldSchemaFieldsValues;
  action: FieldSchemaAction<Rules>;
};

const condition: FieldsSchemaCondition<FieldSchemaRules> = {
  otherFieldName: "user_age",
  comparison: "greaterThan",  // Assuming ComparisonTypes include "greaterThan"
  value: 18,
  action: {
    rules: {
      required: true,
    },
  },
};
    `,
    description:
      "FieldsSchemaCondition for conditional logic based on other fields.",
    title: "FieldsSchemaCondition",
  },
  [EXAMPLES_KEYS.FIELD_SCHEMA_VALIDATORS]: {
    code: `
export type FieldSchemaValidators = {
  minLength?: number;
  maxLength?: number;
  pattern?: string;
};

const validators: FieldSchemaValidators = {
  minLength: 8,
  maxLength: 255,
  pattern: "^[a-zA-Z0-9]+$",
};
    `,
    description:
      "FieldSchemaValidators defining validation patterns, lengths, and patterns.",
    title: "FieldSchemaValidators",
  },
  [EXAMPLES_KEYS.FIELD_SCHEMA_DEPENDENCIES]: {
    code: `
export type FieldSchemaDependencies = {
  conditionField: FieldSchemaOtherFieldName;
  conditionValue: FieldSchemaFieldsValues;
};

const dependencies: FieldSchemaDependencies = {
  conditionField: "age",
  conditionValue: 21,
};
    `,
    description:
      "FieldSchemaDependencies to set field relationships based on values.",
    title: "FieldSchemaDependencies",
  },
  [EXAMPLES_KEYS.FIELD_SCHEMA_VALIDATION_RESULT]: {
    code: `
export type FieldSchemaValidationResult = {
  isValid: boolean;
  errorMessage?: string;
};

const validationResult: FieldSchemaValidationResult = {
  isValid: false,
  errorMessage: "This field is required.",
};
    `,
    description:
      "FieldSchemaValidationResult for the validation state of a field.",
    title: "FieldSchemaValidationResult",
  },
  [EXAMPLES_KEYS.FIELD_SCHEMA_CUSTOM_ACTION]: {
    code: `
export type FieldSchemaCustomAction = {
  actionName: string;
  actionHandler: () => void;
};

const customAction: FieldSchemaCustomAction = {
  actionName: "submitForm",
  actionHandler: () => alert("Form submitted!"),
};
    `,
    description:
      "FieldSchemaCustomAction for defining custom actions associated with fields.",
    title: "FieldSchemaCustomAction",
  },
} as const;

export const SIDEBAR_TREE: any = {
  title: "docs",
  open: true,
  metadata: {
    icon: Folder,
    href: "",
  },
  children: [
    {
      title: "schemas",
      open: true,
      metadata: {
        icon: Folder,
        href: "",
      },
      children: [
        {
          title: EXAMPLES[EXAMPLES_KEYS.FIELD_SCHEMA_ACTION].title,
          open: true,
          metadata: {
            icon: File,
            href: `${NAV_ITEMS.docsSchemas.href}#${EXAMPLES_KEYS.FIELD_SCHEMA_ACTION}`,
          },
        },
        {
          title: EXAMPLES[EXAMPLES_KEYS.FIELD_SCHEMA_RULES].title,
          open: true,
          metadata: {
            icon: File,
            href: `${NAV_ITEMS.docsSchemas.href}#${EXAMPLES_KEYS.FIELD_SCHEMA_RULES}`,
          },
        },
        {
          title:
            EXAMPLES[EXAMPLES_KEYS.FIELD_SCHEMA_FIELDS_VALUE_VARIANTS].title,
          open: true,
          metadata: {
            icon: File,
            href: `${NAV_ITEMS.docsSchemas.href}#${EXAMPLES_KEYS.FIELD_SCHEMA_FIELDS_VALUE_VARIANTS}`,
          },
        },
        {
          title: EXAMPLES[EXAMPLES_KEYS.FIELD_SCHEMA_FIELDS_VALUES].title,
          open: true,
          metadata: {
            icon: File,
            href: `${NAV_ITEMS.docsSchemas.href}#${EXAMPLES_KEYS.FIELD_SCHEMA_FIELDS_VALUES}`,
          },
        },
        {
          title: EXAMPLES[EXAMPLES_KEYS.FIELD_SCHEMA_FIELD_NAME].title,
          open: true,
          metadata: {
            icon: File,
            href: `${NAV_ITEMS.docsSchemas.href}#${EXAMPLES_KEYS.FIELD_SCHEMA_FIELD_NAME}`,
          },
        },
        {
          title: EXAMPLES[EXAMPLES_KEYS.FIELD_SCHEMA_OTHER_FIELD_NAME].title,
          open: true,
          metadata: {
            icon: File,
            href: `${NAV_ITEMS.docsSchemas.href}#${EXAMPLES_KEYS.FIELD_SCHEMA_OTHER_FIELD_NAME}`,
          },
        },
        {
          title: EXAMPLES[EXAMPLES_KEYS.FIELD_SCHEMA_FIELD_TYPES].title,
          open: true,
          metadata: {
            icon: File,
            href: `${NAV_ITEMS.docsSchemas.href}#${EXAMPLES_KEYS.FIELD_SCHEMA_FIELD_TYPES}`,
          },
        },
        {
          title: EXAMPLES[EXAMPLES_KEYS.FIELD_SCHEMA_STYLES_PROPERTIES].title,
          open: true,
          metadata: {
            icon: File,
            href: `${NAV_ITEMS.docsSchemas.href}#${EXAMPLES_KEYS.FIELD_SCHEMA_STYLES_PROPERTIES}`,
          },
        },
        {
          title: EXAMPLES[EXAMPLES_KEYS.FIELD_SCHEMA_DEPENDENCIES].title,
          open: true,
          metadata: {
            icon: File,
            href: `${NAV_ITEMS.docsSchemas.href}#${EXAMPLES_KEYS.FIELD_SCHEMA_DEPENDENCIES}`,
          },
        },
        {
          title: EXAMPLES[EXAMPLES_KEYS.FIELD_SCHEMA_VALIDATORS].title,
          open: true,
          metadata: {
            icon: File,
            href: `${NAV_ITEMS.docsSchemas.href}#${EXAMPLES_KEYS.FIELD_SCHEMA_VALIDATORS}`,
          },
        },
        {
          title: EXAMPLES[EXAMPLES_KEYS.FIELD_SCHEMA_VALIDATION_RESULT].title,
          open: true,
          metadata: {
            icon: File,
            href: `${NAV_ITEMS.docsSchemas.href}#${EXAMPLES_KEYS.FIELD_SCHEMA_VALIDATION_RESULT}`,
          },
        },
        {
          title: EXAMPLES[EXAMPLES_KEYS.FIELD_SCHEMA_CUSTOM_ACTION].title,
          open: true,
          metadata: {
            icon: File,
            href: `${NAV_ITEMS.docsSchemas.href}#${EXAMPLES_KEYS.FIELD_SCHEMA_CUSTOM_ACTION}`,
          },
        },
      ],
    },
  ],
};
