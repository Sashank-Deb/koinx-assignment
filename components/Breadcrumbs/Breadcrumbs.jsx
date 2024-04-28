import Link from 'next/link';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = ({coin}) => {
    return(
        <div className={styles.container}>
            <Link href={'/'}>Cryptocurrencies&nbsp;</Link>
            <span className={styles.coin}>{" >> "}{coin}</span>
        </div>
    );
}
export default Breadcrumbs