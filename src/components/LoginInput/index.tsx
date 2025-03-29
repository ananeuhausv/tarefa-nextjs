'use client'

import { useForm } from 'react-hook-form'
import styles from './styles.module.css'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import LoginButton from '@/components/LoginButton';
import { useRouter } from 'next/navigation';

const userSchema = z.object({
    password: z.string().nonempty('Senha não pode ser vazia.').min(6,'Senha deve ter, no mínimo, 6 caracteres.'),
    email: z.string().nonempty('Esse campo não pode ser vazio.').email('Digite um e-mail válido!')
})

type User = z.infer<typeof userSchema>

export default function LoginInput() {

    const router = useRouter();

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<User>({
        resolver: zodResolver(userSchema)
    });

    async function createUser(data: User) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
        router.push("/home");
    }

    return(
        <div className={styles.login}>
            <form onSubmit={handleSubmit(createUser)} noValidate>
                <div>
                   <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Digite aqui seu e-mail"
                        {...register('email')}
                    /> 
                    {errors.email && <span className={styles.errors}>{errors.email.message}</span>}
                </div>
                
                <div>
                   <label htmlFor="password">Senha</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Digite aqui sua senha"
                        {...register('password')}
                    /> 
                    {errors.password && <span className={styles.errors}>{errors.password.message}</span>}
                </div>

                <LoginButton isSubmitting={isSubmitting}/>
            </form>
        </div>
    )
}