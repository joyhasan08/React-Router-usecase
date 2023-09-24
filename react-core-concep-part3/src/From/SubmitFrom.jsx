

const SubmitFrom = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault(); // prevent from reloading page
        console.log(e);
        console.log("susuususu");
    }
    return (
        <div >
            <form onSubmit={handleOnSubmit}>
                <input type="text" /> <br />
                <input type="submit" value="Submit" /> <br />

            </form>
        </div>
    );
};

SubmitFrom.propTypes = {

};

export default SubmitFrom;