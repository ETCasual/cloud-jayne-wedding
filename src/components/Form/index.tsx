import { Field, Form, Formik, useFormikContext } from "formik";
import type { FunctionComponent, HTMLInputTypeAttribute } from "react";

type RSVPForm = {
  guest: string;
  contact: string;
  attendees: number;
};
export const FormikForm = () => {
  return (
    <Formik<RSVPForm>
      initialValues={{ guest: "", contact: "", attendees: 0 }}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values));
        actions.setSubmitting(false);
      }}
    >
      <Form className="flex w-full flex-col items-center justify-center gap-3">
        <TextField name="guest" placeholder="Guest Name" />
        <TextField name="contact" placeholder="Contact No." inputType="tel" />
        <TextField
          name="attendees"
          placeholder="Attendees"
          inputType="number"
        />
        <button
          type="submit"
          className="mt-2 flex flex-col items-center rounded-md bg-[#b07751] px-8 py-1 font-roboto uppercase text-white"
        >
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <p className="">提交</p>
          <p className="tracking-widest">Submit</p>
        </button>
      </Form>
    </Formik>
  );
};

interface TextFieldProps {
  name: keyof RSVPForm;
  inputType?: HTMLInputTypeAttribute;
  placeholder: string;
}

const TextField: FunctionComponent<TextFieldProps> = ({
  name,
  inputType,
  placeholder,
}) => {
  const { errors, isSubmitting } = useFormikContext<RSVPForm>();
  return (
    <div className="flex w-full flex-col gap-1">
      <Field
        type={inputType ?? "text"}
        name={name}
        id={name}
        disabled={isSubmitting}
        min={inputType === "number" ? "1" : ""}
        max={inputType === "number" ? "999" : ""}
        className="w-full overflow-hidden rounded-full bg-[#b07751A0] px-3 py-2 text-white placeholder:text-white focus-within:outline-none"
        placeholder={placeholder}
      />
      <p className="w-full text-end text-xs italic text-red-600">
        {errors[name]}
      </p>
    </div>
  );
};
