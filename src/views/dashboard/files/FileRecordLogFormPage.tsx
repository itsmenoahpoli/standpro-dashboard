import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Card } from "flowbite-react";

const FilesRecordLogFormPage: React.FC = () => {
  const { handleSubmit, register } = useForm();

  const handleFormSubmit = handleSubmit(() => {
    console.log("form submitted");
  });

  return (
    <div className="flex flex-col gap-y-8">
      <div className="container pt-5 mx-auto">
        <Link to="/dashboard" className="text-blue-800 underline">
          Back to home
        </Link>
      </div>
      <div className="flex flex-col gap-y-3 text-center mt-10">
        <h1 className="text-2xl font-medium">RECORD LOG SHEET FORM</h1>
      </div>

      <div className="container flex justify-center gap-y-5 mx-auto">
        <Card className="w-1/2">
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-y-3">
            <input placeholder="Input" {...register("")} />
            <input placeholder="Input" {...register("")} />
            <input placeholder="Input" {...register("")} />
            <input placeholder="Input" {...register("")} />
            <input placeholder="Input" {...register("")} />
            <input placeholder="Input" {...register("")} />
            <input placeholder="Input" {...register("")} />
            <input placeholder="Input" {...register("")} />
            <Button type="submit">Submit</Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default FilesRecordLogFormPage;
