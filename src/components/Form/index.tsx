import { Field, Form, Formik, useFormikContext } from "formik";
import {
  useState,
  type FunctionComponent,
  type HTMLInputTypeAttribute,
  useEffect,
} from "react";
import * as Yup from "yup";
import { FaPhone } from "react-icons/fa6";

type RSVPForm = {
  guest: string;
  contact: string;
  attendees: number | string;
};
export const FormikForm = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const to = setTimeout(() => setSubmitted(false), 3000);

      return () => clearTimeout(to);
    }
  }, [submitted]);
  return (
    <Formik<RSVPForm>
      initialValues={{ guest: "", contact: "", attendees: "" }}
      onSubmit={async (values, actions) => {
        await fetch("/api/submit", {
          method: "POST",
          body: JSON.stringify(values),
        }).then((res) => {
          if (res.ok) {
            setSubmitted(true);
            actions.resetForm();
          }
        });
        actions.setSubmitting(false);
      }}
      validationSchema={Yup.object().shape({
        guest: Yup.string().required("须填 Required."),
        contact: Yup.string().required("须填 Required."),
        attendees: Yup.string().required("须填 Required."),
      })}
    >
      {({ isSubmitting }) => (
        <Form className="flex w-full flex-col items-center justify-center gap-2">
          <TextField name="guest" placeholder="姓名 Guest Name" />
          <TextField
            name="contact"
            placeholder="联络号码 Contact No."
            inputType="tel"
          />
          <TextField
            name="attendees"
            placeholder="出席人数 Attendees"
            inputType="number"
          />
          <button
            type="submit"
            disabled={isSubmitting || submitted}
            className={`mt-1 flex flex-col items-center rounded-md px-8 py-1 font-roboto uppercase transition-all duration-100 text-white${submitted ? " bg-green-500" : " bg-[#b07751]"}`}
          >
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <p className="">{submitted ? "提交成功!" : "提交"}</p>
            <p className="tracking-widest">
              {submitted ? "Success!" : "Submit"}
            </p>
          </button>
          <div className="flex w-full flex-row items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => window.open("tel:+60123998038")}
              className="flex w-[100px] flex-row items-center justify-center gap-1 rounded-lg bg-[#ffd4b7] py-1"
            >
              <FaPhone />
              <p className="font-roboto font-bold">Cloud</p>
            </button>
            <button
              type="button"
              onClick={() => window.open("tel:+60149618215")}
              className="flex w-[100px] flex-row items-center justify-center gap-1 rounded-lg bg-[#ffd4b7] py-1"
            >
              <FaPhone />
              <p className="font-roboto font-bold">Jayne</p>
            </button>
          </div>
        </Form>
      )}
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
        className={`w-full overflow-hidden rounded-full bg-[#b07751A0] px-3 py-2 text-white placeholder:text-white focus-within:outline-none${errors[name] ? " ring-2 ring-red-500" : ""}`}
        placeholder={placeholder}
      />
      <p className="w-full text-end text-xs italic text-red-600">
        {errors[name]}
      </p>
    </div>
  );
};
