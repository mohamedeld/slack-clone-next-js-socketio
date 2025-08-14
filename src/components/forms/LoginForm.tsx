"use client";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';


const formSchema = z.object({
    email:z.email({message:"Enter valid email"})
})

const LoginForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues:{
            email:''
        },
        resolver:zodResolver(formSchema),
        mode:'onChange'
    });

    const onSubmit = async (values:z.infer<typeof formSchema>)=>{
        try{

        }catch(error){}
    }
    const isSubmitting = form.formState.isSubmitting;
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='mb-2'>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" type='email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
            <Button className='w-full' type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting" : "Submit"}
            </Button>
        </form>
    </Form>
  )
}

export default LoginForm