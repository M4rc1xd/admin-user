import type { Ital } from "./italok";

interface ItalListazasProps {
    oldal : "user" | "moderator" | "admin";
    italok : Ital[];
}

export default function ItalListazas(props: ItalListazasProps) {
    return (
        <>
      <table>
        <thead>
          <tr>
            <th>Név</th>
            <th>Márka</th>
            <th>Ár</th>
            <th>Mennyiség</th>
            <th>Lejárat</th>
            <th>Szénsavas</th>
          </tr>
        </thead>
        <tbody>
          {props.italok.map((ital) => (
            <tr key={ital.id}>
              <td>{ital.nev}</td>
              <td>{ital.marka}</td>
              <td>{ital.ar}</td>
              <td>{ital.mennyiseg}</td>
              <td>{new Date(ital.lejar).toISOString().split('T')[0]}</td>
              <td>{(ital.szensavas ? 'Igen' : 'Nem')}{props.oldal !== "user" && <input type="checkbox" checked={ital.szensavas} onChange={() =>
                      props.italok[ital.id].szensavas = !props.italok[ital.id].szensavas
                    }/>}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    )
}