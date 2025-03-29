import styles from './styles.module.css';
import logo from '@/assets/Logo.svg';
import profile from '@/assets/Profile.png';
import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function Header() {

    const router = useRouter();

    function navigateToHome() {
        router.push("/home");
    }
    function navigateToLogin() {
        router.push("/");
    }
    return (
        <>
            <div className={styles.box}>
                <button onClick={navigateToHome}>
                    <Image src={logo} alt="logo da livraria" />
                </button>
                <div className={styles.secondaryButtons}>
                <button onClick={navigateToLogin}>
                    <Image src={profile} alt='imagem de profile'/>
                </button>
                </div>
            </div>
        </>
    )
}