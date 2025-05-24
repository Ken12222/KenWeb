import Button from "../Components/button";
import InputField from "../Components/input";
import TextField from "../Components/textbox";

export default function Contact() {
  return (
    <section className="w-5/6 mx-auto my-16">
      <p className="text-center">Let Me A Message</p>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <InputField
          fieldName={"Firstname"}
          placetext={"Please enter firstname"}
        />
        <InputField
          fieldName={"Lastname"}
          placetext={"Please enter lastname"}
        />
      </div>
      <InputField fieldName={"Subject"} placetext={"Please enter Subject"} />
      <TextField fieldName={"Message"} placetext={"Please enter Message"} />
      <Button hrefName="/submit" buttonName={"Submit"} />
    </section>
  );
}
