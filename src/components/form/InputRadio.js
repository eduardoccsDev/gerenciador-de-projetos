import styles from "./InputRadio.module.css";
function InputRadio({options, handleOnChange, check}){
    return(
        <>
        <p className={styles.radioTitle}>Prioridade do projeto:</p>
        <div className={styles.radioContainer}>
            {options.map((option) => (
                <div className={styles.radioOpts}>
                    <input
                    id={option.nomePrioridade}
                    type="radio"
                    name="prioridades"
                    value={option.nomePrioridade}
                    onChange={handleOnChange}
                    />
                    <label
                    htmlFor={option.nomePrioridade}
                    style={{color:option.corPrioridade}}>
                        {option.nomePrioridade}
                    </label>
                </div>
            ))}
        </div>

        </>
    )
}
export default InputRadio