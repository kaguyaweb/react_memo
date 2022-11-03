import styles from './Modal.module.css'

type Props = {
    ok: () => void
    ng: () => void
}

const Modal = (props: Props) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <span>Delete?</span>
                <div>
                    <button onClick={props.ng}>No</button>
                    <button onClick={props.ok}>Yes</button>
                </div>
            </div>
        </div>
    )
}

export default Modal