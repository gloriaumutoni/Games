import { useForm } from "react-hook-form";
import { z } from "zod";
import {zodResolver} from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(3,{message:'Name must me atlead 3 charracters'}),
  age: z.number().min(10),
});
type FormValues = z.infer<typeof schema>;
export default function Form() {
  const {
    register,
    handleSubmit,
    formState:{errors},
  } = useForm<FormValues>({resolver:zodResolver(schema)});
  const onsubmit = (data: FormValues) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <input placeholder="name" {...register("name",{required:true, minLength:3})}/>
        {errors.name && <p>{errors.name.message}</p>}
        <input placeholder="age" {...register("age",{valueAsNumber:true})}/>
        {errors.age && <p>{errors.age.message}</p>}
        <input type="submit" />
      </form>
    </div>
  );
}
