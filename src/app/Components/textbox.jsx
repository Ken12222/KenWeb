export default function TextField({ fieldName, placetext }) {
  return (
    <div className="w-full flex flex-col my-4">
      <label htmlFor={fieldName} className="text-sm mb-2">
        {fieldName}
      </label>
      <textarea
        type="text"
        name={fieldName}
        placeholder={placetext}
        className="h-32 text-sm p-2 border border-gray-600 text-white bg-black"
      />
    </div>
  );
}
