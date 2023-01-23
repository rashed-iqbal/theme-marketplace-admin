type LabelProps = {
    label: string;
    labelstyle: string;
    handleOnChange: any;
    value: any;
};

const Checkbox = ({ label, labelstyle, handleOnChange, value }: LabelProps) => {
    return (
        <div className="">
            <label className="flex items-center">
                <input
                    type="checkbox"
                    name="check"
                    onChange={(event) => handleOnChange(event)}
                    value={value}
                />
                {/* <input type="checkbox" className="" checked={true} /> */}
                <span className={labelstyle}>{label}</span>
            </label>
        </div>
    );
};
export default Checkbox;
