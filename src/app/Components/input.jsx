export default function InputField({ fieldName, placetext }) {
  return (
    <div className="w-full flex flex-col my-4">
      <label htmlFor={fieldName}>{fieldName}</label>
      <input
        type="text"
        name={fieldName}
        placeholder={placetext}
        className=" text-sm p-2 border text-white bg-black"
      />
    </div>
  );
}
