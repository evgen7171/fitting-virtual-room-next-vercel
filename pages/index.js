import Link from 'next/link';
import styles from '../styles/Home.module.css'
import {table, someInfo} from '../resources/data';

export default function Index() {
    const data = table || [];
    const info = someInfo || {};
    return (
        <div className={styles.container}>
            <h4>API Test</h4>
            <hr/>
            <table className={styles.table} style={{width: '100%'}}>
                <tbody>{
                    data.map((item, key) => (
                        <tr key={key}>
                            <td>
                                {
                                    <Link href={item.link}><a>{item.link}</a></Link>
                                }
                            </td>
                            <td>{item.method}</td>
                            <td>{item.desc}</td>
                        </tr>
                    ))
                }</tbody>
            </table>
            <hr/>
            <div className={styles.inline}>
                <span className={styles.bold}>Ключи для запроса&nbsp;
                    <span className={styles.red}>/api/firebase</span>:</span>
                <table className={styles.table}>
                    <tr>
                        {
                            info.firebaseKeys.map((item, key) => (
                                <td key={key}>{item}</td>
                            ))
                        }
                    </tr>
                </table>
            </div>
            <hr/>
        </div>
    )
}
