import { useForm } from "react-hook-form"

export default function Form() {
  type FormValues={name:string,age:number}
  const {register,handleSubmit}=useForm<FormValues>()
const onsubmit = (data: FormValues) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <input placeholder="name" {...register('name')}/>
        <input placeholder="age" {...register('age')}/>
<input type="submit"/>      </form>
    </div>
  )
}
