export default function InputField({ fieldName, placetext, fieldType }) {
  return (
    <div className="w-full flex flex-col my-4">
      <label htmlFor={fieldName} className="text-sm mb-2">
        {fieldName}
      </label>
      <input
        type={fieldType}
        name={fieldName}
        placeholder={placetext}
        className=" text-sm p-2 border border-gray-600 text-white bg-black"
      />
    </div>
  );
}
