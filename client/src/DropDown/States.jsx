
const States = ({ data, display, handleClick, selected }) => {
    return (
        <>
            {data.map((item, i) =>
                <div
                    style={{ backgroundColor: display }}
                    id={i}
                >
                    <input
                        className="drop-input"
                        key={i}
                        name={item.name}
                        type="checkbox"
                        id={item.abbreviation}
                        value={item.abbreviation}
                        onClick={(e) => handleClick(e, e.target.id)}
                    />
                    <label
                        style={{
                            backgroundColor: selected.includes(item.name)
                                ? "lightblue"
                                : null
                        }}
                        name={item.name}
                        htmlFor={item.abbreviation}>
                        {item.name}
                    </label>
                    <br />
                </div>
            )}
        </>
    )
};

export default States
