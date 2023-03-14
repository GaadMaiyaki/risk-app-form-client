export const fields = [
  {
    name: "parent_field",
    type: "text",
    value: "yes",
    label: "hello here",
    placeholder: "hello world",
    validation: null,
    display_deps: null,
    value_deps: null,
    section: 2,
    group: 1,
    section_name: "section name 2",
    formatting: null,
    children: null,
    tooltip:
      "tooltip uiew7j neewjh hjewj ewhewjhe ehjewjhjhew ejkewejhewhj ehjewhje ewhjewhj",
  },

  {
    name: "lender_cc",
    label: "Lender Loan Contact",
    type: "linear",
    validation: { type: "text", message: null },
    display_deps: null,
    value_deps: null,
    section: 1,
    group: 1,
    section_name: "section name 1",
    formatting: null,
    tooltip: "hello",

    children: [
      {
        name: "lender_cc_name",
        placeholder: "Name",
        type: "text",
        label: "lender cc name",
        value: "",
        validation: { type: "text", message: null },
        formatting: null,
      },
      {
        name: "lender_cc_email",
        placeholder: "Email",
        label: "lender cc email",
        type: "email",
        value: "email",
        validation: { type: "email", message: null },
        formatting: null,
      },
      {
        name: "lender_cc_phone",
        placeholder: "Phone",
        type: "tel",
        value: "",
        label: "lender cc phone",
        formatting: { type: "phone", format: null },
        validation: {
          type: "tel",
          message: null,
          regex: "^\\+1 \\(\\d{3}\\) \\d{3}-\\d{4}$",
        },
      },
    ],
  },
];
