import React from "react";
import type { FormGroupProps } from "./form-group.type";
import { Input, Label } from "../../atoms";

const FormGroup: React.FC<FormGroupProps> = ({
  label,
  value,
  onChange,
  id,
}) => (
  <div className="mb-4">
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} value={value} onChange={onChange} />
  </div>
);

export default FormGroup;
