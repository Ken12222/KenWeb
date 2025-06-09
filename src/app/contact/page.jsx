import Button from "../Components/button";
import InputField from "../Components/input";
import TextField from "../Components/textbox";

export default function Contact() {
  return (
    <section className="w-5/6 mx-auto my-16">
      <p className="text-center text-2xl">Get In Touch</p>
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <InputField
          fieldType={"text"}
          fieldName={"Firstname"}
          placetext={"Please enter firstname"}
        />
        <InputField
          fieldType={"text"}
          fieldName={"Lastname"}
          placetext={"Please enter lastname"}
        />
      </div>
      <InputField
        fieldType={"text"}
        fieldName={"Subject"}
        placetext={"Please enter Subject"}
      />
      <TextField fieldName={"Message"} placetext={"Please enter Message"} />
      <Button hrefName="/submit" buttonName={"Submit"} />
    </section>
  );
}
