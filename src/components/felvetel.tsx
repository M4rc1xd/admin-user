import type {Ital} from './italok.ts'
import { useEffect} from 'react'

export default function Felvetel() {

    useEffect (() => {
        async function felvetel() {
            try{
                const response = await fetch('italok.json', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nev: (document.querySelector('input[name="nev"]') as HTMLInputElement).value,
                        marka: (document.querySelector('input[name="marka"]') as HTMLInputElement).value,
                        ar: parseFloat((document.querySelector('input[name="ar"]') as HTMLInputElement).value),
                        mennyiseg: parseFloat((document.querySelector('input[name="mennyiseg"]') as HTMLInputElement).value),
                        lejar: new Date((document.querySelector('input[name="lejar"]') as HTMLInputElement).value),
                        szensavas: (document.querySelector('input[name="szensavas"]') as HTMLInputElement).checked,
                    }),
                });
                if (!response.ok) {
                    throw new Error('Hiba történt az adatfelvétel során');
                }
                const data = await response.json();
                console.log('Sikeres adatfelvétel:', data);
            } catch (error) {
                console.error('Hiba történt az adatfelvétel során:', error);
            }
        }
    }, [])
    
    return(
        <>
        <form method="post">
            <input type="text" name="nev" placeholder="Név" />
            <input type="text" name="marka" placeholder="Márka" />
            <input type="number" name="ar" placeholder="Ár" />
            <input type="number" name="mennyiseg" placeholder="Mennyiség" />
            <input type="date" name="lejar" placeholder="Lejárat" />
            <input type="checkbox" name="szensavas" placeholder="Szénsavas" />
            <button type="submit" onClick={(e) => {
                e.preventDefault();
            }}>Felvétel</button>
        </form>
        </>
    )
}